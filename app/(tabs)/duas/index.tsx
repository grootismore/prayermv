import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../../context/SettingsContext';
import { useDuaPreferences } from '../../../hooks/useDuaPreferences';
import { useDuaFavourites } from '../../../hooks/useDuaFavourites';
import { ALL_DUAS, getDuaCategoriesSorted, getDuasByCategory, getFeaturedEveningDua, getFeaturedMorningDua, getDuaById } from '../../../data/duas';
import { searchDuas } from '../../../lib/duaSearch';
import { resolveDuaTranslationLanguage, getDuaTitleText, getDuaTranslationText, getDuaEntryCountKey } from '../../../lib/duaTranslation';
import type { Dua } from '../../../types/dua';
import { minTouchTarget, radius, shadow, spacing, typography, type ThemeColors } from '../../../lib/theme';
import { useTheme, useThemedStyles } from '../../../lib/useTheme';
import Screen from '../../../components/Screen';
import SurfaceCard from '../../../components/SurfaceCard';
import SectionHeader from '../../../components/SectionHeader';
import NoorDivider from '../../../components/NoorDivider';
import WaveDecoration from '../../../components/WaveDecoration';
import SunAccent from '../../../components/SunAccent';
import DuaSearchInput from '../../../components/dua/DuaSearchInput';
import DuaCategoryCard from '../../../components/dua/DuaCategoryCard';
import DuaCard from '../../../components/dua/DuaCard';

export default function DuasHomeScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const { language } = useSettings();
  const { preferences } = useDuaPreferences();
  const { favouriteIds, isFavourite } = useDuaFavourites();

  const [query, setQuery] = useState('');
  const isSearching = query.trim().length > 0;

  const resolvedLanguage = resolveDuaTranslationLanguage(preferences.translationLanguage, language);
  const categories = useMemo(() => getDuaCategoriesSorted(), []);
  const searchResults = useMemo(() => searchDuas(ALL_DUAS, query), [query]);

  const favouriteDuas = useMemo(
    () => favouriteIds.map((id) => getDuaById(id)).filter((d): d is Dua => d != null),
    [favouriteIds]
  );

  const featuredMorning = useMemo(() => getFeaturedMorningDua(), []);
  const featuredEvening = useMemo(() => getFeaturedEveningDua(), []);

  function openDua(dua: Dua) {
    router.push({ pathname: '/(tabs)/duas/[duaId]', params: { duaId: dua.id, categoryId: dua.categoryId } });
  }

  function openCategory(categoryId: string) {
    router.push({ pathname: '/(tabs)/duas/category/[categoryId]', params: { categoryId } });
  }

  function renderDuaResult(dua: Dua) {
    return (
      <DuaCard
        key={dua.id}
        title={getDuaTitleText(dua, resolvedLanguage)}
        preview={getDuaTranslationText(dua, resolvedLanguage)}
        typeLabel={t(dua.type === 'zikr' ? 'duas.typeZikr' : 'duas.typeDua')}
        isZikr={dua.type === 'zikr'}
        repetitionsLabel={dua.repetitions ? `×${dua.repetitions}` : undefined}
        isFavourite={isFavourite(dua.id)}
        onPress={() => openDua(dua)}
        accessibilityLabel={[
          getDuaTitleText(dua, resolvedLanguage),
          isFavourite(dua.id) ? t('duas.favouriteAccessibilityHint') : null,
        ]
          .filter(Boolean)
          .join(', ')}
      />
    );
  }

  if (isSearching) {
    return (
      <Screen scroll={false} contentContainerStyle={styles.searchScreenPadding}>
        <Text style={styles.title}>{t('duas.title')}</Text>
        <DuaSearchInput
          value={query}
          onChangeText={setQuery}
          placeholder={t('duas.searchPlaceholder')}
          clearAccessibilityLabel={t('duas.clearSearch')}
        />
        <FlatList
          data={searchResults}
          keyExtractor={(dua) => dua.id}
          renderItem={({ item }) => renderDuaResult(item)}
          contentContainerStyle={{ paddingBottom: insets.bottom + spacing.xl }}
          ListEmptyComponent={<Text style={styles.emptyText}>{t('duas.noSearchResults')}</Text>}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    );
  }

  return (
    <Screen
      backgroundDecoration={
        <>
          <WaveDecoration variant="header" />
          <View style={[styles.sunSpot, { top: insets.top + 4 }]}>
            <SunAccent size={24} />
          </View>
        </>
      }
    >
      <Text style={styles.title}>{t('duas.title')}</Text>
      <Text style={styles.intro}>{t('duas.intro')}</Text>

      <DuaSearchInput
        value={query}
        onChangeText={setQuery}
        placeholder={t('duas.searchPlaceholder')}
        clearAccessibilityLabel={t('duas.clearSearch')}
      />

      <View style={styles.featuredRow}>
        {featuredMorning && (
          <SurfaceCard onPress={() => openDua(featuredMorning)} style={styles.featuredCard} elevated>
            <Ionicons name="sunny-outline" size={20} color={colors.gold} />
            <Text style={styles.featuredLabel}>{t('duas.featuredMorning')}</Text>
            <Text style={styles.featuredTitle} numberOfLines={2}>
              {getDuaTitleText(featuredMorning, resolvedLanguage)}
            </Text>
          </SurfaceCard>
        )}
        {featuredEvening && (
          <SurfaceCard onPress={() => openDua(featuredEvening)} style={styles.featuredCard} elevated>
            <Ionicons name="moon-outline" size={20} color={colors.primary} />
            <Text style={styles.featuredLabel}>{t('duas.featuredEvening')}</Text>
            <Text style={styles.featuredTitle} numberOfLines={2}>
              {getDuaTitleText(featuredEvening, resolvedLanguage)}
            </Text>
          </SurfaceCard>
        )}
      </View>

      {favouriteDuas.length > 0 ? (
        <>
          <SectionHeader title={t('duas.favourites')} />
          <SurfaceCard padded={false}>{favouriteDuas.map(renderDuaResult)}</SurfaceCard>
        </>
      ) : (
        <>
          <SectionHeader title={t('duas.favourites')} />
          <SurfaceCard style={styles.emptyFavouritesCard}>
            <Ionicons name="heart-outline" size={22} color={colors.textMuted} />
            <Text style={styles.emptyFavouritesText}>{t('duas.noFavourites')}</Text>
          </SurfaceCard>
        </>
      )}

      <NoorDivider compact />

      <SectionHeader title={t('duas.categories')} />
      <SurfaceCard padded={false}>
        {categories.map((category) => {
          const count = getDuasByCategory(category.id).length;
          return (
            <DuaCategoryCard
              key={category.id}
              title={category.title[resolvedLanguage]}
              description={category.description?.[resolvedLanguage]}
              icon={category.icon}
              count={count}
              countLabel={t(getDuaEntryCountKey(count), { count })}
              onPress={() => openCategory(category.id)}
            />
          );
        })}
      </SurfaceCard>
    </Screen>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    sunSpot: { position: 'absolute', right: 8 },
    searchScreenPadding: { flex: 1, padding: spacing.lg },
    title: {
      fontSize: typography.size.xl,
      fontWeight: typography.weight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.xxs,
    },
    intro: {
      fontSize: typography.size.sm,
      color: colors.textSecondary,
      marginBottom: spacing.md,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: spacing.lg,
      color: colors.textMuted,
    },
    featuredRow: {
      flexDirection: 'row',
      gap: spacing.sm,
      marginTop: spacing.md,
    },
    featuredCard: {
      flex: 1,
      gap: 4,
      minHeight: minTouchTarget + 24,
      ...shadow.card,
    },
    featuredLabel: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.bold,
      color: colors.textSecondary,
      letterSpacing: 0.3,
      marginTop: spacing.xxs,
    },
    featuredTitle: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.semibold,
      color: colors.textPrimary,
    },
    emptyFavouritesCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    emptyFavouritesText: {
      flex: 1,
      color: colors.textSecondary,
      fontSize: typography.size.sm,
    },
  });
