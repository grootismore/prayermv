import { useEffect, useRef } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import Text from './Text';
import Svg, { Circle, Rect, Path, Line, Defs, LinearGradient, RadialGradient, Stop } from 'react-native-svg';

import { shadow, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';

interface Props {
  /** Degrees to rotate the arrow, or null while heading/bearing aren't known yet. */
  rotation: number | null;
  /** Turns the ring/arrow ochre once the phone is pointed at the Qibla. */
  aligned?: boolean;
  size?: number;
}

const CARDINAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);
const CARDINAL_LABELS: Record<number, string> = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' };

/**
 * The compass face: a static ring with a fixed Kaaba marker at the top and
 * gold tick marks (plus N/E/S/W labels) at the eight cardinal/intercardinal
 * points, and an arrow that rotates to point at the Qibla. "Static" here
 * means the ring itself never rotates - only the arrow does, driven by
 * `rotation` (qiblaBearing - heading) - so "N" at the top is a fixed visual
 * reference, not a live compass rose. That matches the app's instruction
 * text: hold the phone flat and turn until the arrow points up: at that
 * moment the phone itself is facing the Qibla.
 */
export default function QiblaCompass({ rotation, aligned = false, size = 240 }: Props) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const spin = useRef(new Animated.Value(rotation ?? 0)).current;

  useEffect(() => {
    if (rotation == null) return;
    // Linear, not eased: `rotation` already arrives pre-smoothed (see
    // useCompassHeading's exponential moving average) and updates faster
    // than this tween's duration, so each new reading restarts the
    // animation from wherever the last one got to. An ease-out curve
    // decelerates hard toward the end of every one of those short hops,
    // which - restarted every ~100ms - reads as a stutter-step rather than
    // a continuous sweep. A constant-speed tween blends into the next
    // restart smoothly instead.
    Animated.timing(spin, {
      toValue: rotation,
      duration: 120,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [rotation, spin]);

  const center = size / 2;
  const ringRadius = center - 8;
  const labelRadius = ringRadius - 34;
  // Sits just below the N label (same labelRadius geometry the cardinal
  // labels use) and above the arrow's tip when it's pointing straight up,
  // so the badge never overlaps either.
  const badgeTop = center - labelRadius + 13;

  return (
    <View
      style={[styles.container, { width: size, height: size }]}
      accessibilityRole="image"
      accessibilityLabel={
        rotation == null
          ? 'Qibla compass, waiting for a heading reading'
          : aligned
            ? 'Qibla compass, aligned with the Qibla'
            : 'Qibla compass, rotate your phone until the arrow points up'
      }
    >
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          <RadialGradient id="dial" cx="50%" cy="42%" r="65%">
            <Stop offset="0%" stopColor={colors.surfaceElevated} />
            <Stop offset="100%" stopColor={colors.surface} />
          </RadialGradient>
        </Defs>
        {/* A soft halo that lights up when the phone is pointing at the Qibla. */}
        {aligned ? (
          <Circle cx={center} cy={center} r={ringRadius + 3} fill="none" stroke={colors.fill} strokeWidth={8} opacity={0.35} />
        ) : null}
        <Circle cx={center} cy={center} r={ringRadius} fill="url(#dial)" />
        <Circle
          cx={center}
          cy={center}
          r={ringRadius}
          fill="none"
          stroke={aligned ? colors.fill : colors.primary}
          strokeWidth={aligned ? 4 : 3}
        />
        {/* 72 fine ticks every 5 degrees, a longer one every 30, the cardinals in the accent. */}
        {TICKS.map((angle) => {
          const cardinal = angle % 90 === 0;
          const major = angle % 30 === 0;
          return (
            <Rect
              key={angle}
              x={center - (cardinal ? 1.5 : 0.75)}
              y={13}
              width={cardinal ? 3 : 1.5}
              height={cardinal ? 13 : major ? 9 : 4}
              rx={0.75}
              fill={cardinal ? colors.primary : colors.textMuted}
              opacity={cardinal ? 1 : major ? 0.7 : 0.35}
              rotation={angle}
              origin={`${center}, ${center}`}
            />
          );
        })}
        <Circle cx={center} cy={center} r={ringRadius - 52} fill="none" stroke={colors.separator} strokeWidth={1} />
      </Svg>

      {CARDINAL_ANGLES.filter((angle) => CARDINAL_LABELS[angle]).map((angle) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const x = center + labelRadius * Math.cos(rad);
        const y = center + labelRadius * Math.sin(rad);
        return (
          <Text
            key={angle}
            style={[styles.cardinalLabel, angle === 0 && styles.cardinalNorth, { left: x - 10, top: y - 9 }]}
            accessibilityElementsHidden
          >
            {CARDINAL_LABELS[angle]}
          </Text>
        );
      })}

      <View style={[styles.kaabaBadge, { top: badgeTop }]}>
        <KaabaMarker size={14} />
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
          <QiblaArrow size={size * 0.4} aligned={aligned} />
        </Animated.View>
      ) : null}
    </View>
  );
}

/** A small, respectful stylized Kaaba marker - a dark cube with a thin gold kiswah band - not a literal icon. */
function KaabaMarker({ size }: { size: number }) {
  const { colors } = useTheme();
  const band = size * 0.32;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Rect x={size * 0.08} y={size * 0.08} width={size * 0.84} height={size * 0.84} rx={2} fill={colors.backgroundDeep} />
      <Rect x={size * 0.08} y={band} width={size * 0.84} height={size * 0.14} fill={colors.gold} />
    </Svg>
  );
}

function QiblaArrow({ size, aligned }: { size: number; aligned: boolean }) {
  const { colors } = useTheme();
  const cx = size / 2;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Defs>
        <LinearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor={aligned ? colors.fill : colors.primary} />
          <Stop offset="100%" stopColor={aligned ? colors.primary : colors.primaryMuted} />
        </LinearGradient>
      </Defs>
      <Path
        d={`M ${cx} ${size * 0.08}
            L ${size * 0.62} ${size * 0.58}
            L ${cx} ${size * 0.46}
            L ${size * 0.38} ${size * 0.58}
            Z`}
        fill="url(#arrowGradient)"
        strokeLinejoin="round"
      />
      <Line x1={cx} y1={size * 0.46} x2={cx} y2={size * 0.86} stroke={colors.textMuted} strokeWidth={2} strokeLinecap="round" opacity={0.4} />
      <Circle cx={cx} cy={size * 0.46} r={size * 0.07} fill={colors.surfaceElevated} stroke={aligned ? colors.fill : colors.primary} strokeWidth={2} />
    </Svg>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 999,
      ...shadow.floating,
    },
    cardinalLabel: {
      position: 'absolute',
      width: 20,
      textAlign: 'center',
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
      color: colors.textPrimary,
    },
    cardinalNorth: { color: colors.primary },
    kaabaBadge: {
      position: 'absolute',
      width: 22,
      height: 22,
      borderRadius: 7,
      backgroundColor: colors.surfaceElevated,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    arrowLayer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
