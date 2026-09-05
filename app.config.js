const fs = require('fs');
const path = require('path');

// Bundle/App Group identifiers are read from env vars (set as GitHub Actions
// secrets/variables in CI) rather than hardcoded, since whoever builds this
// needs to register these under their own Apple ID on the free developer
// portal. Sensible local-dev defaults are provided as fallbacks.
const IOS_BUNDLE_IDENTIFIER = process.env.IOS_BUNDLE_IDENTIFIER || 'com.prayermv.app';
const IOS_APP_GROUP_ID = process.env.IOS_APP_GROUP_ID || `group.${IOS_BUNDLE_IDENTIFIER}`;
const ANDROID_PACKAGE = process.env.ANDROID_PACKAGE || 'com.prayermv.app';
const APPLE_TEAM_ID = process.env.APPLE_TEAM_ID || undefined;

// See assets/sounds/README.md - the actual adhan.wav isn't committed yet,
// so this only gets added to the notifications plugin (which would
// otherwise fail the prebuild trying to copy a file that doesn't exist)
// once someone actually drops it in.
const ADHAN_SOUND_RELATIVE_PATH = './assets/sounds/adhan.wav';
const adhanSoundExists = fs.existsSync(path.join(__dirname, 'assets/sounds/adhan.wav'));

/** @type {import('expo/config').ExpoConfig} */
module.exports = {
  expo: {
    name: 'Salat MV',
    slug: 'prayermv',
    version: '1.0.0',
    scheme: 'prayermv',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'dark',
    ios: {
      bundleIdentifier: IOS_BUNDLE_IDENTIFIER,
      supportsTablet: true,
      ...(APPLE_TEAM_ID ? { appleTeamId: APPLE_TEAM_ID } : {}),
      // Declared on the main app so the free-tier App Group provisioning
      // test (see targets/widget) can be validated end to end. Not
      // currently read by any app code - the widget is self-contained.
      entitlements: {
        'com.apple.security.application-groups': [IOS_APP_GROUP_ID],
      },
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'Used only to improve Qibla compass accuracy. Location is never sent anywhere.',
      },
    },
    android: {
      package: ANDROID_PACKAGE,
      adaptiveIcon: {
        backgroundColor: '#031B3D',
        foregroundImage: './assets/android-icon-foreground.png',
        backgroundImage: './assets/android-icon-background.png',
        monochromeImage: './assets/android-icon-monochrome.png',
      },
      predictiveBackGestureEnabled: false,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      'expo-status-bar',
      'expo-background-task',
      'expo-localization',
      'expo-location',
      'expo-font',
      [
        'expo-splash-screen',
        {
          image: './assets/splash-icon.png',
          backgroundColor: '#031B3D',
          imageWidth: 220,
          resizeMode: 'contain',
        },
      ],
      [
        'expo-notifications',
        {
          icon: './assets/icon.png',
          color: '#13E2E6',
          ...(adhanSoundExists ? { sounds: [ADHAN_SOUND_RELATIVE_PATH] } : {}),
        },
      ],
      '@bacons/apple-targets',
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      iosAppGroupId: IOS_APP_GROUP_ID,
    },
  },
};
