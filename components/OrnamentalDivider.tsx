import { StyleSheet, View } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';

import { colors } from '../lib/theme';

/**
 * A thin Islamic-motif section divider: a gold hairline broken by a small
 * diamond (the same rotated-square shape as GeometricStar/StarField), used
 * to separate content blocks with more visual character than a plain rule.
 */
export default function OrnamentalDivider({ color = colors.gold }: { color?: string }) {
  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg width="100%" height={16} viewBox="0 0 100 16" preserveAspectRatio="none">
        <Line x1="0" y1="8" x2="42" y2="8" stroke={color} strokeWidth={1} opacity={0.5} />
        <Rect x="45" y="3" width="10" height="10" rotation={45} origin="50, 8" fill={color} opacity={0.7} />
        <Line x1="58" y1="8" x2="100" y2="8" stroke={color} strokeWidth={1} opacity={0.5} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: 16 },
});
