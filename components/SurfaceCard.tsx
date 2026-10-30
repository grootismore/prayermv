import { useRef, type ReactNode } from 'react';
import { Animated, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { Pressable, type PanGesture } from 'react-native-gesture-handler';

import { cardPadding, minTouchTarget, radius, shadow } from '../lib/theme';
import { useTheme } from '../lib/useTheme';
import GlassSurface from './GlassSurface';

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

// The card is a wrapper (shadow, press scale) around the glass surface, so
// whatever positions the card in its parent has to live on the wrapper.
const OUTER_KEYS = new Set([
  'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'alignSelf', 'width', 'maxWidth', 'minWidth',
  'position', 'top', 'left', 'right', 'bottom', 'zIndex',
  'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'marginHorizontal', 'marginVertical',
  'marginStart', 'marginEnd',
]);

function splitStyle(style: StyleProp<ViewStyle>): [ViewStyle, ViewStyle] {
  const outer: Record<string, unknown> = {};
  const inner: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(StyleSheet.flatten(style) ?? {})) {
    (OUTER_KEYS.has(key) ? outer : inner)[key] = value;
  }
  return [outer as ViewStyle, inner as ViewStyle];
}

/** The app's one card surface: platform glass (see GlassSurface), generously rounded. Pressable when `onPress` is given, sinking slightly while held. */
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
  const { colors } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;
  const sink = (to: number) =>
    Animated.spring(scale, { toValue: to, useNativeDriver: true, speed: 40, bounciness: 0 }).start();

  const [outerStyle, innerStyle] = splitStyle(style);
  const surface = (
    <GlassSurface radius={radius.lg} elevated={elevated} style={[styles.card, padded && styles.padded, innerStyle]}>
      {children}
    </GlassSurface>
  );

  if (onPress) {
    return (
      <Animated.View style={[{ transform: [{ scale }] }, shadow.card, outerStyle]}>
        <Pressable
          onPress={onPress}
          onPressIn={() => sink(0.98)}
          onPressOut={() => sink(1)}
          accessibilityRole={accessibilityRole ?? 'button'}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          hitSlop={4}
          simultaneousWithExternalGesture={simultaneousWithExternalGesture}
        >
          {surface}
        </Pressable>
      </Animated.View>
    );
  }

  return (
    <View
      style={[shadow.card, outerStyle]}
      accessible={!!accessibilityLabel}
      accessibilityLabel={accessibilityLabel}
    >
      {surface}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { minHeight: minTouchTarget },
  padded: { padding: cardPadding },
});
