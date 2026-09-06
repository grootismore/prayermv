import { useMemo, useState } from 'react';
import { View, Text, TextInput, SectionList, Pressable, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { getAtollGroups } from '../lib/prayerTimes';
import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import { useSettings } from '../context/SettingsContext';
import { localizedIslandName, localizedAtollName } from '../lib/islandNames';

interface Props {
  currentIslandId?: number | null;
  onSelect: (islandId: number) => void;
}

export default function IslandPicker({ currentIslandId, onSelect }: Props) {
  const { t } = useTranslation();
  const { language } = useSettings();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const groups = getAtollGroups();
    const normalizedQuery = query.trim().toLowerCase();

    return groups
      .map((group) => ({
        title: localizedAtollName(group.atoll, language),
        data: normalizedQuery
          ? group.islands.filter(
              (island) =>
                island.island.toLowerCase().includes(normalizedQuery) ||
                group.atoll.toLowerCase().includes(normalizedQuery)
            )
          : group.islands,
      }))
      .filter((section) => section.data.length > 0);
  }, [query, language]);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={17} color={colors.textMuted} style={styles.searchIcon} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t('onboarding.searchPlaceholder')}
          placeholderTextColor={colors.textMuted}
          style={styles.searchInput}
          autoCorrect={false}
        />
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item) => String(item.islandId)}
        stickySectionHeadersEnabled
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onSelect(item.islandId)}
            style={({ pressed }) => [
              styles.row,
              item.islandId === currentIslandId && styles.rowSelected,
              pressed && styles.rowPressed,
            ]}
            accessibilityRole="radio"
            accessibilityState={{ selected: item.islandId === currentIslandId }}
          >
            <Text style={styles.rowText}>{localizedIslandName(item, language)}</Text>
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>{t('onboarding.noResults')}</Text>}
      />
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: { flex: 1 },
    searchWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: spacing.md,
      marginBottom: spacing.xs,
      paddingHorizontal: spacing.sm,
      borderRadius: radius.md,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    searchIcon: { marginRight: spacing.xs },
    searchInput: {
      flex: 1,
      paddingVertical: spacing.sm,
      color: colors.textPrimary,
      fontSize: typography.size.md,
    },
    sectionHeader: {
      backgroundColor: colors.background,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xxs,
    },
    sectionHeaderText: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
      color: colors.primary,
      letterSpacing: 0.5,
    },
    row: {
      minHeight: minTouchTarget,
      justifyContent: 'center',
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
    },
    rowSelected: {
      backgroundColor: colors.primarySoft,
    },
    rowPressed: {
      backgroundColor: colors.surfacePressed,
    },
    rowText: {
      fontSize: typography.size.md,
      color: colors.textPrimary,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: spacing.lg,
      color: colors.textMuted,
    },
  });
