import { View } from 'react-native';
import type { ComponentProps } from 'react';

import Icon from './Icon';

type IconSpec = Pick<ComponentProps<typeof Icon>, 'name' | 'sf'>;

interface Props {
  icon: IconSpec;
  /** A 7-character hex colour: the glyph's colour, and (at low opacity) the tile's fill. */
  tint: string;
  size?: number;
}

/** The rounded, tinted square that leads a settings-style row - the same treatment iOS Settings uses, in the app's own colours. */
export default function IconTile({ icon, tint, size = 32 }: Props) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.3,
        backgroundColor: `${tint}2B`,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon {...icon} size={Math.round(size * 0.56)} color={tint} />
    </View>
  );
}
