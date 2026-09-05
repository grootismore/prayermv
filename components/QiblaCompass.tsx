import { useEffect, useRef } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

import { colors } from '../lib/theme';
import GeometricStar from './GeometricStar';

interface Props {
  /** Degrees to rotate the arrow, or null while heading/bearing aren't known yet. */
  rotation: number | null;
  size?: number;
}

const CARDINAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

/**
 * The compass face: a static ornamental ring with gold tick marks at the
 * eight cardinal/intercardinal points, and an arrow that rotates to point
 * at the Qibla. The arrow is a hand-drawn SVG kite shape (guaranteed to
 * point straight up at rotation 0) rather than a stock icon glyph, whose
 * own default orientation isn't something we control.
 */
export default function QiblaCompass({ rotation, size = 220 }: Props) {
  const spin = useRef(new Animated.Value(rotation ?? 0)).current;

  useEffect(() => {
    if (rotation == null) return;
    Animated.timing(spin, {
      toValue: rotation,
      duration: 150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [rotation, spin]);

  const center = size / 2;
  const ringRadius = center - 6;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle cx={center} cy={center} r={ringRadius} fill={colors.card} stroke={colors.border} strokeWidth={2} />
        <Circle
          cx={center}
          cy={center}
          r={ringRadius - 10}
          fill="none"
          stroke={colors.goldLight}
          strokeWidth={1.5}
        />
        {CARDINAL_ANGLES.map((angle) => (
          <Rect
            key={angle}
            x={center - 1.5}
            y={6}
            width={3}
            height={angle % 90 === 0 ? 14 : 8}
            fill={colors.gold}
            opacity={angle % 90 === 0 ? 1 : 0.6}
            rotation={angle}
            origin={`${center}, ${center}`}
          />
        ))}
      </Svg>

      <View style={styles.starBadge}>
        <GeometricStar size={22} color={colors.goldLight} />
      </View>

      {rotation != null ? (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            styles.arrowLayer,
            {
              transform: [
                {
                  rotate: spin.interpolate({
                    inputRange: [-720, 720],
                    outputRange: ['-720deg', '720deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <QiblaArrow size={size * 0.5} />
        </Animated.View>
      ) : null}
    </View>
  );
}

function QiblaArrow({ size }: { size: number }) {
  const cx = size / 2;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Path
        d={`M ${cx} ${size * 0.06}
            L ${size * 0.66} ${size * 0.6}
            L ${cx} ${size * 0.46}
            L ${size * 0.34} ${size * 0.6}
            Z`}
        fill={colors.primary}
        stroke={colors.primaryDark}
        strokeWidth={1}
        strokeLinejoin="round"
      />
      <Circle cx={cx} cy={size * 0.46} r={size * 0.045} fill={colors.gold} />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  starBadge: {
    position: 'absolute',
    top: 14,
  },
  arrowLayer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
