import { useEffect, useRef, useState } from 'react';
import * as Haptics from 'expo-haptics';

const ENTER_THRESHOLD_DEG = 5;
const EXIT_THRESHOLD_DEG = 8;

function angleDistance(deg: number): number {
  const normalized = ((deg % 360) + 360) % 360;
  return Math.min(normalized, 360 - normalized);
}

/**
 * Tracks whether the compass arrow is currently aligned with the Qibla
 * (rotation ~ 0) and fires one haptic pulse the moment it swings into
 * alignment. Enter/exit thresholds are deliberately different (hysteresis)
 * so it doesn't re-fire repeatedly while held steady right at the edge of
 * the tolerance.
 */
export function useQiblaAlignment(rotation: number | null): boolean {
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
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else if (alignedRef.current && distance > EXIT_THRESHOLD_DEG) {
      alignedRef.current = false;
      setIsAligned(false);
    }
  }, [rotation]);

  return isAligned;
}
