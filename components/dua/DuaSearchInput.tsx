import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  clearAccessibilityLabel: string;
}

/** A themed search box, matching IslandPicker's search field styling. */
export default function DuaSearchInput({ value, onChangeText, placeholder, clearAccessibilityLabel }: Props) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.wrap}>
      <Ionicons name="search" size={17} color={colors.textMuted} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        autoCorrect={false}
        accessibilityLabel={placeholder}
        returnKeyType="search"
      />
      {value.length > 0 && (
        <Pressable onPress={() => onChangeText('')} hitSlop={8} accessibilityRole="button" accessibilityLabel={clearAccessibilityLabel}>
          <Ionicons name="close-circle" size={18} color={colors.textMuted} />
        </Pressable>
      )}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wrap: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.sm,
      borderRadius: radius.md,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    icon: { marginRight: spacing.xs },
    input: {
      flex: 1,
      paddingVertical: spacing.sm,
      color: colors.textPrimary,
      fontSize: typography.size.md,
    },
  });
