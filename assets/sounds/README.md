# Adhan notification sound

`adhan.wav` is in place - a 24-second excerpt (the opening takbir) trimmed
from a user-provided "Adhan Madina" recording (sourced from
www.PrayTimes.org per its embedded metadata), converted to 22050 Hz mono
16-bit PCM WAV. `app.config.js` picks it up automatically (it checks
whether this file exists before adding it to the `expo-notifications`
config plugin's `sounds` array), and it's confirmed to copy through
`expo prebuild` correctly to both `ios/<App>/adhan.wav` and
`android/.../res/raw/adhan.wav`.

## Replacing it

Same constraints if you swap in a different recording:

- **Keep it under 30 seconds.** iOS hard-caps custom notification sounds at
  that length - longer either gets cut off or silently falls back to the
  default sound. ~20-25 seconds (the opening "Allahu akbar, Allahu
  akbar...") is what most prayer apps use, and is what's here now.
- **Format:** `.wav`, 16-bit PCM (recommended by Expo's docs). `.aiff`/`.caf`
  also work on iOS if that's easier to export.
- **Filename:** must stay `adhan.wav` exactly - lowercase, no spaces
  (Android resource names are restricted to lowercase letters, digits, and
  underscores, and the app code references this exact name on both
  platforms).

After replacing the file, run `npx expo prebuild -p ios --clean` (and
`-p android` if testing Android locally) to pick it up, or just push - the
CI workflow prebuilds from scratch on every run.

## Testing it

Settings screen has a temporary "Test notifications" section with a
**Send test adhan in 5s** button - background or lock the app after
tapping it to hear the real notification sound (not an in-app preview).
That section and the `sendTestAdhanNotification` function it calls
(`lib/notifications.ts`) are meant to be removed once this is confirmed
working on-device - they're not part of the shipped feature set, just a
way to verify the sound end to end without waiting for an actual prayer
time.
