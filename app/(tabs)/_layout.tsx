import { View, StyleSheet, type ColorValue } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { colors, radius, shadow, spacing, tabBarMetrics, typography } from '../../lib/theme';

type IconName = keyof typeof Ionicons.glyphMap;

// The pill wraps only the icon - the label beneath it is rendered by
// react-navigation's own tabBarLabel (tabBarActiveTintColor/tabBarLabelStyle
// below), the same native Text sizing every React Navigation tab bar relies
// on, rather than a hand-rolled one prone to clipping/truncating on
// narrower devices.
function TabIcon({ name, color, focused }: { name: IconName; color: ColorValue; focused: boolean }) {
  return (
    <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
      <Ionicons name={name} color={color} size={tabBarMetrics.iconSize} />
    </View>
  );
}

export default function TabsLayout() {
  const { t } = useTranslation();
  // The tab bar's own height only covers its icon/label content - the
  // home-indicator safe area below it is added as real padding (not just
  // left for the OS to overlay), and its background color extends through
  // that padding, so there's no unstyled gap between the bar and the true
  // bottom edge of the screen on any device.
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
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

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.backgroundDeep,
    borderTopWidth: 0,
    borderTopLeftRadius: tabBarMetrics.topRadius,
    borderTopRightRadius: tabBarMetrics.topRadius,
    paddingTop: spacing.sm,
    ...shadow.floating,
  },
  tabItem: {
    paddingTop: 0,
  },
  iconWrap: {
    width: 44,
    height: 28,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: colors.primarySoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semibold,
    marginTop: 2,
  },
});
