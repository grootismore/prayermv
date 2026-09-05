import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

import { colors } from '../lib/theme';

interface Props {
  size?: number;
}

/**
 * The small golden "sun" accent used sparingly - Home/Calendar headers and
 * hero cards - never as a dominant element. A soft radial glow behind a
 * solid disc, built from SVG gradients rather than a blur filter (RN has no
 * cheap native blur), so it stays lightweight to render.
 */
export default function SunAccent({ size = 36 }: Props) {
  const id = 'noorSunGlow';
  return (
    <Svg width={size * 2.2} height={size * 2.2} viewBox={`0 0 ${size * 2.2} ${size * 2.2}`}>
      <Defs>
        <RadialGradient id={id} cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={colors.gold} stopOpacity={0.55} />
          <Stop offset="100%" stopColor={colors.gold} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={size * 1.1} cy={size * 1.1} r={size * 1.1} fill={`url(#${id})`} />
      <Circle cx={size * 1.1} cy={size * 1.1} r={size * 0.42} fill={colors.gold} />
    </Svg>
  );
}
