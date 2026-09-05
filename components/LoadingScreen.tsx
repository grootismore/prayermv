import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../lib/theme';
import GeometricStar from './GeometricStar';
import StarField from './StarField';

/**
 * Branded, full-bleed loading state - used anywhere the app has real data
 * to wait on after the native splash screen has already been dismissed
 * (e.g. Home's next-prayer data), so users never see a bare spinner on a
 * plain background.
 */
export default function LoadingScreen({ label }: { label?: string }) {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDeep]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <StarField color={colors.goldLight} />
      <SafeAreaView style={styles.safe}>
        <GeometricStar size={40} color={colors.goldLight} />
        <ActivityIndicator size="small" color={colors.goldLight} style={styles.spinner} />
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.primary },
  safe: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  spinner: { marginTop: 24 },
  label: { marginTop: 14, fontSize: 14, color: '#D6EDE7', fontWeight: '600' },
});
