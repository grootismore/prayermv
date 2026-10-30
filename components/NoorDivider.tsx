import { StyleSheet, View } from 'react-native';

import { spacing } from '../lib/theme';
import LacquerBand from './LacquerBand';

interface Props {
  /** Tighter vertical margin, for screens whose content needs to fit without scrolling (e.g. Home, Calendar). */
  compact?: boolean;
}

/** The app's section divider: a lacquer band, narrower than the screen so it reads as a rule, not a bar. */
export default function NoorDivider({ compact = false }: Props) {
  return (
    <View style={[styles.wrap, compact && styles.wrapCompact]}>
      <LacquerBand thin={1} thick={2} gap={2} style={styles.band} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: spacing.md },
  wrapCompact: { marginVertical: spacing.sm },
  band: { alignSelf: 'center', width: 72 },
});
