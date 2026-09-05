import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors, minTouchTarget, radius, spacing, typography } from '../lib/theme';

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
}

/** One row in the language picker: label + a small filled cyan circle-check when selected. */
export default function LanguageRow({ label, selected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
    >
      <Text style={styles.label}>{label}</Text>
      {selected ? (
        <View style={styles.check}>
          <Ionicons name="checkmark" size={14} color={colors.backgroundDeep} />
        </View>
      ) : (
        <View style={styles.checkEmpty} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: minTouchTarget,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  pressed: {
    backgroundColor: colors.surfacePressed,
  },
  label: {
    fontSize: typography.size.md,
    color: colors.textPrimary,
  },
  check: {
    width: 24,
    height: 24,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkEmpty: {
    width: 24,
    height: 24,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
});
