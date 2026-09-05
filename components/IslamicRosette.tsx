import Svg, { Circle, Rect } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

/**
 * A fuller Islamic geometric medallion than GeometricStar: a thin outlined
 * 8-point star ring around a smaller filled one, plus a center dot -
 * mirrors the app's splash-icon motif at badge scale for hero-card
 * accents (Home's next-prayer card, Hijri's today card, the Qibla dial).
 */
export default function IslamicRosette({ size = 28, color = '#F3E6C4' }: Props) {
  const center = size / 2;
  const outerInset = size * 0.06;
  const outerSide = size - outerInset * 2;
  const innerInset = size * 0.26;
  const innerSide = size - innerInset * 2;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Rect
        x={outerInset}
        y={outerInset}
        width={outerSide}
        height={outerSide}
        fill="none"
        stroke={color}
        strokeWidth={size * 0.035}
        opacity={0.55}
      />
      <Rect
        x={outerInset}
        y={outerInset}
        width={outerSide}
        height={outerSide}
        fill="none"
        stroke={color}
        strokeWidth={size * 0.035}
        opacity={0.55}
        rotation={45}
        origin={`${center}, ${center}`}
      />
      <Rect x={innerInset} y={innerInset} width={innerSide} height={innerSide} fill={color} />
      <Rect
        x={innerInset}
        y={innerInset}
        width={innerSide}
        height={innerSide}
        fill={color}
        rotation={45}
        origin={`${center}, ${center}`}
      />
      <Circle cx={center} cy={center} r={size * 0.09} fill="#03291D" opacity={0.85} />
    </Svg>
  );
}
