import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { colors, screenPadding } from '../lib/theme';

interface Props {
  children: ReactNode;
  /** Wrap content in a vertical ScrollView (default true). Set false for screens that manage their own layout (e.g. Qibla's centered compass). */
  scroll?: boolean;
  edges?: Edge[];
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  /** Purely decorative background (e.g. WaveDecoration/SunAccent) rendered edge-to-edge behind the content, ignoring screen padding. Stays fixed - it doesn't scroll with the content. */
  backgroundDecoration?: ReactNode;
}

/** Shared full-bleed screen shell: midnight-navy background + safe-area handling, with or without scrolling content. */
export default function Screen({
  children,
  scroll = true,
  edges = ['top', 'bottom'],
  contentContainerStyle,
  style,
  backgroundDecoration,
}: Props) {
  return (
    <SafeAreaView style={[styles.root, style]} edges={edges}>
      {backgroundDecoration ? (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          {backgroundDecoration}
        </View>
      ) : null}
      {scroll ? (
        <ScrollView
          contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.flexContent, contentContainerStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  scrollContent: { padding: screenPadding, paddingBottom: screenPadding * 2 },
  flexContent: { flex: 1, padding: screenPadding },
});
