import { useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';
import Svg, { Defs, Path, Pattern, Rect } from 'react-native-svg';

interface Props {
  color: string;
  opacity?: number;
}

/**
 * A quiet field of eight-pointed stars (two overlapping squares, the
 * classic khatam) - the one piece of Islamic geometry in the app, used
 * only inside the mint hero cards and always faint enough to read as
 * texture. Drawn as an SVG pattern, so it's resolution-independent and
 * costs nothing per frame. Sized from the measured card rather than with
 * percentages, which left the pattern partly or wholly undrawn.
 */
export default function StarPattern({ color, opacity = 0.08 }: Props) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const onLayout = (e: LayoutChangeEvent) =>
    setSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none" onLayout={onLayout}>
      {size.width > 0 ? (
        <Svg width={size.width} height={size.height}>
          <Defs>
            <Pattern id="khatam" patternUnits="userSpaceOnUse" x={0} y={0} width={40} height={40}>
              <Path d="M8 8 H32 V32 H8 Z M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke={color} strokeWidth={1} />
            </Pattern>
          </Defs>
          <Rect x={0} y={0} width={size.width} height={size.height} fill="url(#khatam)" opacity={opacity} />
        </Svg>
      ) : null}
    </View>
  );
}
