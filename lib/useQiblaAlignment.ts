import { useEffect, useRef, useState } from 'react';
import * as Haptics from 'expo-haptics';

const ENTER_THRESHOLD_DEG = 5;
const EXIT_THRESHOLD_DEG = 8;
const REPEAT_INTERVAL_MS = 1200;

function angleDistance(deg: number): number {
  const normalized = ((deg % 360) + 360) % 360;
  return Math.min(normalized, 360 - normalized);
}

// A plain notificationAsync(Success) alone can be too subtle to notice
// while the phone is actively being turned in hand - pairing it with an
// immediate heavy impact gives a more physically obvious "you're there"
// thump. Wrapped defensively: haptics are best-effort feedback, never
// something a missing/failed native call should be allowed to crash the
// compass over.
function fireAlignmentHaptic() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
}

/**
 * Tracks whether the compass arrow is currently aligned with the Qibla
 * (rotation ~ 0). Enter/exit thresholds are deliberately different
 * (hysteresis) so it doesn't flicker in and out of "aligned" while held
 * steady right at the edge of the tolerance.
 *
 * `hapticsEnabled` is this app's own in-app preference (Settings -> Qibla),
 * not an attempt to read the device's system haptics setting - there's no
 * public API for that, and iOS's UIFeedbackGenerator calls are largely
 * independent of it by design anyway. Alignment detection itself (and the
 * "Facing the Qibla" label that depends on the return value) is unaffected
 * either way - only whether that alignment actually buzzes.
 */
export function useQiblaAlignment(rotation: number | null, hapticsEnabled = true): boolean {
  const [isAligned, setIsAligned] = useState(false);
  const alignedRef = useRef(false);

  useEffect(() => {
    const distance = rotation == null ? null : angleDistance(rotation);

    if (distance == null) {
      if (alignedRef.current) {
        alignedRef.current = false;
        setIsAligned(false);
      }
      return;
    }

    if (!alignedRef.current && distance <= ENTER_THRESHOLD_DEG) {
      alignedRef.current = true;
      setIsAligned(true);
    } else if (alignedRef.current && distance > EXIT_THRESHOLD_DEG) {
      alignedRef.current = false;
      setIsAligned(false);
    }
  }, [rotation]);

  // Pulse repeatedly for as long as the phone stays aligned, not just once
  // the instant it enters alignment - a single pulse is easy to miss since
  // the user is typically watching the screen for the "Facing the Qibla"
  // label to appear, not paying attention to their hand at that exact
  // instant, so a one-shot haptic can come and go unnoticed.
  useEffect(() => {
    if (!isAligned || !hapticsEnabled) return;
    fireAlignmentHaptic();
    const interval = setInterval(fireAlignmentHaptic, REPEAT_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isAligned, hapticsEnabled]);

  return isAligned;
}
