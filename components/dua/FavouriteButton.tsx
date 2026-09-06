import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { minTouchTarget } from '../../lib/theme';
import { useTheme } from '../../lib/useTheme';

interface Props {
  isFavourite: boolean;
  onToggle: () => void;
  addLabel: string;
  removeLabel: string;
}

/** A heart toggle for favouriting a dua - the accessibility label itself changes with state (not just the icon), so screen readers never depend on the icon shape alone. */
export default function FavouriteButton({ isFavourite, onToggle, addLabel, removeLabel }: Props) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onToggle}
      style={styles.button}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={isFavourite ? removeLabel : addLabel}
      accessibilityState={{ selected: isFavourite }}
    >
      <Ionicons
        name={isFavourite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavourite ? colors.gold : colors.textSecondary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: minTouchTarget,
    height: minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
