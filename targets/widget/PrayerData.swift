import Foundation

struct RawIsland: Decodable {
    let islandId: Int
    let atollId: Int
    let atoll: String
    let island: String
    let offset: Int
}

struct RawDayEntry: Decodable {
    let atollId: Int
    let day: Int
    let fajr: Int
    let sunrise: Int
    let dhuhr: Int
    let asr: Int
    let maghrib: Int
    let isha: Int
}

struct RawData: Decodable {
    let islands: [RawIsland]
    let atolls: [String: [RawDayEntry]]
}

enum PrayerName: String, CaseIterable {
    case fajr, sunrise, dhuhr, asr, maghrib, isha

    var displayName: String {
        switch self {
        case .fajr: return "Fajr"
        case .sunrise: return "Sunrise"
        case .dhuhr: return "Dhuhr"
        case .asr: return "Asr"
        case .maghrib: return "Maghrib"
        case .isha: return "Isha"
        }
    }
}

struct PrayerMoment {
    let name: PrayerName
    let date: Date
    let timeString: String
}

/// Reads the same island-published prayer time data mv-prayertimes ships
/// (trimmed to a small set of islands - see PrayerData.json in this
/// directory) and reimplements its day-of-year lookup, matching
/// lib/prayerTimes.ts in the main app so both sides agree.
enum PrayerData {
    static let raw: RawData = {
        guard
            let url = Bundle.main.url(forResource: "PrayerData", withExtension: "json"),
            let data = try? Data(contentsOf: url),
            let decoded = try? JSONDecoder().decode(RawData.self, from: data)
        else {
            return RawData(islands: [], atolls: [:])
        }
        return decoded
    }()

    static func island(for id: Int) -> RawIsland? {
        raw.islands.first { $0.islandId == id }
    }

    private static func daysIntoYear(_ date: Date) -> Int {
        var utcCalendar = Calendar(identifier: .gregorian)
        utcCalendar.timeZone = TimeZone(identifier: "UTC")!

        let localComponents = Calendar.current.dateComponents([.year, .month, .day], from: date)
        guard
            let target = utcCalendar.date(from: localComponents),
            let jan1 = utcCalendar.date(from: DateComponents(year: localComponents.year, month: 1, day: 1))
        else {
            return 0
        }

        let diffDays = Int(target.timeIntervalSince(jan1) / 86400) + 1
        return diffDays % 366
    }

    private static func minutesValue(_ entry: RawDayEntry, for prayer: PrayerName) -> Int {
        switch prayer {
        case .fajr: return entry.fajr
        case .sunrise: return entry.sunrise
        case .dhuhr: return entry.dhuhr
        case .asr: return entry.asr
        case .maghrib: return entry.maghrib
        case .isha: return entry.isha
        }
    }

    private static func minutesToDate(_ minutesIntoDay: Int, on referenceDate: Date) -> Date {
        var components = Calendar.current.dateComponents([.year, .month, .day], from: referenceDate)
        components.hour = minutesIntoDay / 60
        components.minute = minutesIntoDay % 60
        components.second = 0
        return Calendar.current.date(from: components) ?? referenceDate
    }

    private static func minutesToTimeString(_ minutesIntoDay: Int) -> String {
        String(format: "%02d:%02d", minutesIntoDay / 60, minutesIntoDay % 60)
    }

    private static func entry(for islandId: Int, day: Int) -> RawDayEntry? {
        guard let island = island(for: islandId) else { return nil }
        return raw.atolls[String(island.atollId)]?.first { $0.day == day }
    }

    static func todayMoments(islandId: Int, now: Date = Date()) -> [PrayerMoment] {
        guard
            let island = island(for: islandId),
            let entry = entry(for: islandId, day: daysIntoYear(now))
        else { return [] }

        return PrayerName.allCases.map { prayer in
            let minutes = minutesValue(entry, for: prayer) + island.offset
            return PrayerMoment(
                name: prayer,
                date: minutesToDate(minutes, on: now),
                timeString: minutesToTimeString(minutes)
            )
        }
    }

    /// The next upcoming prayer (or sunrise). Rolls over to tomorrow's Fajr
    /// once every prayer for today has passed.
    static func nextMoment(islandId: Int, now: Date = Date()) -> PrayerMoment? {
        let today = todayMoments(islandId: islandId, now: now)
        if let upcoming = today.first(where: { $0.date > now }) {
            return upcoming
        }

        guard
            let island = island(for: islandId),
            let tomorrow = Calendar.current.date(byAdding: .day, value: 1, to: now),
            let entry = entry(for: islandId, day: (daysIntoYear(now) + 1) % 366)
        else { return nil }

        let minutes = minutesValue(entry, for: .fajr) + island.offset
        return PrayerMoment(
            name: .fajr,
            date: minutesToDate(minutes, on: tomorrow),
            timeString: minutesToTimeString(minutes)
        )
    }
}
