import { StyleSheet, View } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';

import { colors, spacing } from '../lib/theme';

interface Props {
  /** Tighter vertical margin, for screens whose content needs to fit without scrolling (e.g. Home, Calendar). */
  compact?: boolean;
}

/** A thin cyan hairline broken by a small centered diamond - the app's section divider, matching the Noor+ mockups. */
export default function NoorDivider({ compact = false }: Props) {
  return (
    <View style={[styles.wrap, compact && styles.wrapCompact]} pointerEvents="none">
      <Svg width="100%" height={14} viewBox="0 0 100 14" preserveAspectRatio="none">
        <Line x1="0" y1="7" x2="43" y2="7" stroke={colors.primary} strokeWidth={1} opacity={0.35} />
        <Rect x="46" y="3" width="8" height="8" rotation={45} origin="50, 7" fill={colors.primary} opacity={0.7} />
        <Line x1="57" y1="7" x2="100" y2="7" stroke={colors.primary} strokeWidth={1} opacity={0.35} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: spacing.md },
  wrapCompact: { marginVertical: spacing.xs },
});
