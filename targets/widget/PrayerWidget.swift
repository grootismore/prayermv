import WidgetKit
import SwiftUI
import AppIntents

/// One selectable island, backed by the full island list the RN app itself
/// ships (see PrayerData.json / lib/prayerTimes.ts's getAllIslands()) -
/// not a fixed compile-time list - so every island the app can show is also
/// searchable and selectable directly in the widget's own Edit Widget UI.
struct IslandEntity: AppEntity, Identifiable {
    let id: Int
    let atoll: String
    let name: String

    static var typeDisplayRepresentation: TypeDisplayRepresentation = "Island"
    static var defaultQuery = IslandEntityQuery()

    /// A sentinel entity (id 0 - never a real island id; mv-prayertimes'
    /// own ids start at 1, and the supplemental islands in
    /// lib/prayerTimes.ts use -1/-2) standing in for "whatever the app
    /// currently has selected". This used to be modeled as leaving the
    /// `island` @Parameter unset (Optional), but WidgetKit can resolve an
    /// unconfigured optional parameter to some concrete value on its own
    /// (e.g. for a widget added straight from the gallery, without ever
    /// opening Edit Widget) before this code gets a chance to treat "no
    /// explicit choice" as "follow the app" - which is exactly what was
    /// making freshly-added widgets show a fixed island instead. Making
    /// this an explicit, always-first-suggested entity, combined with
    /// IslandEntityQuery.defaultResult() below, gives WidgetKit a real
    /// value to resolve to instead of leaving it to guess.
    static let matchApp = IslandEntity(id: 0, atoll: "", name: "")

    var isMatchApp: Bool { id == 0 }

    var displayRepresentation: DisplayRepresentation {
        isMatchApp
            ? DisplayRepresentation(title: "Match App Selection")
            : DisplayRepresentation(title: "\(atoll) \(name)")
    }
}

/// A small, curated shortlist (one per region) shown before the user types
/// a search - the full ~200-island list is reachable by search, this is
/// just a sensible starting point. Also the set of islands with
/// hand-verified Dhivehi/Arabic names below.
private let curatedIslandIds = [102, 197, 196, 28, 169, 93, 108, 104]

struct IslandEntityQuery: EntityStringQuery {
    func entities(for identifiers: [Int]) async throws -> [IslandEntity] {
        var results: [IslandEntity] = []
        if identifiers.contains(0) {
            results.append(.matchApp)
        }
        let wanted = Set(identifiers)
        results += PrayerData.raw.islands
            .filter { wanted.contains($0.islandId) }
            .map { IslandEntity(id: $0.islandId, atoll: $0.atoll, name: $0.island) }
        return results
    }

    func entities(matching string: String) async throws -> [IslandEntity] {
        let needle = string.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        guard !needle.isEmpty else { return try await suggestedEntities() }
        return PrayerData.raw.islands
            .filter { $0.island.lowercased().contains(needle) || $0.atoll.lowercased().contains(needle) }
            .prefix(50)
            .map { IslandEntity(id: $0.islandId, atoll: $0.atoll, name: $0.island) }
    }

    func suggestedEntities() async throws -> [IslandEntity] {
        [.matchApp] + curatedIslandIds.compactMap { id in
            PrayerData.island(for: id).map { IslandEntity(id: $0.islandId, atoll: $0.atoll, name: $0.island) }
        }
    }

    /// The value WidgetKit uses for this parameter before the user has
    /// ever explicitly configured it - see IslandEntity.matchApp's comment.
    func defaultResult() async -> IslandEntity? {
        .matchApp
    }
}

/// Hand-verified Dhivehi/Arabic names for a small, fixed set of islands -
/// the exact same strings lib/islandNames.ts's transliterator produces for
/// them in the RN app, copied over by hand and diffed against its output.
/// That's safe to do for a small fixed set, but not practical to verify for
/// the full ~200-island list without either porting that whole
/// transliteration engine to Swift (unverifiable in this sandbox - no
/// Swift compiler available) or shipping unverified guesses. Any island
/// outside this set falls back to its English "Atoll Name" form regardless
/// of the widget's selected display language.
private let curatedIslandLocalization: [Int: (dv: String, ar: String)] = [
    102: ("ކ. މާލެ", "ك. مالي"), // K. Male'
    197: ("ސ. ހިތަދޫ", "س. هيثاذو"), // S. Hithadhoo
    196: ("ޏ. ފުވަހްމުލަހް", "غن. فوفاهمولاه"), // Gn. Fuvahmulah
    28: ("ހދ. ކުޅުދުފްފުށި", "هذ. كولوذوففوشي"), // HDh. Kulhudhuffushi
    169: ("ލ. ގަން", "ل. جان"), // L. Gan
    93: ("ޅ. ނައިފަރު", "ل. نايفارو"), // Lh. Naifaru
    108: ("އއ. އުކުޅަސް", "أأ. أكولاس"), // AA. Ukulhas
    104: ("ކ. މާފުށި", "ك. مافوشي"), // K. Maafushi
]

private func localizedIslandLabel(id: Int, atoll: String, name: String, language: WidgetLanguage) -> String {
    switch language {
    case .en:
        return "\(atoll) \(name)"
    case .dv:
        return curatedIslandLocalization[id]?.dv ?? "\(atoll) \(name)"
    case .ar:
        return curatedIslandLocalization[id]?.ar ?? "\(atoll) \(name)"
    }
}

/// The widget's own display language - independent of the host app's
/// language setting. Unlike island, this deliberately isn't synced through
/// the shared App Group data (see PrayerData.swift's
/// appSelectedIslandId()): a language mismatch is far less disruptive than
/// an island mismatch, and always following the app's language would take
/// away the ability to pin a widget's language independently of the app's.
enum WidgetLanguage: String, AppEnum {
    case en, dv, ar

    static var typeDisplayRepresentation: TypeDisplayRepresentation = "Language"

    var label: String {
        switch self {
        case .en: return "English"
        case .dv: return "Dhivehi"
        case .ar: return "Arabic"
        }
    }

    static var caseDisplayRepresentations: [WidgetLanguage: DisplayRepresentation] = [
        .en: DisplayRepresentation(title: "English"),
        .dv: DisplayRepresentation(title: "Dhivehi"),
        .ar: DisplayRepresentation(title: "Arabic"),
    ]
}

/// What the widget's Language setting can be set to. "Match App" (the
/// default) follows the language the app mirrors into the shared App Group
/// (lib/widgetSync.ts's syncWidgetLanguage()); the other three pin the
/// widget to one language regardless of the app. Kept separate from
/// WidgetLanguage so everything that switches over the three real
/// languages stays exhaustive - an entry only ever carries a resolved one.
enum WidgetLanguageChoice: String, AppEnum {
    case app, en, dv, ar

    static var typeDisplayRepresentation: TypeDisplayRepresentation = "Language"

    static var caseDisplayRepresentations: [WidgetLanguageChoice: DisplayRepresentation] = [
        .app: DisplayRepresentation(title: "Match App Language"),
        .en: DisplayRepresentation(title: "English"),
        .dv: DisplayRepresentation(title: "Dhivehi"),
        .ar: DisplayRepresentation(title: "Arabic"),
    ]

    func resolved() -> WidgetLanguage {
        switch self {
        case .en: return .en
        case .dv: return .dv
        case .ar: return .ar
        case .app:
            return PrayerData.appLanguageCode().flatMap(WidgetLanguage.init(rawValue:)) ?? .en
        }
    }
}

/// Island defaults to IslandEntity.matchApp (via IslandEntityQuery's
/// defaultResult()), which means "match whatever island the app itself
/// currently has selected" (via the shared App Group data
/// lib/widgetSync.ts writes - see PrayerData.appSelectedIslandId()).
/// Picking a real island explicitly here, in the widget's own edit UI
/// (long-press -> Edit Widget), overrides that and pins the widget to
/// that island regardless of what the app is set to. Language works the
/// same way: it defaults to the app's language and can be pinned.
struct SelectIslandIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Select Island"
    static var description = IntentDescription(
        "Choose which island's prayer times to show, and the display language. Leave them on \"Match App\" to always follow the island and language selected in the app."
    )

    @Parameter(title: "Island")
    var island: IslandEntity

    @Parameter(title: "Language", default: .app)
    var language: WidgetLanguageChoice
}

struct PrayerEntry: TimelineEntry {
    let date: Date
    let islandLabel: String
    let moment: PrayerMoment?
    let today: [PrayerMoment]
    let language: WidgetLanguage
    /// When the prayer period now in effect began (the previous prayer's
    /// time) - the start of the progress ring/bar toward `moment`.
    let periodStart: Date?
}

struct PrayerProvider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> PrayerEntry {
        let fallback = PrayerData.island(for: PrayerData.defaultIslandId)
        let label = fallback.map { "\($0.atoll) \($0.island)" } ?? "-"
        return PrayerEntry(date: Date(), islandLabel: label, moment: nil, today: [], language: .en, periodStart: nil)
    }

    func snapshot(for configuration: SelectIslandIntent, in context: Context) async -> PrayerEntry {
        makeEntry(for: configuration, on: Date())
    }

    func timeline(for configuration: SelectIslandIntent, in context: Context) async -> Timeline<PrayerEntry> {
        let current = makeEntry(for: configuration, on: Date())

        // Refresh right when the shown prayer changes, rather than polling
        // on a tight interval (WidgetKit budgets refresh frequency anyway).
        guard let moment = current.moment else {
            return Timeline(entries: [current], policy: .atEnd)
        }

        // Rebuild "today" relative to the *next* entry's own activation
        // time, not now - if that transition is tomorrow's Fajr (i.e. the
        // last prayer of today just passed), today's now-stale times
        // would otherwise still be showing when that entry goes live.
        let nextEntry = makeEntry(for: configuration, on: moment.date)
        return Timeline(entries: [current, nextEntry], policy: .atEnd)
    }

    /// Whatever island was explicitly picked in the widget's own
    /// configuration wins; "Match App Selection" (the default - see
    /// IslandEntity.matchApp) instead falls back to the app's own current
    /// selection, and only falls back further to K. Male' if neither is
    /// available yet (e.g. a fresh install, before onboarding has run).
    private func resolvedIslandId(for configuration: SelectIslandIntent) -> Int {
        if !configuration.island.isMatchApp {
            return configuration.island.id
        }
        return PrayerData.appSelectedIslandId() ?? PrayerData.defaultIslandId
    }

    private func makeEntry(for configuration: SelectIslandIntent, on date: Date) -> PrayerEntry {
        let islandId = resolvedIslandId(for: configuration)
        let language = configuration.language.resolved()
        let raw = PrayerData.island(for: islandId)
        let label = raw.map { localizedIslandLabel(id: $0.islandId, atoll: $0.atoll, name: $0.island, language: language) } ?? "-"
        let today = PrayerData.todayMoments(islandId: islandId, now: date)
        let moment = PrayerData.nextMoment(islandId: islandId, now: date)
        return PrayerEntry(
            date: date,
            islandLabel: label,
            moment: moment,
            today: today,
            language: language,
            periodStart: periodStart(islandId: islandId, now: date)
        )
    }

    /// The most recent prayer time at or before `now` - today's, or
    /// yesterday's Isha when `now` is before today's Fajr.
    private func periodStart(islandId: Int, now: Date) -> Date? {
        if let last = PrayerData.todayMoments(islandId: islandId, now: now).last(where: { $0.date <= now }) {
            return last.date
        }
        let yesterday = Calendar.current.date(byAdding: .day, value: -1, to: now) ?? now
        return PrayerData.todayMoments(islandId: islandId, now: yesterday).last?.date
    }
}

/// Prayer names in each supported display language - the same strings as
/// locales/{en,dv,ar}.json's `prayers` section in the RN app, copied over
/// by hand since this is a small, fixed set of 6 words rather than
/// something needing the app's general translation machinery.
private let prayerNames: [WidgetLanguage: [PrayerName: String]] = [
    .en: [.fajr: "Fajr", .sunrise: "Sunrise", .dhuhr: "Dhuhr", .asr: "Asr", .maghrib: "Maghrib", .isha: "Isha"],
    .dv: [
        .fajr: "ފަތިސް", .sunrise: "އިރުއަރާ", .dhuhr: "މެންދުރު",
        .asr: "އަޞްރު", .maghrib: "މަޣްރިބު", .isha: "ޢިޝާ",
    ],
    .ar: [
        .fajr: "الفجر", .sunrise: "الشروق", .dhuhr: "الظهر",
        .asr: "العصر", .maghrib: "المغرب", .isha: "العشاء",
    ],
]

private func localizedPrayerName(_ prayer: PrayerName, _ language: WidgetLanguage) -> String {
    prayerNames[language]?[prayer] ?? prayer.displayName
}

/// For accessoryCircular's tight couple-of-characters-per-line space.
/// English keeps PrayerName's existing all-caps abbreviations
/// ("FAJR"/"SUN"/...); Thaana/Arabic have no equivalent all-caps
/// abbreviation convention (those scripts don't have letter case), so
/// they fall back to the same full name shown everywhere else.
private func localizedShortPrayerName(_ prayer: PrayerName, _ language: WidgetLanguage) -> String {
    language == .en ? prayer.shortName : localizedPrayerName(prayer, language)
}


/// Matches lib/theme.ts's Noor+ palette (Forest Night, with the mint hero
/// gradient) so the widget reads as the same product as the app. Fixed
/// colors throughout: the backgrounds have no separate light variant, so
/// text must stay legible on them whatever the system appearance is.
private extension Color {
    init(hex: UInt32) {
        self.init(
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255
        )
    }

    static let widgetBackground = Color(hex: 0x07241E)
    static let widgetBackgroundDeep = Color(hex: 0x041A15)
    static let widgetGround = Color(hex: 0x0E3D33)
    static let widgetGroundDeep = Color(hex: 0x051D17)
    static let widgetPrimary = Color(hex: 0x5CF39A)
    static let widgetGold = Color(hex: 0xFFD166)
    static let widgetTextPrimary = Color(hex: 0xF2FBF6)
    static let widgetMutedOnDark = Color(hex: 0xB6D3C5)
    static let widgetQuietOnDark = Color(hex: 0x92B5A5)
    static let widgetHeroFrom = Color(hex: 0x8CF7BC)
    static let widgetHeroTo = Color(hex: 0x3FDC85)
    static let widgetOnMint = Color(hex: 0x04261A)
    static let widgetOnMintMuted = Color(hex: 0x0B5A38)
}

/// Each prayer's own glyph - the same sun-and-moon set Home's list uses.
private func prayerSymbol(_ prayer: PrayerName) -> String {
    switch prayer {
    case .fajr: return "moon.haze.fill"
    case .sunrise: return "sunrise.fill"
    case .dhuhr: return "sun.max.fill"
    case .asr: return "sun.haze.fill"
    case .maghrib: return "sunset.fill"
    case .isha: return "moon.stars.fill"
    }
}

/// Dhivehi text uses MV MAG Round and Arabic text uses KFGQPC Douri
/// Uthmanic Script - both bundled in the widget target and listed in its
/// Info.plist's UIAppFonts (PostScript names "MvMAGR" and
/// "KFGQPCDouriUthmanicScript-Regul"). Each has a single weight and no Latin
/// letters. Everything else stays on the system font. If a font ever failed
/// to register, .custom falls back to the system font rather than breaking.
private func widgetFont(_ size: CGFloat, _ weight: Font.Weight = .semibold, language: WidgetLanguage) -> Font {
    switch language {
    case .dv: return Font.custom("MvMAGR", size: size)
    case .ar: return Font.custom("KFGQPCDouriUthmanicScript-Regul", size: size)
    case .en: return Font.system(size: size, weight: weight)
    }
}

/// Digits always use the system rounded face, tabular so times line up.
private func timeFont(_ size: CGFloat, _ weight: Font.Weight = .bold) -> Font {
    Font.system(size: size, weight: weight, design: .rounded).monospacedDigit()
}

private struct WidgetGround: View {
    var body: some View {
        ZStack {
            LinearGradient(
                colors: [Color.widgetGround, Color.widgetGroundDeep],
                startPoint: .top,
                endPoint: .bottom
            )
            RadialGradient(
                colors: [Color.widgetPrimary.opacity(0.2), Color.clear],
                center: .topLeading,
                startRadius: 0,
                endRadius: 260
            )
        }
    }
}

private struct MintGradient: View {
    var body: some View {
        LinearGradient(
            colors: [Color.widgetHeroFrom, Color.widgetHeroTo],
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
    }
}

struct PrayerWidgetView: View {
    @Environment(\.widgetFamily) var family
    var entry: PrayerEntry

    var body: some View {
        // Arabic reads right-to-left - SwiftUI can mirror the whole layout
        // for it directly, unlike the RN app side (see lib/i18n.ts) where
        // that's a bigger, separate piece of work.
        content
            .environment(\.layoutDirection, entry.language == .ar ? .rightToLeft : .leftToRight)
    }

    private var language: WidgetLanguage { entry.language }

    private func name(_ prayer: PrayerName) -> String {
        localizedPrayerName(prayer, language)
    }

    /// The span from the previous prayer to the next, when both are known -
    /// what the lock-screen ring and bar count through, live, with no
    /// timeline refreshes.
    private var period: ClosedRange<Date>? {
        guard let start = entry.periodStart, let end = entry.moment?.date, start < end else { return nil }
        return start...end
    }

    @ViewBuilder
    private var content: some View {
        switch family {
        case .accessoryCircular:
            circular
        case .accessoryRectangular:
            rectangular
        case .accessoryInline:
            inline
        case .systemSmall:
            small
        default:
            medium
        }
    }

    // MARK: Lock screen

    @ViewBuilder
    private var circular: some View {
        Group {
            if let moment = entry.moment, let range = period {
                ProgressView(timerInterval: range, countsDown: false) {
                    EmptyView()
                } currentValueLabel: {
                    VStack(spacing: 0) {
                        Image(systemName: prayerSymbol(moment.name))
                            .font(.system(size: 11, weight: .semibold))
                        Text(moment.timeString)
                            .font(timeFont(12))
                            .minimumScaleFactor(0.7)
                            .lineLimit(1)
                    }
                }
                .progressViewStyle(.circular)
            } else {
                VStack(spacing: 1) {
                    Text(entry.moment.map { localizedShortPrayerName($0.name, language) } ?? "-")
                        .font(widgetFont(11, language: language))
                    Text(entry.moment?.timeString ?? "--:--")
                        .font(timeFont(14))
                }
                .minimumScaleFactor(0.7)
                .lineLimit(1)
            }
        }
        // Lock screen accessory widgets are rendered by the system in a
        // vibrant/monochrome material that overrides most custom colors
        // anyway - a solid fill would just be discarded.
        .containerBackground(for: .widget) { Color.clear }
    }

    @ViewBuilder
    private var rectangular: some View {
        VStack(alignment: .leading, spacing: 3) {
            HStack(spacing: 4) {
                if let moment = entry.moment {
                    Image(systemName: prayerSymbol(moment.name))
                        .font(.system(size: 13, weight: .semibold))
                        .widgetAccentable()
                    Text(name(moment.name))
                        .font(widgetFont(15, .bold, language: language))
                        .widgetAccentable()
                    Spacer(minLength: 4)
                    Text(moment.timeString)
                        .font(timeFont(15))
                } else {
                    Text("-").font(.headline)
                }
            }
            if let moment = entry.moment {
                if let range = period {
                    ProgressView(timerInterval: range, countsDown: false) {
                        EmptyView()
                    } currentValueLabel: {
                        EmptyView()
                    }
                    .progressViewStyle(.linear)
                }
                Text(moment.date, style: .timer)
                    .font(.system(size: 12, weight: .medium))
                    .monospacedDigit()
                    .frame(maxWidth: .infinity, alignment: .leading)
            }
        }
        .containerBackground(for: .widget) { Color.clear }
    }

    @ViewBuilder
    private var inline: some View {
        if let moment = entry.moment {
            Label {
                Text("\(name(moment.name)) \(moment.timeString)")
            } icon: {
                Image(systemName: prayerSymbol(moment.name))
            }
        } else {
            Text("-")
        }
    }

    // MARK: Home screen

    /// systemSmall: the app's mint hero in miniature - the next prayer, its
    /// time at a glance, and a live countdown.
    @ViewBuilder
    private var small: some View {
        VStack(alignment: .leading, spacing: 0) {
            if let moment = entry.moment {
                HStack(spacing: 5) {
                    Image(systemName: prayerSymbol(moment.name))
                        .font(.system(size: 13, weight: .semibold))
                    Text(entry.islandLabel)
                        .font(widgetFont(11, language: language))
                        .lineLimit(1)
                }
                .foregroundStyle(Color.widgetOnMintMuted)

                Spacer(minLength: 2)

                Text(name(moment.name))
                    .font(widgetFont(19, .bold, language: language))
                    .foregroundStyle(Color.widgetOnMint)
                    .lineLimit(1)
                    .minimumScaleFactor(0.8)
                Text(moment.timeString)
                    .font(timeFont(38))
                    .foregroundStyle(Color.widgetOnMint)
                    .minimumScaleFactor(0.7)
                    .lineLimit(1)
                Text(moment.date, style: .timer)
                    .font(.system(size: 13, weight: .semibold))
                    .monospacedDigit()
                    .foregroundStyle(Color.widgetOnMintMuted)
                    .frame(maxWidth: .infinity, alignment: .leading)
            } else {
                Text("-").foregroundStyle(Color.widgetOnMint)
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
        // Required since iOS 17 - without it WidgetKit shows its own
        // "Please adopt containerBackground API" placeholder instead of
        // this view at all.
        .containerBackground(for: .widget) { MintGradient() }
    }

    /// systemMedium: a mint hero panel for the next prayer beside the whole
    /// day as a ledger - the next row on a mint pill, passed prayers dimmed.
    @ViewBuilder
    private var medium: some View {
        HStack(spacing: 12) {
            heroPanel
                .frame(width: 138)
            VStack(spacing: 1) {
                ForEach(entry.today, id: \.name) { item in
                    ledgerRow(item)
                }
            }
        }
        .containerBackground(for: .widget) { WidgetGround() }
    }

    @ViewBuilder
    private var heroPanel: some View {
        ZStack(alignment: .bottomTrailing) {
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(
                    LinearGradient(
                        colors: [Color.widgetHeroFrom, Color.widgetHeroTo],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
            if let moment = entry.moment {
                Image(systemName: prayerSymbol(moment.name))
                    .font(.system(size: 70))
                    .foregroundStyle(Color.widgetOnMint.opacity(0.1))
                    .offset(x: 12, y: 10)

                VStack(alignment: .leading, spacing: 1) {
                    Text(entry.islandLabel)
                        .font(widgetFont(10, language: language))
                        .foregroundStyle(Color.widgetOnMintMuted)
                        .lineLimit(1)
                    Spacer(minLength: 0)
                    Text(name(moment.name))
                        .font(widgetFont(17, .bold, language: language))
                        .foregroundStyle(Color.widgetOnMint)
                        .lineLimit(1)
                        .minimumScaleFactor(0.8)
                    Text(moment.timeString)
                        .font(timeFont(30))
                        .foregroundStyle(Color.widgetOnMint)
                        .minimumScaleFactor(0.7)
                        .lineLimit(1)
                    Text(moment.date, style: .timer)
                        .font(.system(size: 12, weight: .semibold))
                        .monospacedDigit()
                        .foregroundStyle(Color.widgetOnMintMuted)
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
                .padding(12)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
    }

    @ViewBuilder
    private func ledgerRow(_ item: PrayerMoment) -> some View {
        let isNext = item.name == entry.moment?.name
        let isPast = !isNext && item.date <= entry.date
        let ink: Color = isNext ? .widgetOnMint : (isPast ? .widgetQuietOnDark : .widgetTextPrimary)

        HStack(spacing: 6) {
            Image(systemName: prayerSymbol(item.name))
                .font(.system(size: 10, weight: .semibold))
                .frame(width: 14)
            Text(name(item.name))
                .font(widgetFont(11, language: language))
                .lineLimit(1)
            Spacer(minLength: 2)
            Text(item.timeString)
                .font(timeFont(12, .semibold))
        }
        .foregroundStyle(ink)
        .padding(.horizontal, 8)
        .frame(maxHeight: .infinity)
        .background {
            if isNext {
                RoundedRectangle(cornerRadius: 9, style: .continuous).fill(Color.widgetPrimary)
            }
        }
    }
}

struct PrayerWidget: Widget {
    static let kind: String = "PrayerWidget"

    var body: some WidgetConfiguration {
        AppIntentConfiguration(kind: Self.kind, intent: SelectIslandIntent.self, provider: PrayerProvider()) { entry in
            PrayerWidgetView(entry: entry)
        }
        .configurationDisplayName("Prayer Times")
        .description("Shows the next prayer and today's times for your chosen island.")
        .supportedFamilies([.systemSmall, .systemMedium, .accessoryCircular, .accessoryRectangular, .accessoryInline])
    }
}
