import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';

import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../lib/theme';
import { useThemedStyles } from '../lib/useTheme';

interface Segment {
  key: string;
  label: string;
}

interface Props {
  segments: Segment[];
  selectedKey: string;
  onChange: (key: string) => void;
}

/** A pill-shaped two-or-more-option switch (e.g. Hijri / Gregorian) - dark outlined track, solid mint fill on the selected segment. */
export default function SegmentedControl({ segments, selectedKey, onChange }: Props) {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.track} accessibilityRole="tablist">
      {segments.map((segment) => {
        const selected = segment.key === selectedKey;
        return (
          <Pressable
            key={segment.key}
            onPress={() => onChange(segment.key)}
            style={[styles.segment, selected && styles.segmentSelected]}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            accessibilityLabel={segment.label}
          >
            <Text style={[styles.label, selected && styles.labelSelected]}>{segment.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    track: {
      flexDirection: 'row',
      backgroundColor: colors.surface,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 4,
    },
    segment: {
      flex: 1,
      minHeight: minTouchTarget,
      borderRadius: radius.pill,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spacing.sm,
    },
    segmentSelected: {
      backgroundColor: colors.fill,
    },
    label: {
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      color: colors.textSecondary,
    },
    labelSelected: {
      color: colors.onFill,
      fontWeight: typography.weight.bold,
    },
  });
