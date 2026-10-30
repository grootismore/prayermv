---
version: 1
slug: "app-tabs-index-tsx"
primary_target: "app/(tabs)/index.tsx"
related_targets: []
---

# Surface brief: Noor+ app shell (all tabs)

Mode: Operate. Platform: adaptive (iOS HIG with liquid glass / Material 3). Audience: Maldivian Muslims glancing at prayer times many times a day, en/dv/ar, RTL.

## Direction contract

THESIS: A prayer app that feels shipped with the phone: platform glass and system navigation, with one bright mint object carrying the next prayer. Refuses the web-ported look (drawn tab bars, bespoke icons, hard shadows).
OWN-WORLD: Forest-green gradient ground with a soft glow, mint for the single highlight, glass cards 24dp, pill CTAs, SF Symbols, system tab bar. Day is a mint wash with white cards.
STORY: In one second you know which prayer is next and how long remains; the rest of the day is a calm list where passed prayers recede.
FIRST VIEWPORT: Large-title island + dual date; mint gradient hero with name, time, 52px countdown, elapsed-gap track; glass date pill; glass list with glyph rows, the next prayer a mint pill.
FORM: PINNED BY OWNER REFERENCE (emerald/mint glass screens supplied by the owner); supersedes the earlier rolled lacquerwork direction (seed:7d9374811189e537), which is retired.
RISK: iOS 26 glass and native tabs are untested on device here; fallbacks (blur, tonal surfaces) are in place.
