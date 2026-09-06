import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { radius, shadow, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import { registerToastListener } from '../lib/toast';

const VISIBLE_MS = 2000;
const ANIM_MS = 220;

/**
 * The iOS/web renderer for lib/toast.ts's showToast() - Android uses the
 * real ToastAndroid API directly instead and never reaches this. Mounted
 * once near the app root (see app/_layout.tsx) so any screen can trigger
 * a toast via showToast() without needing this in its own tree.
 *
 * A new toast replaces whatever's currently showing (resetting the
 * dismiss timer) rather than queuing - settings changes fire one at a
 * time in practice, and replacing avoids having to manage overlapping
 * enter/exit animations for something this minor.
 */
export default function ToastHost() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const [message, setMessage] = useState<string | null>(null);
  const progress = useRef(new Animated.Value(0)).current;
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    registerToastListener((next) => {
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
      setMessage(next);
      progress.setValue(0);
      Animated.timing(progress, { toValue: 1, duration: ANIM_MS, useNativeDriver: true }).start();
      dismissTimer.current = setTimeout(() => {
        Animated.timing(progress, { toValue: 0, duration: ANIM_MS, useNativeDriver: true }).start(() => {
          setMessage(null);
        });
      }, VISIBLE_MS);
    });
    return () => {
      registerToastListener(null);
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, [progress]);

  if (!message) return null;

  return (
    <Animated.View
      pointerEvents="none"
      accessibilityLiveRegion="polite"
      style={[
        styles.wrap,
        {
          top: insets.top + spacing.sm,
          opacity: progress,
          transform: [{ translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [-16, 0] }) }],
        },
      ]}
    >
      <Ionicons name="checkmark-circle" size={16} color={colors.primary} style={styles.icon} />
      <Text style={styles.text} numberOfLines={2}>
        {message}
      </Text>
    </Animated.View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wrap: {
      position: 'absolute',
      left: spacing.lg,
      right: spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.surfaceElevated,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: radius.pill,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      ...shadow.floating,
    },
    icon: {
      marginRight: spacing.xs,
    },
    text: {
      flexShrink: 1,
      color: colors.textPrimary,
      fontSize: typography.size.sm,
      fontWeight: typography.weight.semibold,
      textAlign: 'center',
    },
  });
