import Svg, { Circle, Defs, Path, RadialGradient, Stop } from 'react-native-svg';

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
 * A warm gold sun disc in dark mode ("Ocean Night") reads as a glimpse of
 * dawn breaking through the midnight navy. That same sun on the light
 * "Ocean Day" background isn't a glimpse of anything - the page is
 * already daylight - so it swaps to a cyan sparkle instead: the same
 * small diamond-twinkle glyph already sitting in the app's own icon/logo
 * mark, just given room to be its own accent here.
 */
export default function SunAccent({ size = 36 }: Props) {
  const { colors, scheme } = useTheme();
  const id = 'noorAccentGlow';
  const cx = size * 1.1;
  const cy = size * 1.1;
  const glowColor = scheme === 'light' ? colors.primary : colors.gold;

  return (
    <Svg width={size * 2.2} height={size * 2.2} viewBox={`0 0 ${size * 2.2} ${size * 2.2}`}>
      <Defs>
        <RadialGradient id={id} cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={glowColor} stopOpacity={0.55} />
          <Stop offset="100%" stopColor={glowColor} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={cx} cy={cy} r={size * 1.1} fill={`url(#${id})`} />
      {scheme === 'light' ? (
        <Path
          d={sparklePath(cx, cy, size * 0.52, size * 0.16)}
          fill={colors.primary}
        />
      ) : (
        <Circle cx={cx} cy={cy} r={size * 0.42} fill={colors.gold} />
      )}
    </Svg>
  );
}

/** A slender 4-point sparkle/twinkle, tips at radius `r`, pinched waist at `w`. */
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
