import { useMemo, useState } from 'react';
import { View, Text, TextInput, SectionList, Pressable, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { getAtollGroups } from '../lib/prayerTimes';
import { colors } from '../lib/theme';

interface Props {
  currentIslandId?: number | null;
  onSelect: (islandId: number) => void;
}

export default function IslandPicker({ currentIslandId, onSelect }: Props) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const groups = getAtollGroups();
    const normalizedQuery = query.trim().toLowerCase();

    return groups
      .map((group) => ({
        title: group.atoll,
        data: normalizedQuery
          ? group.islands.filter(
              (island) =>
                island.island.toLowerCase().includes(normalizedQuery) ||
                group.atoll.toLowerCase().includes(normalizedQuery)
            )
          : group.islands,
      }))
      .filter((section) => section.data.length > 0);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder={t('onboarding.searchPlaceholder')}
        placeholderTextColor={colors.textMuted}
        style={styles.searchInput}
        autoCorrect={false}
      />
      <SectionList
        sections={sections}
        keyExtractor={(item) => String(item.islandId)}
        stickySectionHeadersEnabled
        keyboardShouldPersistTaps="handled"
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
          >
            <Text style={styles.rowText}>{item.island}</Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>{t('onboarding.noResults')}</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchInput: {
    marginHorizontal: 16,
    marginBottom: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    color: colors.text,
    fontSize: 16,
  },
  sectionHeader: {
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 0.5,
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  rowSelected: {
    backgroundColor: colors.primaryLight,
  },
  rowPressed: {
    opacity: 0.6,
  },
  rowText: {
    fontSize: 16,
    color: colors.text,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    color: colors.textMuted,
  },
});
