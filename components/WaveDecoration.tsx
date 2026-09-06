import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../lib/useTheme';

interface Props {
  /** 'header' - a taller, multi-layer wave for screen backgrounds. 'card' - a single thin wave for the bottom edge of a card. */
  variant?: 'header' | 'card';
  color?: string;
}

/**
 * Purely decorative background flourish (absolute-positioned, non-interactive,
 * ignored by screen readers) - a stylized ocean-wave silhouette used behind
 * screen headers and along the bottom edge of hero cards. Never used to
 * carry content, so it's safe to skip on smaller devices without losing
 * information.
 */
export default function WaveDecoration({ variant = 'header', color }: Props) {
  const { colors } = useTheme();
  const resolvedColor = color ?? colors.primary;

  if (variant === 'card') {
    return (
      <View style={styles.cardWrap} pointerEvents="none">
        <Svg width="100%" height={40} viewBox="0 0 400 40" preserveAspectRatio="none">
          <Path
            d="M0,26 C50,8 100,8 150,20 C200,32 250,32 300,18 C340,8 370,10 400,20 L400,40 L0,40 Z"
            fill={resolvedColor}
            opacity={0.08}
          />
          <Path
            d="M0,30 C60,16 120,16 180,26 C230,34 280,30 340,20 C365,15 385,16 400,22 L400,40 L0,40 Z"
            fill={resolvedColor}
            opacity={0.06}
          />
        </Svg>
      </View>
    );
  }

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="xMidYMin slice">
        <Path
          d="M0,120 C60,90 120,150 180,120 C240,90 300,150 360,120 C380,110 390,108 400,110 L400,0 L0,0 Z"
          fill={resolvedColor}
          opacity={0.05}
        />
        <Path
          d="M0,150 C70,180 130,120 200,150 C260,175 320,130 400,155 L400,0 L0,0 Z"
          fill={resolvedColor}
          opacity={0.04}
        />
        <Path
          d="M0,190 C80,170 160,210 240,185 C300,166 350,190 400,180 L400,220 L0,220 Z"
          fill={resolvedColor}
          opacity={0.07}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
