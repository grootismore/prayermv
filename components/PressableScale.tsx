import { useRef, type ReactNode } from 'react';
import { Animated, Pressable, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

interface Props extends Omit<PressableProps, 'style' | 'children'> {
  children: ReactNode;
  /** Outer (animated) wrapper style - margins, flex. */
  style?: StyleProp<ViewStyle>;
  /** The pressable's own style - the button's fill, radius, padding. */
  contentStyle?: StyleProp<ViewStyle>;
  /** How far it sinks on press. 0.97 reads as responsive without looking like a bounce. */
  pressedScale?: number;
}

/** A Pressable that springs down slightly while held and back on release - the press feedback native buttons give. */
export default function PressableScale({ children, style, contentStyle, pressedScale = 0.97, onPressIn, onPressOut, ...rest }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const to = (value: number) =>
    Animated.spring(scale, { toValue: value, useNativeDriver: true, speed: 40, bounciness: 0 }).start();
  return (
    <Animated.View style={[{ transform: [{ scale }] }, style]}>
      <Pressable
        {...rest}
        style={contentStyle}
        onPressIn={(e) => {
          to(pressedScale);
          onPressIn?.(e);
        }}
        onPressOut={(e) => {
          to(1);
          onPressOut?.(e);
        }}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}
