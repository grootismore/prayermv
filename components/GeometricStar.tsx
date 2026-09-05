import Svg, { Rect } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  opacity?: number;
}

/**
 * An 8-point star (two squares, one rotated 45deg over the other) - a
 * classic Islamic geometric motif, used as a small decorative accent.
 */
export default function GeometricStar({ size = 16, color = '#C79A2E', opacity = 1 }: Props) {
  const inset = size * 0.18;
  const side = size - inset * 2;
  const center = size / 2;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Rect x={inset} y={inset} width={side} height={side} fill={color} opacity={opacity} />
      <Rect
        x={inset}
        y={inset}
        width={side}
        height={side}
        fill={color}
        opacity={opacity}
        rotation={45}
        origin={`${center}, ${center}`}
      />
    </Svg>
  );
}
