import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';

import type { DuaArabicFontSize } from '../../types/dua';
import { duaArabicFont, useDuaArabicFont } from '../../lib/useDuaArabicFont';
import type { ThemeColors } from '../../lib/theme';
import { useThemedStyles } from '../../lib/useTheme';

interface Props {
  text: string;
  fontSize?: DuaArabicFontSize;
  align?: 'right' | 'center';
  style?: StyleProp<TextStyle>;
}

const FONT_SIZES: Record<DuaArabicFontSize, number> = {
  small: 17,
  medium: 21,
  large: 26,
};

/**
 * Renders dua/dhikr Arabic text: Noto Naskh Arabic (once loaded - falls
 * back to the system font before then, same conditional-upgrade pattern
 * as lib/useNumeralFont.ts) with full harakat, right-to-left direction, a
 * generous line height so diacritics are never clipped, and selectable
 * text. Never uses Space Grotesk, which has no Arabic glyphs.
 */
export default function DuaArabicText({ text, fontSize = 'medium', align = 'right', style }: Props) {
  const arabicFontReady = useDuaArabicFont();
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
          fontFamily: arabicFontReady ? duaArabicFont.regular : undefined,
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
