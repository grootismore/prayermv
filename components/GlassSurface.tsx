import { useEffect, useState, type ReactNode } from 'react';
import { AccessibilityInfo, Platform, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { GlassView, isGlassEffectAPIAvailable, isLiquidGlassAvailable } from 'expo-glass-effect';

import { useTheme } from '../lib/useTheme';

interface Props {
  children?: ReactNode;
  radius: number;
  /** A slightly more opaque surface, for the card that should sit above its neighbours. */
  elevated?: boolean;
  style?: StyleProp<ViewStyle>;
}

/** iOS "Reduce Transparency": real glass is swapped for a solid surface. */
function useReduceTransparency(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'ios') return;
    let mounted = true;
    AccessibilityInfo.isReduceTransparencyEnabled().then((v) => mounted && setReduce(v));
    const sub = AccessibilityInfo.addEventListener('reduceTransparencyChanged', setReduce);
    return () => {
      mounted = false;
      sub.remove();
    };
  }, []);
  return reduce;
}

const LIQUID = Platform.OS === 'ios' && isLiquidGlassAvailable() && isGlassEffectAPIAvailable();

/**
 * One material for every card, matched to the platform: iOS 26 gets native
 * liquid glass, older iOS gets a system blur, Android gets a tonal opaque
 * surface (Material doesn't do glass), and Reduce Transparency gets solid
 * everywhere. No hand-rolled glassmorphism: each branch is the system's own.
 */
export default function GlassSurface({ children, radius, elevated = false, style }: Props) {
  const { colors, scheme } = useTheme();
  const reduce = useReduceTransparency();
  const shape = { borderRadius: radius, overflow: 'hidden' as const };
  const solid = elevated ? colors.surfaceElevated : colors.surface;

  if (Platform.OS === 'ios' && !reduce && LIQUID) {
    return (
      <GlassView glassEffectStyle="regular" colorScheme={scheme} style={[shape, style]}>
        {children}
      </GlassView>
    );
  }

  if (Platform.OS === 'ios' && !reduce) {
    return (
      <BlurView
        intensity={elevated ? 60 : 40}
        tint={scheme === 'dark' ? 'systemChromeMaterialDark' : 'systemChromeMaterialLight'}
        style={[shape, styles.edge, { borderColor: colors.border, backgroundColor: colors.glassFill }, style]}
      >
        {children}
      </BlurView>
    );
  }

  return (
    <View style={[shape, styles.edge, { borderColor: colors.border, backgroundColor: solid }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  edge: { borderWidth: StyleSheet.hairlineWidth },
});
