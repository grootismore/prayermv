import { Platform, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';

type IoniconName = keyof typeof Ionicons.glyphMap;
type SFName = Extract<SymbolViewProps['name'], string>;

// Every Ionicons glyph the app uses, paired with its SF Symbol. iOS draws the
// SF Symbol (baseline-aligned, weight-matched, what a native app shows);
// Android keeps Ionicons. Unmapped names fall back to Ionicons everywhere.
const SF: Partial<Record<IoniconName, SFName>> = {
  'chevron-forward': 'chevron.right',
  'chevron-back': 'chevron.left',
  search: 'magnifyingglass',
  repeat: 'repeat',
  'arrow-forward': 'arrow.right',
  heart: 'heart.fill',
  'heart-outline': 'heart',
  'share-outline': 'square.and.arrow.up',
  'moon-outline': 'moon',
  'sunny-outline': 'sun.max',
  remove: 'minus',
  add: 'plus',
  'close-circle': 'xmark.circle.fill',
  'checkmark-circle': 'checkmark.circle.fill',
  checkmark: 'checkmark',
  'return-down-back': 'arrow.uturn.backward',
  'time-outline': 'clock',
  'compass-outline': 'safari',
  'calendar-outline': 'calendar',
  notifications: 'bell.fill',
  'notifications-outline': 'bell',
};

interface Props {
  name: IoniconName;
  size?: number;
  color: string;
  /** Overrides the mapped SF Symbol (e.g. a specific sunrise glyph) while Android keeps `name`. */
  sf?: SFName;
  style?: StyleProp<TextStyle & ViewStyle>;
}

/** One icon API for the whole app: SF Symbols on iOS, Ionicons on Android. */
export default function Icon({ name, size = 20, color, sf, style }: Props) {
  const symbol = sf ?? SF[name];
  if (Platform.OS === 'ios' && symbol) {
    return (
      <SymbolView
        name={symbol}
        size={size}
        tintColor={color}
        weight="semibold"
        resizeMode="scaleAspectFit"
        style={[{ width: size, height: size }, style as StyleProp<ViewStyle>]}
        fallback={<Ionicons name={name} size={size} color={color} style={style as StyleProp<TextStyle>} />}
      />
    );
  }
  return <Ionicons name={name} size={size} color={color} style={style as StyleProp<TextStyle>} />;
}
