# Noor+

Offline-first Maldives prayer times app (Expo Router + TypeScript).

## iOS sideload build (no Mac, no paid Apple Developer account)

`.github/workflows/ios-build.yml` builds an **unsigned** IPA on GitHub's
`macos-latest` runner and uploads it as a workflow artifact. It does not use
EAS Build or any Apple credentials - codesigning is disabled at archive
time (`CODE_SIGNING_ALLOWED=NO`) on purpose, since SideStore/AltStore
replace the signature entirely with your own free personal-team certificate
when you install the IPA on-device.

### 1. One-time repo setup

Under **Settings -> Secrets and variables -> Actions -> Variables** (plain
*Variables*, not *Secrets* - these are identifiers, not credentials), add:

| Variable | Example | Required? |
|---|---|---|
| `IOS_BUNDLE_IDENTIFIER` | `com.yourname.prayermv` | Recommended - pick something you'll register under your own Apple ID |
| `IOS_APP_GROUP_ID` | `group.com.yourname.prayermv` | Optional - defaults to `group.<bundle id>` |
| `APPLE_TEAM_ID` | `ABCDE12345` | Optional - your 10-character Team ID from Xcode's Signing & Capabilities tab, if you know it yet |

If you skip all three, the build still runs using placeholder
`com.prayermv.app` identifiers - fine for the first entitlement-provisioning
test, but you'll want your own before doing anything you plan to keep
installed long-term.

### 2. Run the build

Actions tab -> **iOS unsigned build (sideload)** -> **Run workflow** (or
just push to this branch). Download the `prayermv-unsigned-ipa` artifact
when it finishes.

**Cost note:** macOS runners consume Actions minutes at a 10x multiplier
against the free-tier monthly allowance on private repos (public repos get
unlimited free minutes). Worth knowing before triggering this repeatedly.

### 3. What's in this first build

This is deliberately the smallest useful test, not the final widget:

- The main app, plus one WidgetKit extension (`targets/widget`) with an
  **App Group capability declared** on both targets - the actual point of
  this round is to find out whether that capability provisions on a free
  personal-team Apple ID, which has shifted over time and wasn't certain
  going in.
- The widget itself does **not** depend on that App Group working. It's
  configured entirely in its own edit UI (long-press -> Edit Widget, an
  `AppIntentConfiguration`/`WidgetConfigurationIntent`) with a curated list
  of 8 islands (one per region), and computes prayer times itself from a
  small bundled copy of the same published per-island data
  (`targets/widget/PrayerData.json`) rather than reading anything the RN
  app wrote. So it should keep working even if App Groups turns out to be
  unreliable on the free tier.
  - Full search across all ~200 islands (rather than the curated 8) is
    intentionally deferred - that needs a dynamic `AppEntity`/`EntityQuery`
    search UI, which is meaningfully more Swift API surface to get right
    with no local compiler to verify against. Worth doing once this
    simpler scaffold is confirmed working end to end.
- **A second thing worth watching, beyond App Groups:** `expo-notifications`
  (used for the app's local prayer notifications since Phase 1) always adds
  an `aps-environment` (Push Notifications) entitlement to the main app,
  even though this app only ever schedules local notifications. Push
  capability has *usually* been available on free personal-team accounts,
  but if the install/sideload fails specifically on that entitlement,
  that's the other candidate to suspect alongside App Groups.

### 4. What you still need to do yourself (outside this repo)

- **Register the bundle IDs and App Group under your own Apple ID.**
  SideStore can sometimes auto-register a new bundle ID on install; if it
  doesn't, log in at [developer.apple.com/account](https://developer.apple.com/account)
  (free membership is enough) and add the App ID(s) and App Group manually
  under Certificates, Identifiers & Profiles.
- **Install via SideStore** and point it at the downloaded IPA. Keep its
  background VPN refresh connected - that's what silently re-signs the app
  before the free-tier 7-day certificate expiry, without needing a Mac.
- **Free-tier limits to watch:** max 10 App IDs and 10 App Groups
  registered per rolling 7 days on a free personal-team account. Each
  distinct bundle identifier (main app + widget extension count as two)
  and each App Group you register counts against that.
- **Report back what happens** when you sideload this: specifically
  whether the App Group capability installs cleanly, and whether the
  widget shows up and is configurable. That result decides whether the
  "real" widget (all islands, richer data) builds on App Groups or stays
  fully self-contained per the design above.

## Project structure

- `app/` - Expo Router screens
- `lib/` - shared logic (prayer time computation, notifications, i18n, etc.)
- `targets/widget/` - iOS WidgetKit extension (via `@bacons/apple-targets`,
  a config plugin - `ios/` is generated by `expo prebuild` and is a build
  artifact, not committed)
- `locales/` - en/dv/ar translations
