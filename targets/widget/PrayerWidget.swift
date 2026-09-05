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
}

/// Configured entirely inside the widget's own edit UI (long-press ->
/// Edit Widget) - independent of whatever island the host app has stored,
/// so this works even if App Group data sharing turns out to be
/// unavailable on a free-tier Apple ID.
struct SelectIslandIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Select Island"
    static var description = IntentDescription("Choose which island's prayer times to show.")

    @Parameter(title: "Island", default: .male)
    var island: SelectableIsland
}

struct PrayerEntry: TimelineEntry {
    let date: Date
    let islandLabel: String
    let moment: PrayerMoment?
}

struct PrayerProvider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> PrayerEntry {
        PrayerEntry(date: Date(), islandLabel: SelectableIsland.male.label, moment: nil)
    }

    func snapshot(for configuration: SelectIslandIntent, in context: Context) async -> PrayerEntry {
        makeEntry(for: configuration)
    }

    func timeline(for configuration: SelectIslandIntent, in context: Context) async -> Timeline<PrayerEntry> {
        let current = makeEntry(for: configuration)

        // Refresh right when the shown prayer changes, rather than polling
        // on a tight interval (WidgetKit budgets refresh frequency anyway).
        guard let moment = current.moment else {
            return Timeline(entries: [current], policy: .atEnd)
        }

        let nextEntry = PrayerEntry(date: moment.date, islandLabel: current.islandLabel, moment: moment)
        return Timeline(entries: [current, nextEntry], policy: .atEnd)
    }

    private func makeEntry(for configuration: SelectIslandIntent) -> PrayerEntry {
        let island = configuration.island
        let moment = PrayerData.nextMoment(islandId: island.rawValue)
        return PrayerEntry(date: Date(), islandLabel: island.label, moment: moment)
    }
}

/// $widgetBackground (see expo-target.config.js) is a single fixed light
/// color with no dark-mode variant. SwiftUI's default text styles
/// (.primary/.secondary) are *system-appearance-adaptive* though - on a
/// device in Dark Mode they render near-white regardless of the widget's
/// own background, which against our fixed-light background is white text
/// on a near-white card: functionally invisible. So the systemSmall view
/// below uses fixed colors matching the light background instead of the
/// adaptive defaults.
private extension Color {
    init(hex: UInt32) {
        self.init(
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255
        )
    }

    static let widgetText = Color(hex: 0x20241F)
    static let widgetTextMuted = Color(hex: 0x6E7566)
    static let widgetPrimary = Color(hex: 0x0B6E4F)
}

struct PrayerWidgetView: View {
    @Environment(\.widgetFamily) var family
    var entry: PrayerEntry

    var body: some View {
        switch family {
        case .accessoryCircular:
            VStack(spacing: 1) {
                Text(entry.moment?.name.shortName ?? "-")
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
                Text(entry.moment?.name.displayName ?? "-")
                    .font(.headline)
                Text(entry.moment?.timeString ?? "--:--")
                    .font(.caption)
            }
            .containerBackground(for: .widget) {
                Color.clear
            }
        default:
            VStack(alignment: .leading, spacing: 6) {
                Text(entry.islandLabel)
                    .font(.caption)
                    .foregroundStyle(.widgetTextMuted)
                Spacer()
                Text(entry.moment?.name.displayName ?? "-")
                    .font(.title2)
                    .fontWeight(.bold)
                    .foregroundStyle(.widgetPrimary)
                Text(entry.moment?.timeString ?? "--:--")
                    .font(.title3)
                    .foregroundStyle(.widgetText)
            }
            .padding()
            // Required since iOS 17 - without it WidgetKit shows its own
            // "Please adopt containerBackground API" placeholder instead of
            // this view at all.
            .containerBackground(for: .widget) {
                Color("$widgetBackground")
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
        .description("Shows the next prayer time for your chosen island.")
        .supportedFamilies([.systemSmall, .accessoryCircular, .accessoryRectangular])
    }
}
