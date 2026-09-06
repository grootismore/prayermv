import { Platform, ToastAndroid } from 'react-native';

type Listener = (message: string) => void;
let listener: Listener | null = null;

/** ToastHost calls this once, on mount/unmount, to become the active renderer for showToast() on platforms without a real OS toast. */
export function registerToastListener(fn: Listener | null): void {
  listener = fn;
}

/**
 * Shows a brief, auto-dismissing confirmation (e.g. "Language updated"
 * after a settings change). Android has a real native toast API
 * (ToastAndroid) and uses it directly; iOS has no OS-level toast concept
 * at all, so there ToastHost (mounted once near the app root - see
 * app/_layout.tsx) renders a themed equivalent that behaves the same way:
 * appears, holds briefly, dismisses itself without any user action.
 *
 * A plain function rather than a hook so it can be called from anywhere -
 * a settings screen's onPress handler, a context callback - without every
 * caller needing to be wired through a provider itself.
 */
export function showToast(message: string): void {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
    return;
  }
  listener?.(message);
}
