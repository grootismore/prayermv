import WidgetKit
import SwiftUI
import AppIntents

/// A small, curated set of islands (one per region) rather than the full
/// ~200-island list, so widget configuration doesn't need a dynamic
/// AppEntity/EntityQuery search UI. Ids match mv-prayertimes' island DB.
enum SelectableIsland: Int, AppEnum {
    case male = 102
    case hithadhoo = 197
    case fuvahmulah = 196
    case kulhudhuffushi = 28
    case gan = 169
    case naifaru = 93
    case ukulhas = 108
    case maafushi = 104

    static var typeDisplayRepresentation: TypeDisplayRepresentation = "Island"

    var label: String {
        switch self {
        case .male: return "K. Male'"
        case .hithadhoo: return "S. Hithadhoo"
        case .fuvahmulah: return "Gn. Fuvahmulah"
        case .kulhudhuffushi: return "HDh. Kulhudhuffushi"
        case .gan: return "L. Gan"
        case .naifaru: return "Lh. Naifaru"
        case .ukulhas: return "AA. Ukulhas"
        case .maafushi: return "K. Maafushi"
        }
    }

    static var caseDisplayRepresentations: [SelectableIsland: DisplayRepresentation] = [
        .male: DisplayRepresentation(title: "K. Male'"),
        .hithadhoo: DisplayRepresentation(title: "S. Hithadhoo"),
        .fuvahmulah: DisplayRepresentation(title: "Gn. Fuvahmulah"),
        .kulhudhuffushi: DisplayRepresentation(title: "HDh. Kulhudhuffushi"),
        .gan: DisplayRepresentation(title: "L. Gan"),
        .naifaru: DisplayRepresentation(title: "Lh. Naifaru"),
        .ukulhas: DisplayRepresentation(title: "AA. Ukulhas"),
        .maafushi: DisplayRepresentation(title: "K. Maafushi"),
    ]

    /// The island name as shown on the widget face, in the selected
    /// display language. Dhivehi/Arabic values here are the exact same
    /// strings the RN app itself shows for these 8 islands (produced by
    /// lib/islandNames.ts's transliterator and copied over by hand), not
    /// independently guessed - this is a small, fixed, verifiable set,
    /// unlike porting that whole transliteration engine to Swift for the
    /// full ~200-island list.
    func localizedLabel(_ language: WidgetLanguage) -> String {
        switch language {
        case .en:
            return label
        case .dv:
            switch self {
            case .male: return "ކ. މާލެ"
            case .hithadhoo: return "ސ. ހިތަދޫ"
            case .fuvahmulah: return "ޏ. ފުވަހްމުލަހް"
            case .kulhudhuffushi: return "ހދ. ކުޅުދުފްފުށި"
            case .gan: return "ލ. ގަން"
            case .naifaru: return "ޅ. ނައިފަރު"
            case .ukulhas: return "އއ. އުކުޅަސް"
            case .maafushi: return "ކ. މާފުށި"
            }
        case .ar:
            switch self {
            case .male: return "ك. مالي"
            case .hithadhoo: return "س. هيثاذو"
            case .fuvahmulah: return "غن. فوفاهمولاه"
            case .kulhudhuffushi: return "هذ. كولوذوففوشي"
            case .gan: return "ل. جان"
            case .naifaru: return "ل. نايفارو"
            case .ukulhas: return "أأ. أكولاس"
            case .maafushi: return "ك. مافوشي"
            }
        }
    }
}

/// The widget's own display language - independent of the host app's
/// language setting (the widget has no App Group data sharing to read it
/// from - see PrayerData.swift), so it's its own configuration option
/// alongside island.
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

/// Configured entirely inside the widget's own edit UI (long-press ->
/// Edit Widget) - independent of whatever island/language the host app has
/// stored, so this works even if App Group data sharing turns out to be
/// unavailable on a free-tier Apple ID.
struct SelectIslandIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Select Island"
    static var description = IntentDescription("Choose which island's prayer times to show, and the display language.")

    @Parameter(title: "Island", default: .male)
    var island: SelectableIsland

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
        PrayerEntry(date: Date(), islandLabel: SelectableIsland.male.label, moment: nil, today: [], language: .en)
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

    private func makeEntry(for configuration: SelectIslandIntent, on date: Date) -> PrayerEntry {
        let island = configuration.island
        let language = configuration.language
        let today = PrayerData.todayMoments(islandId: island.rawValue, now: date)
        let moment = PrayerData.nextMoment(islandId: island.rawValue, now: date)
        return PrayerEntry(
            date: date,
            islandLabel: island.localizedLabel(language),
            moment: moment,
            today: today,
            language: language
        )
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
