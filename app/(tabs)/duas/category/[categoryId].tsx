import { useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../../../context/SettingsContext';
import { useDuaPreferences } from '../../../../hooks/useDuaPreferences';
import { useDuaFavourites } from '../../../../hooks/useDuaFavourites';
import { getDuaCategoryById, getDuasByCategory } from '../../../../data/duas';
import { resolveDuaTranslationLanguage, getDuaTitleText, getDuaTranslationText, getDuaEntryCountKey } from '../../../../lib/duaTranslation';
import type { Dua } from '../../../../types/dua';
import { minTouchTarget, spacing, typography, type ThemeColors } from '../../../../lib/theme';
import { useTheme, useThemedStyles } from '../../../../lib/useTheme';
import SurfaceCard from '../../../../components/SurfaceCard';
import DuaCard from '../../../../components/dua/DuaCard';

export default function DuaCategoryScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const { language } = useSettings();
  const { preferences } = useDuaPreferences();
  const { isFavourite } = useDuaFavourites();
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  const resolvedLanguage = resolveDuaTranslationLanguage(preferences.translationLanguage, language);
  const category = useMemo(() => (categoryId ? getDuaCategoryById(categoryId) : undefined), [categoryId]);
  const duas = useMemo(() => (categoryId ? getDuasByCategory(categoryId) : []), [categoryId]);

  function openDua(dua: Dua) {
    router.push({ pathname: '/(tabs)/duas/[duaId]', params: { duaId: dua.id, categoryId: dua.categoryId } });
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={8}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel={t('duas.back')}
        >
          <Ionicons name="chevron-back" size={24} color={colors.primary} />
        </Pressable>
        <View style={styles.headerText}>
          <Text style={styles.title} numberOfLines={1}>
            {category ? category.title[resolvedLanguage] : ''}
          </Text>
          {category?.description ? (
            <Text style={styles.description} numberOfLines={2}>
              {category.description[resolvedLanguage]}
            </Text>
          ) : null}
          <Text style={styles.count}>{t(getDuaEntryCountKey(duas.length), { count: duas.length })}</Text>
        </View>
      </View>

      <FlatList
        data={duas}
        keyExtractor={(dua) => dua.id}
        renderItem={({ item }) => (
          <SurfaceCard padded={false} style={styles.cardWrap}>
            <DuaCard
              title={getDuaTitleText(item, resolvedLanguage)}
              preview={getDuaTranslationText(item, resolvedLanguage)}
              typeLabel={t(item.type === 'zikr' ? 'duas.typeZikr' : 'duas.typeDua')}
              isZikr={item.type === 'zikr'}
              repetitionsLabel={item.repetitions ? `×${item.repetitions}` : undefined}
              isFavourite={isFavourite(item.id)}
              onPress={() => openDua(item)}
              accessibilityLabel={[
                getDuaTitleText(item, resolvedLanguage),
                isFavourite(item.id) ? t('duas.favouriteAccessibilityHint') : null,
              ]
                .filter(Boolean)
                .join(', ')}
            />
          </SurfaceCard>
        )}
        contentContainerStyle={{ padding: spacing.lg, paddingBottom: insets.bottom + spacing.xl }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.background },
    header: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: spacing.md,
      paddingTop: spacing.xs,
      paddingBottom: spacing.sm,
      gap: spacing.xs,
    },
    backButton: {
      width: minTouchTarget,
      height: minTouchTarget,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -spacing.xxs,
    },
    headerText: { flex: 1, gap: 2, paddingTop: spacing.xs },
    title: {
      fontSize: typography.size.xl,
      fontWeight: typography.weight.bold,
      color: colors.textPrimary,
    },
    description: {
      fontSize: typography.size.sm,
      color: colors.textSecondary,
    },
    count: {
      fontSize: typography.size.xs,
      color: colors.textMuted,
      marginTop: 2,
    },
    cardWrap: { marginBottom: spacing.sm },
  });
