# Product

<!-- impeccable:product-schema 1 -->

## Platform

adaptive

## Users
Muslims living in or visiting the Maldives who check prayer times, Qibla, Hijri dates and duas many times a day, usually as a quick glance, in English, Dhivehi (ދިވެހި) or Arabic. Includes people on small outer islands, resort islands and Malé.

## Product Purpose
Noor+ is a free, open-source prayer companion for the Maldives. It shows the officially published prayer times for each individual island (not a generic calculation), a live countdown to the next prayer, a Qibla compass, a Hijri and Gregorian calendar with notable Islamic dates, a library of duas, prayer notifications with optional adhan, and an iOS home screen widget. Success is that the next prayer is readable in one glance and matches what the local mosque uses.

## Positioning
Island-specific official times for every Maldivian island, private by design (no account, no analytics, location only used on device), with first-class Dhivehi and Arabic interfaces laid out for their scripts and reading direction.

## Operating Context
Opened many times a day for a few seconds each; also used in the mosque, at night, outdoors in bright tropical light, and on older or low-end Android devices. Phone compass and location power the Qibla screen. The ring/silent switch on iOS can mute adhan sound.

## Capabilities and Constraints
- Expo SDK 57, Expo Router, React Native 0.86; iOS and Android only for now.
- Languages: en, dv, ar. dv and ar are RTL and use their own fonts.
- Light and dark themes (Mint Day / Forest Night), user-selectable.
- Prayer data is bundled per island; works offline.
- Dua content has a review process (`data/duas/CONTENT_REVIEW.md`); redesign must not alter dua text.

## Brand Commitments
- Name "Noor+ / ނޫރް+", the app icon and logo mark stay as they are.
- English, Dhivehi and Arabic with proper RTL layout stay first-class.
- Visual direction pinned by the owner's reference screens: emerald/mint on deep forest green, large soft rounded cards, pill buttons, iOS liquid-glass materials, smooth native-feeling motion. Palette values are otherwise open.

## Evidence on Hand
Real prayer-time data, dua content, Hijri events, icon and splash assets in `assets/`. No screenshots of the live app, user research, or analytics exist (the app collects none); do not fabricate any.

## Product Principles
1. The next prayer is readable at arm's length in one second.
2. Respect the content: sacred text and times are never decorated into illegibility.
3. Private and calm: no dark patterns, no gamification of worship.
4. Every screen works in en, dv and ar, mirrored correctly.
5. Native to each platform: feel like iOS on iOS and like Android on Android.

## Accessibility & Inclusion
Dynamic Type / font scaling, WCAG AA contrast in both themes, 44pt/48dp touch targets, VoiceOver/TalkBack labels, reduced-motion respect, readable Arabic and Thaana at larger sizes, older users.
