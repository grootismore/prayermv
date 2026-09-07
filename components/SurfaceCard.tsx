import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { Pressable, type PanGesture } from 'react-native-gesture-handler';

import { cardPadding, minTouchTarget, radius, shadow, type ThemeColors } from '../lib/theme';
import { useThemedStyles } from '../lib/useTheme';

interface Props {
  children: ReactNode;
  onPress?: () => void;
  padded?: boolean;
  elevated?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  /** A short "what happens on tap" hint, read after the card's own content rather than replacing it - unlike accessibilityLabel, which overrides it. Prefer this for a card whose children are already meaningful text (e.g. a dua's Arabic/translation). */
  accessibilityHint?: string;
  accessibilityRole?: 'button';
  /**
   * A sibling pan gesture (e.g. the dua reading screen's swipe-to-navigate)
   * that this card's own tap must recognize alongside rather than block.
   * Without this, a card that sits inside a GestureDetector's subtree can
   * "win" the touch on press-down and starve the pan gesture of the move
   * events it needs to ever activate - the exact bug behind swiping over a
   * tappable dua card doing nothing. Uses react-native-gesture-handler's
   * own Pressable (not React Native's) for the same reason: two different
   * touch-handling systems in the same view tree don't arbitrate a shared
   * touch correctly.
   */
  simultaneousWithExternalGesture?: PanGesture;
}

/** The app's one card surface: dark tonal navy, rounded, thin cyan-tinted border, soft depth shadow. Pressable when `onPress` is given, with restrained native press feedback. */
export default function SurfaceCard({
  children,
  onPress,
  padded = true,
  elevated = false,
  style,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
  simultaneousWithExternalGesture,
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
        accessibilityHint={accessibilityHint}
        hitSlop={4}
        simultaneousWithExternalGesture={simultaneousWithExternalGesture}
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
