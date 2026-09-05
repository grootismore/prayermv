# Adhan notification sound

Drop the adhan audio file here as **`adhan.wav`** (exact filename, this
directory) and it's picked up automatically - `app.config.js` checks
whether this file exists and only adds it to the `expo-notifications`
config plugin's `sounds` array when it's present, so nothing else needs to
change in code.

## Format

- **Trim to a short excerpt, not the full adhan.** iOS hard-caps custom
  notification sounds at 30 seconds - anything longer either gets cut off
  or silently falls back to the default sound. ~20-25 seconds (the opening
  takbir, "Allahu akbar, Allahu akbar...") is the right length and is what
  most prayer apps use for this.
- **Format:** `.wav` (recommended by Expo's docs), 16-bit PCM. `.aiff`/`.caf`
  also work on iOS if that's easier to export.
- **Filename:** must be `adhan.wav` exactly - lowercase, no spaces (Android
  resource names are restricted to lowercase letters, digits, and
  underscores, and the app code references this exact name on both
  platforms).

## After adding the file

Run `npx expo prebuild -p ios --clean` (and `-p android` if testing
Android locally) to pick it up, or just push - the CI workflow prebuilds
from scratch on every run.

## Testing it

Settings screen has a temporary "Test notifications" section with a
**Send test adhan in 5s** button - background or lock the app after
tapping it to hear the real notification sound (not an in-app preview).
That section and the `sendTestAdhanNotification` function it calls
(`lib/notifications.ts`) are meant to be removed once this is confirmed
working - they're not part of the shipped feature set, just a way to
verify the sound end to end without waiting for an actual prayer time.

Until this file is added, both platforms silently fall back to their
default notification sound - nothing breaks, it just won't sound like an
adhan yet.
