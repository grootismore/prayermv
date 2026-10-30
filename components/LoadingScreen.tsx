import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import AmbientBackground from './AmbientBackground';

/**
 * Branded, full-bleed loading state - used anywhere the app has real data
 * to wait on after the native splash screen has already been dismissed
 * (e.g. Home's next-prayer data), so users never see a bare spinner on a
 * plain background.
 */
export default function LoadingScreen({ label }: { label?: string }) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.root}>
      <AmbientBackground />
      <SafeAreaView style={styles.safe}>
        <ActivityIndicator size="large" color={colors.primary} />
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </SafeAreaView>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.background },
    safe: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    label: { marginTop: spacing.md, fontSize: typography.size.base, color: colors.textSecondary, fontWeight: typography.weight.semibold },
  });
