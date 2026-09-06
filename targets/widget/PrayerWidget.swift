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

/// Island defaults to IslandEntity.matchApp (via IslandEntityQuery's
/// defaultResult()), which means "match whatever island the app itself
/// currently has selected" (via the shared App Group data
/// lib/widgetSync.ts writes - see PrayerData.appSelectedIslandId()).
/// Picking a real island explicitly here, in the widget's own edit UI
/// (long-press -> Edit Widget), overrides that and pins the widget to
/// that island regardless of what the app is set to. Language remains its
/// own independent widget-only setting, since the widget has no way to
/// read the app's language choice.
struct SelectIslandIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Select Island"
    static var description = IntentDescription(
        "Choose which island's prayer times to show, and the display language. Leave Island as \"Match App Selection\" to always match the island currently selected in the app."
    )

    @Parameter(title: "Island")
    var island: IslandEntity

    @Parameter(title: "Language", default: .en)
    var language: WidgetLanguage
}

struct PrayerEntry: TimelineEntry {
    let date: Date
    let islandLabel: String
    let moment: PrayerMoment?
    let today: [PrayerMoment]
    let language: WidgetLanguage
}

struct PrayerProvider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> PrayerEntry {
        let fallback = PrayerData.island(for: PrayerData.defaultIslandId)
        let label = fallback.map { "\($0.atoll) \($0.island)" } ?? "-"
        return PrayerEntry(date: Date(), islandLabel: label, moment: nil, today: [], language: .en)
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
        let language = configuration.language
        let raw = PrayerData.island(for: islandId)
        let label = raw.map { localizedIslandLabel(id: $0.islandId, atoll: $0.atoll, name: $0.island, language: language) } ?? "-"
        let today = PrayerData.todayMoments(islandId: islandId, now: date)
        let moment = PrayerData.nextMoment(islandId: islandId, now: date)
        return PrayerEntry(date: date, islandLabel: label, moment: moment, today: today, language: language)
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

/// Matches lib/theme.ts's Noor+ "Ocean Night" palette in the RN app, so the
/// widget reads as the same product rather than a generic system card.
/// Fixed (non-adaptive) colors throughout, same reasoning as before: this
/// gradient has no separate dark-mode variant, so text needs to be legible
/// against it regardless of the device's system appearance rather than
/// following .primary/.secondary, which shift with Dark Mode independently
/// of our background.
private extension Color {
    init(hex: UInt32) {
        self.init(
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255
        )
    }

    static let widgetBackground = Color(hex: 0x011C53)
    static let widgetBackgroundDeep = Color(hex: 0x010F2E)
    static let widgetPrimary = Color(hex: 0x13E2E6)
    static let widgetGold = Color(hex: 0xFFC83D)
    static let widgetTextPrimary = Color(hex: 0xF7FBFF)
    static let widgetMutedOnDark = Color(hex: 0xA9C3E2)
}

/// A small gold "sun" accent - the same motif as components/SunAccent.tsx
/// in the RN app (a soft radial glow behind a solid disc), used there as a
/// restrained highlight on hero cards. Replaces the old geometric-star
/// badge from the emerald theme, which the RN redesign also retired.
private struct SunAccentShape: View {
    var size: CGFloat

    var body: some View {
        ZStack {
            Circle()
                .fill(
                    RadialGradient(
                        colors: [Color.widgetGold.opacity(0.55), Color.widgetGold.opacity(0)],
                        center: .center,
                        startRadius: 0,
                        endRadius: size
                    )
                )
                .frame(width: size * 2, height: size * 2)
            Circle()
                .fill(Color.widgetGold)
                .frame(width: size * 0.8, height: size * 0.8)
        }
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

    @ViewBuilder
    private var content: some View {
        switch family {
        case .accessoryCircular:
            VStack(spacing: 1) {
                Text(entry.moment.map { localizedShortPrayerName($0.name, entry.language) } ?? "-")
                    .font(.system(size: 11, weight: .semibold))
                Text(entry.moment?.timeString ?? "--:--")
                    .font(.system(size: 14, weight: .bold))
            }
            .minimumScaleFactor(0.7)
            .lineLimit(1)
            // Lock screen accessory widgets are rendered by the system in a
            // vibrant/monochrome material that overrides most custom
            // colors anyway - a solid fill would just be discarded (or
            // look wrong), so leave it transparent.
            .containerBackground(for: .widget) {
                Color.clear
            }
        case .accessoryRectangular:
            VStack(alignment: .leading, spacing: 2) {
                Text(entry.moment.map { localizedPrayerName($0.name, entry.language) } ?? "-")
                    .font(.headline)
                Text(entry.moment?.timeString ?? "--:--")
                    .font(.caption)
            }
            .containerBackground(for: .widget) {
                Color.clear
            }
        default:
            // .systemMedium - a wide card with the next prayer up top and
            // the whole day's times in a row underneath, rather than a
            // small square showing only the next prayer. Styled as a
            // miniature version of the app's own hero cards (Home's
            // next-prayer card, the Calendar screen's today card): a
            // midnight-navy gradient with a lagoon-cyan highlight on the
            // active prayer and a small gold sun accent, matching the
            // Noor+ "Ocean Night" theme rather than a flat system card.
            VStack(alignment: .leading, spacing: 10) {
                HStack {
                    Text(entry.islandLabel)
                        .font(.caption)
                        .fontWeight(.semibold)
                        .foregroundStyle(Color.widgetMutedOnDark)
                    Spacer()
                    if let moment = entry.moment {
                        Text("\(localizedPrayerName(moment.name, entry.language)) \u{00B7} \(moment.timeString)")
                            .font(.caption)
                            .fontWeight(.bold)
                            .foregroundStyle(Color.widgetPrimary)
                    }
                }

                Spacer(minLength: 0)

                HStack(spacing: 0) {
                    ForEach(entry.today, id: \.name) { item in
                        VStack(spacing: 3) {
                            Text(localizedPrayerName(item.name, entry.language))
                                .font(.system(size: 10))
                                .foregroundStyle(Color.widgetMutedOnDark)
                            Text(item.timeString)
                                .font(.system(size: 13, weight: .semibold))
                                .minimumScaleFactor(0.8)
                                .lineLimit(1)
                                .foregroundStyle(
                                    item.name == entry.moment?.name ? Color.widgetPrimary : Color.widgetTextPrimary
                                )
                        }
                        .frame(maxWidth: .infinity)
                    }
                }
            }
            .padding()
            .overlay(alignment: .top) {
                SunAccentShape(size: 10)
                    .padding(.top, 4)
            }
            // Required since iOS 17 - without it WidgetKit shows its own
            // "Please adopt containerBackground API" placeholder instead of
            // this view at all.
            .containerBackground(for: .widget) {
                LinearGradient(
                    colors: [Color.widgetBackground, Color.widgetBackgroundDeep],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
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
        .description("Shows today's prayer times for your chosen island.")
        .supportedFamilies([.systemMedium, .accessoryCircular, .accessoryRectangular])
    }
}
