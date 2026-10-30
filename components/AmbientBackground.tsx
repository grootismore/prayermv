import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

import { useTheme } from '../lib/useTheme';

/**
 * The ambient screen ground: a vertical forest/mint gradient with one soft
 * radial glow at the top; `tone` tints that glow (Home shifts it with the
 * time of day). It's what the glass cards refract, so it carries
 * the screen's mood while staying quiet behind content. Static, so it costs
 * nothing per frame.
 */
export default function AmbientBackground({ tone }: { tone?: string }) {
  const { colors, scheme } = useTheme();
  const glow = tone ?? (scheme === 'dark' ? '#4EF08F' : '#7BE3A9');
  return (
    <>
      <LinearGradient colors={[colors.bgFrom, colors.bgTo]} style={StyleSheet.absoluteFill} />
      <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          <RadialGradient id="ambientGlow" cx="18%" cy="0%" rx="85%" ry="45%" fx="18%" fy="0%">
            <Stop offset="0%" stopColor={glow} stopOpacity={scheme === 'dark' ? 0.28 : 0.5} />
            <Stop offset="100%" stopColor={glow} stopOpacity={0} />
          </RadialGradient>
          {/* A second, cooler glow low on the opposite side gives the ground depth. */}
          <RadialGradient id="ambientGlow2" cx="95%" cy="100%" rx="80%" ry="40%" fx="95%" fy="100%">
            <Stop offset="0%" stopColor={colors.primary} stopOpacity={scheme === 'dark' ? 0.14 : 0.2} />
            <Stop offset="100%" stopColor={colors.primary} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#ambientGlow2)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#ambientGlow)" />
      </Svg>
    </>
  );
}
