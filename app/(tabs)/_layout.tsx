import { Text, View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { colors, radius, shadow, spacing, tabBarMetrics, typography } from '../../lib/theme';

type IconName = keyof typeof Ionicons.glyphMap;

function TabBarIcon({ name, label, focused }: { name: IconName; label: string; focused: boolean }) {
  return (
    <View style={[styles.item, focused && styles.itemActive]}>
      <Ionicons
        name={name}
        color={focused ? colors.primary : colors.textSecondary}
        size={tabBarMetrics.iconSize}
      />
      <Text style={[styles.label, focused && styles.labelActive]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} label={t('tabs.home')} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="qibla"
        options={{
          title: t('tabs.qibla'),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'compass' : 'compass-outline'} label={t('tabs.qibla')} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="hijri"
        options={{
          title: t('tabs.hijri'),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'calendar' : 'calendar-outline'}
              label={t('tabs.hijri')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'settings' : 'settings-outline'}
              label={t('tabs.settings')}
              focused={focused}
            />
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
    height: tabBarMetrics.height,
    paddingTop: spacing.sm,
    ...shadow.floating,
  },
  tabItem: {
    paddingTop: 0,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    minWidth: 64,
    paddingHorizontal: tabBarMetrics.pillPaddingHorizontal,
    paddingVertical: tabBarMetrics.pillPaddingVertical,
    borderRadius: radius.pill,
  },
  itemActive: {
    backgroundColor: colors.primarySoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semibold,
    color: colors.textSecondary,
  },
  labelActive: {
    color: colors.primary,
  },
});
