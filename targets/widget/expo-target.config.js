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
  // Declared purely to test whether an App Group capability provisions on
  // a free personal-team Apple ID - the widget itself is self-contained
  // (see PrayerData.swift) and doesn't read from this at runtime.
  entitlements: {
    'com.apple.security.application-groups':
      config.ios.entitlements?.['com.apple.security.application-groups'] ?? [],
  },
});
