/** @type {import('@bacons/apple-targets/app.plugin').ConfigFunction} */
module.exports = (config) => ({
  type: 'widget',
  name: 'PrayerWidget',
  displayName: 'Prayer Times',
  // AppIntentConfiguration / WidgetConfigurationIntent require iOS 17.
  deploymentTarget: '17.0',
  frameworks: ['AppIntents'],
  colors: {
    $accent: '#13E2E6',
    $widgetBackground: '#011C53',
  },
  // Lets the widget read the app's selected island from the shared
  // UserDefaults suite the app writes to (see lib/widgetSync.ts and
  // PrayerData.swift's appSelectedIslandId()), so a widget instance that
  // hasn't been explicitly configured with its own island always matches
  // whatever island is currently selected in the app.
  entitlements: {
    'com.apple.security.application-groups':
      config.ios.entitlements?.['com.apple.security.application-groups'] ?? [],
  },
});
