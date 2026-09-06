import Svg, { Circle, Defs, Mask, Path, RadialGradient, Stop } from 'react-native-svg';

import { useTheme } from '../lib/useTheme';

interface Props {
  size?: number;
}

/**
 * The small decorative accent used sparingly - Home/Calendar headers and
 * hero cards - never as a dominant element. A soft radial glow behind a
 * solid glyph, built from SVG gradients rather than a blur filter (RN has
 * no cheap native blur), so it stays lightweight to render.
 *
 * Both glyphs are drawn as custom vector paths (never the literal ✨/🌙
 * Unicode characters, which would pull in emoji-font rendering the app
 * doesn't otherwise use): a crisp four-point twinkle with a small
 * companion sparkle for the light "Ocean Day" background, and a proper
 * crescent (an SVG mask cutting one circle out of another, not just a
 * flat disc) for dark "Ocean Night", reading as a glimpse of moonlight
 * against the midnight navy.
 */
export default function SunAccent({ size = 36 }: Props) {
  const { colors, scheme } = useTheme();
  const glowId = 'noorAccentGlow';
  const maskId = 'noorAccentMoonMask';
  const cx = size * 1.1;
  const cy = size * 1.1;
  const glowColor = scheme === 'light' ? colors.primary : colors.gold;

  const moonR = size * 0.44;
  const biteR = size * 0.38;
  const biteOffset = size * 0.22;

  return (
    <Svg width={size * 2.2} height={size * 2.2} viewBox={`0 0 ${size * 2.2} ${size * 2.2}`}>
      <Defs>
        <RadialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={glowColor} stopOpacity={0.55} />
          <Stop offset="100%" stopColor={glowColor} stopOpacity={0} />
        </RadialGradient>
        <Mask id={maskId}>
          <Circle cx={cx} cy={cy} r={moonR} fill="white" />
          <Circle cx={cx + biteOffset} cy={cy - biteOffset * 0.35} r={biteR} fill="black" />
        </Mask>
      </Defs>
      <Circle cx={cx} cy={cy} r={size * 1.1} fill={`url(#${glowId})`} />
      {scheme === 'light' ? (
        <>
          <Path d={sparklePath(cx, cy, size * 0.5, size * 0.09)} fill={colors.primary} />
          <Path
            d={sparklePath(cx + size * 0.62, cy + size * 0.5, size * 0.16, size * 0.035)}
            fill={colors.primary}
            opacity={0.8}
          />
        </>
      ) : (
        <Circle cx={cx} cy={cy} r={moonR} fill={colors.gold} mask={`url(#${maskId})`} />
      )}
    </Svg>
  );
}

/**
 * A crisp four-point twinkle - tips at radius `r`, pulled in sharply to a
 * narrow waist `w` so each point reads as its own spike (the classic
 * "sparkle" glyph shape) rather than the softer, more diamond-like curve
 * this used before.
 */
function sparklePath(cx: number, cy: number, r: number, w: number): string {
  return [
    `M ${cx} ${cy - r}`,
    `Q ${cx + w} ${cy - w} ${cx + r} ${cy}`,
    `Q ${cx + w} ${cy + w} ${cx} ${cy + r}`,
    `Q ${cx - w} ${cy + w} ${cx - r} ${cy}`,
    `Q ${cx - w} ${cy - w} ${cx} ${cy - r}`,
    'Z',
  ].join(' ');
}
