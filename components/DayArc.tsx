import { useState } from 'react';
import { View, type LayoutChangeEvent } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

interface Props {
  /** Where each of the day's prayers falls, 0 (first) to 1 (last), as a fraction of the span. */
  marks: number[];
  /** Where now falls on the same scale, clamped to 0..1. */
  progress: number;
  color: string;
  height?: number;
}

const STEPS = 48;

/**
 * The day as the sun's path: a shallow arc from the first prayer to the
 * last, a dot at each prayer, and the sun where the day is now. The part
 * already travelled is solid, the part ahead faint - so the hero shows
 * where you are in the day, not just the gap to the next prayer.
 */
export default function DayArc({ marks, progress, color, height = 44 }: Props) {
  const [width, setWidth] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);

  const base = height - 8;
  const rise = height - 18;
  const p = Math.min(1, Math.max(0, progress));
  const xAt = (t: number) => 6 + t * (width - 12);
  const yAt = (t: number) => base - rise * 4 * t * (1 - t);
  const path = (from: number, to: number) => {
    const n = Math.max(2, Math.ceil((to - from) * STEPS));
    let d = '';
    for (let i = 0; i <= n; i++) {
      const t = from + ((to - from) * i) / n;
      d += `${i === 0 ? 'M' : 'L'}${xAt(t).toFixed(1)} ${yAt(t).toFixed(1)} `;
    }
    return d;
  };

  return (
    <View onLayout={onLayout} style={{ height }} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {width > 0 ? (
        <Svg width={width} height={height}>
          <Path d={path(0, 1)} stroke={color} strokeOpacity={0.22} strokeWidth={2} strokeLinecap="round" fill="none" />
          {p > 0 ? <Path d={path(0, p)} stroke={color} strokeWidth={2.5} strokeLinecap="round" fill="none" /> : null}
          {marks.map((t, i) => (
            <Circle key={i} cx={xAt(t)} cy={yAt(t)} r={2.5} fill={color} fillOpacity={t <= p ? 1 : 0.35} />
          ))}
          <Circle cx={xAt(p)} cy={yAt(p)} r={9} fill={color} fillOpacity={0.18} />
          <Circle cx={xAt(p)} cy={yAt(p)} r={5.5} fill={color} />
        </Svg>
      ) : null}
    </View>
  );
}
