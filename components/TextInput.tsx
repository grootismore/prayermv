import { TextInput as RNTextInput, type TextInputProps } from 'react-native';

import { withScriptFont } from '../lib/scriptFont';

/** The app's TextInput: React Native's, plus the Dhivehi or Arabic face for typed text and placeholders written in Thaana or Arabic. */
export default function TextInput({ style, ...rest }: TextInputProps) {
  const text = `${rest.value ?? rest.defaultValue ?? ''}${rest.placeholder ?? ''}`;
  return <RNTextInput {...rest} style={withScriptFont(style, text)} />;
}
