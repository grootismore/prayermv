const fs = require('fs');
const path = require('path');
const { withDangerousMod, IOSConfig } = require('@expo/config-plugins');
const { generateImageAsync } = require('@expo/image-utils');

const IMAGESET_PATH = 'Images.xcassets/AppIcon.appiconset';

/**
 * Expo's own icon generation (@expo/prebuild-config's withIosIcons) only
 * writes a single 1024x1024 "universal" icon into AppIcon.appiconset and
 * relies on Xcode to derive every other size (Settings, Spotlight, Home
 * Screen, and - the one that actually got reported broken - the 20pt
 * "Notification" icon shown in Notification Center) at archive time via
 * its single-size app icon feature.
 *
 * That derivation didn't happen for this project's unsigned sideload
 * build (CODE_SIGNING_ALLOWED=NO, no Apple Team in Xcode) - the resulting
 * IPA's asset catalog was missing those smaller sizes, so iOS fell back
 * to a generic icon specifically in Notification Center, even though the
 * Home Screen icon (which can use the 1024 source directly) was fine.
 *
 * This plugin runs after Expo's own icon mod and explicitly generates the
 * traditional fixed set of per-idiom icon sizes as real files, so nothing
 * depends on that derivation working. The existing 1024 "universal" entry
 * is left in place alongside these (Xcode supports both in one
 * Contents.json - the extra entries are simply additional sizes it can
 * look up directly).
 */
const ICON_SPECS = [
  // iPhone: Notification, Settings, Spotlight, Home Screen (@2x/@3x)
  { idiom: 'iphone', size: 20, scale: 2 },
  { idiom: 'iphone', size: 20, scale: 3 },
  { idiom: 'iphone', size: 29, scale: 2 },
  { idiom: 'iphone', size: 29, scale: 3 },
  { idiom: 'iphone', size: 40, scale: 2 },
  { idiom: 'iphone', size: 40, scale: 3 },
  { idiom: 'iphone', size: 60, scale: 2 },
  { idiom: 'iphone', size: 60, scale: 3 },
  // iPad: same roles, plus the iPad-only 76pt/83.5pt Home Screen sizes
  // (supportsTablet is enabled in app.config.js).
  { idiom: 'ipad', size: 20, scale: 1 },
  { idiom: 'ipad', size: 20, scale: 2 },
  { idiom: 'ipad', size: 29, scale: 1 },
  { idiom: 'ipad', size: 29, scale: 2 },
  { idiom: 'ipad', size: 40, scale: 1 },
  { idiom: 'ipad', size: 40, scale: 2 },
  { idiom: 'ipad', size: 76, scale: 1 },
  { idiom: 'ipad', size: 76, scale: 2 },
  { idiom: 'ipad', size: 83.5, scale: 2 },
];

function withFullAppIconSet(config) {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const projectRoot = config.modRequest.projectRoot;
      const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);
      const iconSetPath = path.join(projectRoot, 'ios', projectName, IMAGESET_PATH);
      const contentsPath = path.join(iconSetPath, 'Contents.json');

      const sourceIcon = typeof config.ios?.icon === 'string' ? config.ios.icon : config.icon;
      if (!sourceIcon || typeof sourceIcon !== 'string' || !fs.existsSync(contentsPath)) {
        return config;
      }

      const contents = JSON.parse(fs.readFileSync(contentsPath, 'utf8'));

      for (const spec of ICON_SPECS) {
        const pixelSize = Math.round(spec.size * spec.scale);
        const filename = `App-Icon-${spec.idiom}-${spec.size}x${spec.size}@${spec.scale}x.png`;

        const { source } = await generateImageAsync(
          { projectRoot, cacheType: `icons-legacy-${spec.idiom}-${spec.size}-${spec.scale}` },
          {
            src: sourceIcon,
            name: filename,
            width: pixelSize,
            height: pixelSize,
            removeTransparency: true,
            resizeMode: 'cover',
            backgroundColor: '#ffffff',
          }
        );
        fs.writeFileSync(path.join(iconSetPath, filename), source);

        contents.images.push({
          filename,
          idiom: spec.idiom,
          scale: `${spec.scale}x`,
          size: `${spec.size}x${spec.size}`,
        });
      }

      fs.writeFileSync(contentsPath, JSON.stringify(contents, null, 2));
      return config;
    },
  ]);
}

module.exports = withFullAppIconSet;
