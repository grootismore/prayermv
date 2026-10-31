import { Text as RNText, type TextProps } from 'react-native';

import { textOf, withScriptFont } from '../lib/scriptFont';

/** The app's Text: React Native's, plus the Dhivehi or Arabic face when the text itself is written in Thaana or Arabic. Import this instead of Text from 'react-native'. */
export default function Text({ style, children, ...rest }: TextProps) {
  return (
    <RNText {...rest} style={withScriptFont(style, textOf(children))}>
      {children}
    </RNText>
  );
}
