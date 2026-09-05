import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing, typography } from '../lib/theme';
import SunAccent from './SunAccent';
import WaveDecoration from './WaveDecoration';

/**
 * Branded, full-bleed loading state - used anywhere the app has real data
 * to wait on after the native splash screen has already been dismissed
 * (e.g. Home's next-prayer data), so users never see a bare spinner on a
 * plain background.
 */
export default function LoadingScreen({ label }: { label?: string }) {
  return (
    <View style={styles.root}>
      <WaveDecoration variant="header" color={colors.primary} />
      <SafeAreaView style={styles.safe}>
        <SunAccent size={32} />
        <ActivityIndicator size="small" color={colors.primary} style={styles.spinner} />
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  safe: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  spinner: { marginTop: spacing.lg },
  label: { marginTop: spacing.sm, fontSize: typography.size.sm, color: colors.textSecondary, fontWeight: typography.weight.semibold },
});
