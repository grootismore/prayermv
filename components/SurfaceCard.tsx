import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { cardPadding, minTouchTarget, radius, shadow, type ThemeColors } from '../lib/theme';
import { useThemedStyles } from '../lib/useTheme';

interface Props {
  children: ReactNode;
  onPress?: () => void;
  padded?: boolean;
  elevated?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityRole?: 'button';
}

/** The app's one card surface: dark tonal navy, rounded, thin cyan-tinted border, soft depth shadow. Pressable when `onPress` is given, with restrained native press feedback. */
export default function SurfaceCard({
  children,
  onPress,
  padded = true,
  elevated = false,
  style,
  accessibilityLabel,
  accessibilityRole,
}: Props) {
  const styles = useThemedStyles(createStyles);
  const base = [styles.card, elevated && styles.elevated, padded && styles.padded, style];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [...base, pressed && styles.pressed]}
        accessibilityRole={accessibilityRole ?? 'button'}
        accessibilityLabel={accessibilityLabel}
        hitSlop={4}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View style={base} accessible={!!accessibilityLabel} accessibilityLabel={accessibilityLabel}>
      {children}
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: colors.border,
      overflow: 'hidden',
      minHeight: minTouchTarget,
      ...shadow.card,
    },
    elevated: {
      backgroundColor: colors.surfaceElevated,
    },
    padded: {
      padding: cardPadding,
    },
    pressed: {
      backgroundColor: colors.surfacePressed,
    },
  });
