import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../../context/SettingsContext';
import { useDuaPreferences } from '../../../hooks/useDuaPreferences';
import { useDuaFavourites } from '../../../hooks/useDuaFavourites';
import { useDuaCounter } from '../../../hooks/useDuaCounter';
import { getDuaById, getDuasByCategory } from '../../../data/duas';
import { resolveDuaTranslationLanguage, getDuaTitleText, getDuaTranslationText, getDuaBenefitsText } from '../../../lib/duaTranslation';
import { shareDua } from '../../../lib/duaShare';
import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../../lib/theme';
import { useTheme, useThemedStyles } from '../../../lib/useTheme';
import DuaArabicText from '../../../components/dua/DuaArabicText';
import DuaCounter from '../../../components/dua/DuaCounter';
import FavouriteButton from '../../../components/dua/FavouriteButton';
import SurfaceCard from '../../../components/SurfaceCard';
import NoorDivider from '../../../components/NoorDivider';

export default function DuaReadingScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const { language } = useSettings();
  const { preferences } = useDuaPreferences();
  const { isFavourite, toggleFavourite } = useDuaFavourites();
  const { duaId, categoryId } = useLocalSearchParams<{ duaId: string; categoryId?: string }>();

  const dua = useMemo(() => (duaId ? getDuaById(duaId) : undefined), [duaId]);
  const resolvedLanguage = resolveDuaTranslationLanguage(preferences.translationLanguage, language);

  const siblings = useMemo(
    () => getDuasByCategory(categoryId ?? dua?.categoryId ?? ''),
    [categoryId, dua?.categoryId]
  );
  const currentIndex = siblings.findIndex((d) => d.id === duaId);
  const previousDua = currentIndex > 0 ? siblings[currentIndex - 1] : undefined;
  const nextDua = currentIndex >= 0 && currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : undefined;

  const counter = useDuaCounter(dua?.id ?? '', dua?.repetitions);

  if (!dua) {
    return (
      <View style={[styles.root, styles.centered, { paddingTop: insets.top }]}>
        <Text style={styles.missingText}>{t('duas.notFound')}</Text>
        <Pressable onPress={() => router.back()} style={styles.backLink}>
          <Text style={styles.backLinkText}>{t('duas.back')}</Text>
        </Pressable>
      </View>
    );
  }

  const titleText = getDuaTitleText(dua, resolvedLanguage);
  const translationText = getDuaTranslationText(dua, resolvedLanguage);
  const benefitsText = getDuaBenefitsText(dua, resolvedLanguage);
  const favourited = isFavourite(dua.id);

  function navigateTo(targetId: string) {
    router.replace({ pathname: '/(tabs)/duas/[duaId]', params: { duaId: targetId, categoryId: categoryId ?? dua!.categoryId } });
  }

  async function handleShare() {
    await shareDua(dua!, {
      titleText,
      translationText,
      showTransliteration: preferences.showTransliteration,
      attribution: t('duas.shareAttribution'),
    });
  }

  function handleToggleFavourite() {
    toggleFavourite(dua!.id);
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={8}
          style={styles.headerButton}
          accessibilityRole="button"
          accessibilityLabel={t('duas.back')}
        >
          <Ionicons name="chevron-back" size={24} color={colors.primary} />
        </Pressable>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {titleText}
        </Text>
        <View style={styles.headerActions}>
          <Pressable
            onPress={handleShare}
            hitSlop={8}
            style={styles.headerButton}
            accessibilityRole="button"
            accessibilityLabel={t('duas.share')}
          >
            <Ionicons name="share-outline" size={22} color={colors.primary} />
          </Pressable>
          <FavouriteButton
            isFavourite={favourited}
            onToggle={handleToggleFavourite}
            addLabel={t('duas.addFavourite')}
            removeLabel={t('duas.removeFavourite')}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: insets.bottom + spacing.xl }} showsVerticalScrollIndicator={false}>
        <SurfaceCard elevated style={styles.arabicCard}>
          <DuaArabicText text={dua.arabic} fontSize={preferences.arabicFontSize} />
        </SurfaceCard>

        {preferences.showTransliteration ? (
          <Text style={styles.transliteration}>{dua.transliteration}</Text>
        ) : null}

        <NoorDivider compact />

        <Text style={styles.sectionLabel}>{t('duas.meaning')}</Text>
        <Text style={styles.translation}>{translationText}</Text>

        {benefitsText ? (
          <>
            <Text style={styles.sectionLabel}>{t('duas.benefits')}</Text>
            <Text style={styles.translation}>{benefitsText}</Text>
          </>
        ) : null}

        <View style={styles.sourceRow}>
          <Ionicons
            name={dua.source.type === 'quran' ? 'book-outline' : 'library-outline'}
            size={16}
            color={colors.textMuted}
          />
          <Text style={styles.sourceText}>
            {dua.source.reference}
            {dua.source.grading ? ` · ${dua.source.grading}` : ''}
          </Text>
        </View>

        {dua.repetitions ? (
          <>
            <NoorDivider compact />
            <Text style={styles.sectionLabel}>{t('duas.counterSectionTitle')}</Text>
            <DuaCounter
              count={counter.count}
              target={counter.target}
              onIncrement={counter.increment}
              onReset={counter.reset}
              duaTitle={titleText}
            />
          </>
        ) : null}
      </ScrollView>

      <View style={[styles.navRow, { paddingBottom: insets.bottom + spacing.sm }]}>
        <Pressable
          onPress={() => previousDua && navigateTo(previousDua.id)}
          disabled={!previousDua}
          style={[styles.navButton, !previousDua && styles.navButtonDisabled]}
          accessibilityRole="button"
          accessibilityLabel={t('duas.previous')}
        >
          <Ionicons name="chevron-back" size={18} color={previousDua ? colors.primary : colors.textMuted} />
          <Text style={[styles.navButtonText, !previousDua && styles.navButtonTextDisabled]}>{t('duas.previous')}</Text>
        </Pressable>
        <Pressable
          onPress={() => nextDua && navigateTo(nextDua.id)}
          disabled={!nextDua}
          style={[styles.navButton, !nextDua && styles.navButtonDisabled]}
          accessibilityRole="button"
          accessibilityLabel={t('duas.next')}
        >
          <Text style={[styles.navButtonText, !nextDua && styles.navButtonTextDisabled]}>{t('duas.next')}</Text>
          <Ionicons name="chevron-forward" size={18} color={nextDua ? colors.primary : colors.textMuted} />
        </Pressable>
      </View>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.background },
    centered: { alignItems: 'center', justifyContent: 'center' },
    missingText: { color: colors.textSecondary, fontSize: typography.size.md },
    backLink: { marginTop: spacing.md, padding: spacing.sm },
    backLinkText: { color: colors.primary, fontWeight: typography.weight.semibold },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.sm,
      paddingBottom: spacing.xs,
      gap: spacing.xxs,
    },
    headerButton: {
      width: minTouchTarget,
      height: minTouchTarget,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerActions: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      flex: 1,
      fontSize: typography.size.md,
      fontWeight: typography.weight.bold,
      color: colors.textPrimary,
      textAlign: 'center',
    },
    arabicCard: {
      paddingVertical: spacing.lg,
    },
    transliteration: {
      marginTop: spacing.sm,
      fontSize: typography.size.md,
      fontStyle: 'italic',
      color: colors.textSecondary,
      lineHeight: typography.size.md * 1.5,
    },
    sectionLabel: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
      color: colors.primary,
      letterSpacing: 0.3,
      marginTop: spacing.md,
      marginBottom: spacing.xxs,
    },
    translation: {
      fontSize: typography.size.md,
      color: colors.textPrimary,
      lineHeight: typography.size.md * 1.6,
    },
    sourceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xxs,
      marginTop: spacing.md,
    },
    sourceText: {
      fontSize: typography.size.sm,
      color: colors.textMuted,
      fontStyle: 'italic',
    },
    navRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.md,
      paddingTop: spacing.sm,
      borderTopWidth: 1,
      borderTopColor: colors.separator,
    },
    navButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      minHeight: minTouchTarget,
      paddingHorizontal: spacing.sm,
      borderRadius: radius.md,
    },
    navButtonDisabled: {
      opacity: 0.4,
    },
    navButtonText: {
      color: colors.primary,
      fontWeight: typography.weight.semibold,
      fontSize: typography.size.sm,
    },
    navButtonTextDisabled: {
      color: colors.textMuted,
    },
  });
