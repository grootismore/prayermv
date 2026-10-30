import { TextInput as RNTextInput, type TextInputProps } from 'react-native';
import { useTranslation } from 'react-i18next';

import { withThaanaFont } from '../lib/thaanaFont';

/** The app's TextInput: React Native's, plus the Thaana face for typed text and placeholders when the language is Dhivehi. */
export default function TextInput({ style, ...rest }: TextInputProps) {
  const { i18n } = useTranslation();
  return <RNTextInput {...rest} style={i18n.language === 'dv' ? withThaanaFont(style) : style} />;
}
