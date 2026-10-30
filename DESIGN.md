---
name: Noor+ (Liyelaa)
description: A prayer companion drawn from Maldivian lacquerwork - vermilion and ochre incised on lacquer-black by night, coral-stone limewash by day.
colors:
  lacquer-black: "#150E0B"
  lacquer-deep: "#0E0807"
  lacquer-surface: "#21150F"
  lacquer-raised: "#2C1C14"
  vermilion: "#FF7355"
  vermilion-hero: "#FF6040"
  ochre: "#F5B83D"
  bone: "#F6EEE2"
  bone-muted: "#CBBBA9"
  bone-quiet: "#9C8978"
  limewash: "#ECEFEA"
  limewash-deep: "#DEE3DC"
  limewash-surface: "#F7F8F4"
  limewash-raised: "#FFFFFF"
  vermilion-day: "#B5301A"
  vermilion-hero-day: "#C8341B"
  ochre-day: "#8A5A00"
  ink: "#1B120E"
  ink-muted: "#55473E"
  ink-quiet: "#76675C"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: "60px"
    letterSpacing: "-1px"
  numerals:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
rounded:
  sm: "10px"
  md: "14px"
  lg: "16px"
  xl: "24px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
components:
  hero-vessel:
    backgroundColor: "{colors.vermilion-hero}"
    textColor: "{colors.lacquer-black}"
    rounded: "{rounded.lg}"
    padding: "16px 24px 24px"
  card:
    backgroundColor: "{colors.lacquer-surface}"
    textColor: "{colors.bone}"
    rounded: "{rounded.lg}"
    padding: "20px"
  button-primary:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.lacquer-black}"
    rounded: "{rounded.md}"
    height: "48px"
---

# Design System: Noor+ (Liyelaa)

## Overview

Noor+ looks like a lathe-turned lacquer vessel (*liyelaa jehun*), not a night sky. One saturated vermilion object carries the next prayer; three incised lines (thin, thick, thin) are the only ornament. Night is lacquer-black with a warm, never blue, cast; day is cool coral-stone limewash for tropical glare. The interface is an Operate surface: the world lends type, palette, density and one signature move, never the layout or the controls.

## Colors

- **Vermilion** is the committed colour: the hero vessel, selected states, the active-row mark, primary actions.
- **Ochre** is the quiet accent: section headers, the incised band, the "current period" line.
- **Bone / ink** carry text. Secondary and quiet text are tinted from the same warm hue, never gray.
- Every text/surface pair meets 4.5:1 (hero text on vermilion is 6.3:1 night, 5.3:1 day). Ochre on vermilion is 1.7:1: never place ochre text or fills on the hero.
- The hero vessel is the same vermilion object in both themes.

## Typography

Bricolage Grotesque is used only for numerals (countdown, times, calendar digits), since it has no Thaana or Arabic glyphs. All translated text uses the system face; Arabic duas use Noto Naskh Arabic. The countdown is the largest element on any screen (52px, tabular figures) and is readable at arm's length. No eyebrow labels above headings: captions sit below the thing they describe.

## Layout

20dp screen padding, 4/8pt spacing scale. Home's first viewport is: island and dual date, the vermilion hero, then a six-row ledger of times. Rows are 48dp so all six fit with the hero on a small phone. Touch targets are at least 44dp.

## Elevation & Depth

Matte vessels: a hairline border plus a soft shadow on cards, a stronger one on the hero only. The tab bar is flat; its top rim is the lacquer band.

## Shapes

Cards and the hero use 16dp radius. Pills are reserved for small controls (segmented control, tab indicator).

## Components

- **LacquerBand**: three horizontal Views (1 / 3 / 1 dp by default), the app's one ornament. Used as the divider (narrowed to 72dp), the hero's top edge, the tab bar rim, the Calendar today-card edge, and the onboarding mark.
- **NextPrayerHero**: vermilion card, prayer name and time on one baseline row, the countdown, a caption, and a foot band showing how far the current gap has run.
- **PrayerTimeRow**: next prayer gets a three-line vertical mark and a vermilion tint; the current period gets one ochre line; passed prayers recede to the quiet text colour.
- **Tab bar**: adaptive. Android shows a Material 3 pill behind the active icon; iOS shows the bare filled, tinted glyph.

## Do's and Don'ts

- Do keep vermilion to the hero, selected states and primary actions.
- Do let passed prayers recede so the eye lands on what is still ahead.
- Don't reintroduce waves, sparkles, glows or gradient fills as decoration.
- Don't put the Latin numeral face on translated text.
- Don't add cards inside cards, or a second ornament beside the band.
