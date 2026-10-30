import { Platform, View, StyleSheet, type ColorValue } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { radius, spacing, tabBarMetrics, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';
import LacquerBand from '../../components/LacquerBand';

const isIOS = Platform.OS === 'ios';

type IconName = keyof typeof Ionicons.glyphMap;

// Platform-adaptive active state: Android gets Material 3's pill behind the
// icon; iOS keeps the bare tinted/filled glyph, as UITabBar does. The label
// beneath is react-navigation's own tabBarLabel (tabBarActiveTintColor /
// tabBarLabelStyle below), the same native Text sizing every React
// Navigation tab bar relies on, rather than a hand-rolled one prone to
// clipping/truncating on narrower devices.
function TabIcon({ name, color, focused }: { name: IconName; color: ColorValue; focused: boolean }) {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={[styles.iconWrap, focused && !isIOS && styles.iconWrapActive]}>
      <Ionicons name={name} color={color} size={tabBarMetrics.iconSize} />
    </View>
  );
}

export default function TabsLayout() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  // The tab bar's own height only covers its icon/label content - the
  // home-indicator safe area below it is added as real padding (not just
  // left for the OS to overlay), and its background color extends through
  // that padding, so there's no unstyled gap between the bar and the true
  // bottom edge of the screen on any device.
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        // The lacquer rim: the app's one ornament doubles as the bar's top edge.
        tabBarBackground: () => (
          <View style={styles.rim}>
            <LacquerBand thin={1} thick={2} gap={2} />
          </View>
        ),
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: styles.label,
        tabBarStyle: [styles.tabBar, { height: tabBarMetrics.height + insets.bottom, paddingBottom: insets.bottom }],
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'home' : 'home-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="qibla"
        options={{
          title: t('tabs.qibla'),
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'compass' : 'compass-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="hijri"
        options={{
          title: t('tabs.hijri'),
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="duas"
        options={{
          title: t('tabs.duas'),
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'book' : 'book-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'settings' : 'settings-outline'} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: colors.backgroundDeep,
      borderTopWidth: 0,
      paddingTop: spacing.sm,
      // Flat: the band rim carries the edge, so no shadow (one elevation language).
      elevation: 0,
    },
    tabItem: {
      paddingTop: 0,
    },
    rim: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    iconWrap: {
      // Android's M3 indicator is 64x32; iOS has no indicator, so the
      // wrapper just keeps the glyph centred at the same height.
      width: isIOS ? 44 : 56,
      height: 28,
      borderRadius: radius.pill,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrapActive: {
      backgroundColor: colors.primarySoft,
    },
    label: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.semibold,
      marginTop: 2,
    },
  });
