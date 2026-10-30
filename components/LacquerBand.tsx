import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { useTheme } from '../lib/useTheme';

interface Props {
  /** Defaults to the theme's ochre. Pass `colors.heroText` on the hero. */
  color?: string;
  /** Line weights in dp: thin / thick / thin, the incised pattern turned into a lacquer vessel on the lathe. */
  thin?: number;
  thick?: number;
  gap?: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * The one ornament in the app: three incised lines (thin, thick, thin), as
 * on Maldivian lacquerwork. Plain Views rather than SVG, so it's free to
 * render, crisp at any density, and neutral to RTL. Decorative only -
 * hidden from screen readers.
 */
export default function LacquerBand({ color, thin = 1, thick = 3, gap = 3, style }: Props) {
  const { colors } = useTheme();
  const tone = color ?? colors.gold;
  return (
    <View
      style={[styles.wrap, { gap }, style]}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <View style={{ height: thin, backgroundColor: tone, opacity: 0.55 }} />
      <View style={{ height: thick, backgroundColor: tone }} />
      <View style={{ height: thin, backgroundColor: tone, opacity: 0.55 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignSelf: 'stretch' },
});
