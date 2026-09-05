import Svg, { Rect } from 'react-native-svg';
import { StyleSheet } from 'react-native';

interface StarSpec {
  x: number; // 0-100, position within a fixed viewBox
  y: number; // 0-100
  size: number; // in the same 0-100 viewBox units
  opacity: number;
}

// Fixed, hand-placed positions rather than random - keeps the pattern
// identical across renders/platforms and avoids awkward clustering.
const STARS: StarSpec[] = [
  { x: 8, y: 14, size: 8, opacity: 0.12 },
  { x: 88, y: 10, size: 6, opacity: 0.1 },
  { x: 92, y: 62, size: 9, opacity: 0.1 },
  { x: 5, y: 70, size: 6, opacity: 0.09 },
  { x: 78, y: 88, size: 5, opacity: 0.08 },
  { x: 16, y: 92, size: 5, opacity: 0.08 },
  { x: 50, y: 6, size: 4, opacity: 0.07 },
];

/**
 * A scattering of small Islamic geometric stars used as a subtle texture
 * behind hero cards. Uses a fixed 0-100 viewBox (stretched to fill via
 * preserveAspectRatio="none") so every coordinate - including the rotation
 * origin for the second, 45deg-rotated square each star is built from - is
 * a plain number in the same space, rather than mixing percentage strings
 * with rotation math.
 */
export default function StarField({ color = '#FFFFFF' }: { color?: string }) {
  return (
    <Svg
      style={StyleSheet.absoluteFill}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      pointerEvents="none"
    >
      {STARS.map((star, i) => {
        const inset = star.size * 0.18;
        const side = star.size - inset * 2;
        const left = star.x - side / 2;
        const top = star.y - side / 2;
        return (
          <Rect
            key={i}
            x={left}
            y={top}
            width={side}
            height={side}
            fill={color}
            opacity={star.opacity}
            rotation={45}
            origin={`${star.x}, ${star.y}`}
          />
        );
      })}
    </Svg>
  );
}
