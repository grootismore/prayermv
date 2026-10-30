# Apple design context (hig-project-context)

- **App**: Noor+ - prayer times, Qibla, Hijri calendar and duas for the Maldives.
- **Platforms**: iPhone (iOS 16.4+, liquid glass on iOS 26+), Android 7+. Not iPad-optimised yet.
- **Stack**: Expo SDK 57, Expo Router (native tabs), React Native 0.86; not SwiftUI/UIKit.
- **Navigation**: system tab bar (5 tabs); Duas has its own stack; onboarding is a separate stack screen.
- **Appearance**: Light and Dark (user-selectable, synced to the native appearance).
- **Languages**: English, Dhivehi, Arabic; dv/ar are RTL.
- **Accessibility target**: WCAG AA contrast, Dynamic Type, VoiceOver/TalkBack labels, Reduce Motion, Reduce Transparency.
- **Brand**: emerald/mint on forest green; name, icon and logo mark fixed.
- **Materials**: `expo-glass-effect` on iOS 26, `expo-blur` on older iOS, tonal surfaces on Android.
