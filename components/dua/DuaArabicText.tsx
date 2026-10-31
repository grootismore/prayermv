import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import Text from '../Text';

import type { DuaArabicFontSize } from '../../types/dua';
import { ARABIC_FAMILY } from '../../lib/scriptFont';
import type { ThemeColors } from '../../lib/theme';
import { useThemedStyles } from '../../lib/useTheme';

interface Props {
  text: string;
  fontSize?: DuaArabicFontSize;
  align?: 'right' | 'center';
  style?: StyleProp<TextStyle>;
}

const FONT_SIZES: Record<DuaArabicFontSize, number> = {
  small: 20,
  medium: 26,
  large: 32,
};

/**
 * Renders dua/dhikr Arabic text in KFGQPC Douri Uthmanic Script (loaded
 * behind the splash screen - see lib/scriptFont.ts) with full harakat,
 * right-to-left direction, a generous line height so diacritics are never
 * clipped, and selectable text. Never uses the Latin numeral face, which
 * has no Arabic glyphs.
 */
export default function DuaArabicText({ text, fontSize = 'medium', align = 'right', style }: Props) {
  const styles = useThemedStyles(createStyles);
  const size = FONT_SIZES[fontSize];

  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: size,
          lineHeight: size * 1.9,
          textAlign: align,
          writingDirection: 'rtl' as const,
          fontFamily: ARABIC_FAMILY,
        },
        style,
      ]}
      selectable
    >
      {text}
    </Text>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    text: {
      color: colors.textPrimary,
    },
  });
