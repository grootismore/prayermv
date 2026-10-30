import { Text as RNText, type TextProps } from 'react-native';
import { useTranslation } from 'react-i18next';

import { withThaanaFont } from '../lib/thaanaFont';

/** The app's Text: React Native's, plus the Thaana face when the language is Dhivehi. Import this instead of Text from 'react-native'. */
export default function Text({ style, ...rest }: TextProps) {
  const { i18n } = useTranslation();
  return <RNText {...rest} style={i18n.language === 'dv' ? withThaanaFont(style) : style} />;
}
