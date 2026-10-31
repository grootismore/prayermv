---
name: Noor+ (Glass)
description: A native-feeling prayer companion - emerald and mint over deep forest green, system glass on iOS, Material surfaces on Android.
colors:
  forest: "#07241E"
  forest-deep: "#041A15"
  forest-surface: "#0F342B"
  forest-raised: "#154338"
  mint-text: "#5CF39A"
  mint-fill: "#4EF08F"
  mint-hero-from: "#8CF7BC"
  mint-hero-to: "#3FDC85"
  on-mint: "#04261A"
  amber: "#FFD166"
  snow: "#F2FBF6"
  snow-muted: "#B6D3C5"
  snow-quiet: "#92B5A5"
  mint-wash: "#EAF8F0"
  mint-wash-deep: "#DCF1E6"
  card-white: "#FFFFFF"
  emerald-text: "#0A7640"
  amber-day: "#8A5A00"
  pine: "#0A2A1F"
  pine-muted: "#33564A"
  pine-quiet: "#4F6B5E"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: "60px"
    letterSpacing: "-1px"
  title:
    fontFamily: "system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 800
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
rounded:
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "32px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
components:
  hero:
    backgroundColor: "{colors.mint-hero-to}"
    textColor: "{colors.on-mint}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card:
    backgroundColor: "{colors.forest-surface}"
    textColor: "{colors.snow}"
    rounded: "{rounded.lg}"
    padding: "20px"
  button-primary:
    backgroundColor: "{colors.mint-fill}"
    textColor: "{colors.on-mint}"
    rounded: "{rounded.xl}"
    height: "52px"
---

# Design System: Noor+ (Glass)

## Overview

Noor+ should feel like it shipped with the phone. Structure, navigation and materials are the platform's own: the system tab bar, SF Symbols, large titles, grouped lists, real liquid glass on iOS 26. Brand lives where the platform leaves room: the mint-on-forest palette, the numeral face, and the hero. The look follows the owner's reference screens: big soft cards, pill buttons, a bright mint highlight, calm gradients.

## Colors

- **Forest Night** is a deep, slightly blue-green ground (never black) so mint reads as light. **Mint Day** is a pale mint wash with white cards.
- Two mint roles: `primary` is the accent for text and icons (bright mint at night, deep emerald `#0A7640` by day, so it holds 4.5:1), and `fill` is the bright mint for filled controls in both themes, always with `onFill` dark green text.
- Colour goes on the one thing that matters: the hero, the next-prayer row, selected states. Amber is reserved for state (Qibla aligned, warnings).
- Every text/surface pair meets 4.5:1 in both themes; the hero's dark green on mint is about 7:1.

## Typography

System font carries the UI (SF Pro on iOS, Roboto on Android). Dhivehi text uses MV MAG Round (`assets/fonts/MvMAGRoundBold.otf`), a single bold weight, so Dhivehi hierarchy comes from size and colour; its Latin letters fall back to the system font. Arabic (the UI in Arabic, and all dua text) uses KFGQPC Douri Uthmanic Script (`assets/fonts/UthmanicDouri.ttf`), one regular weight, with Latin letters and ﷺ falling back to the system font. Bricolage Grotesque is used only for numerals (countdown, times, calendar digits), since it has no Thaana or Arabic glyphs. The countdown is the largest element on any screen. Screen titles are 34px heavy. No eyebrow labels above headings; captions sit below.

## Layout

20dp screen padding, 4/8pt scale. Home reads top to bottom: island and dual date, the mint hero, a glass date navigator, then the day's list. The system tab bar floats over content on iOS (minimizing on scroll) and sits at the bottom on Android; screens leave the bottom inset to it.

## Elevation & Depth

Depth comes from materials, not shadows. Cards are glass on iOS 26, a system blur on older iOS, a tonal opaque surface with a hairline border on Android, and a solid surface under Reduce Transparency. Only opaque objects (the hero, the primary button) carry a shadow.

## Shapes

Cards 24, nested rows 18, controls and CTAs pill. Corners are continuous and generous, matching the system.

## Components

- **GlassSurface / SurfaceCard**: the one card material; pressable cards sink to 0.98 with a spring.
- **NextPrayerHero**: mint gradient, prayer name and time on one baseline, the countdown, a caption, an inset progress track for the elapsed gap.
- **PrayerTimeRow**: glyph, name, time, status. The next prayer is a mint pill with a bell; passed prayers dim and show a check.
- **Icon**: SF Symbols on iOS, Ionicons on Android, one API.
- **PressableScale**: spring-to-0.97 press feedback for buttons and nav controls.
- **Tab bar**: `NativeTabs`, never drawn by the app.

## Do's and Don'ts

- Do use system materials and controls first; theme colour only.
- Do honour Reduce Motion and Reduce Transparency.
- Do keep the bright mint to the hero, the next row and filled controls.
- Don't draw custom navigation, shadows behind glass, or hand-rolled blur.
- Don't put the Latin numeral face on translated text.
- Don't bring back waves, sparkles or decorative ornaments.
