import { useEffect, useRef, useState } from 'react';
import { Vibration } from 'react-native';

// Tolerance for "aligned" is intentionally asymmetric (hysteresis): the
// enter threshold is tight (±3°, a real "you're on it" bearing), but once
// aligned the phone has to drift further out (>5°) before it's considered
// no longer aligned. Without that gap, a heading sitting almost exactly on
// the 3° boundary would flicker in and out of "aligned" on ordinary
// compass jitter, each flicker re-triggering the vibration below.
const ENTER_THRESHOLD_DEG = 3;
const EXIT_THRESHOLD_DEG = 5;

// Belt-and-suspenders alongside the hysteresis above: even a genuine
// exit-then-re-entry (the user's hand wavering right at the edge, not just
// sensor noise) won't re-buzz more often than this. Vibration.vibrate()
// itself doesn't return a promise (nothing to catch), but it's wrapped
// defensively anyway - this is best-effort feedback, never something a
// platform quirk should be allowed to crash the compass screen over.
const COOLDOWN_MS = 2500;
const VIBRATE_DURATION_MS = 400;

function angleDistance(deg: number): number {
  const normalized = ((deg % 360) + 360) % 360;
  return Math.min(normalized, 360 - normalized);
}

function fireAlignmentVibration() {
  try {
    // A plain number (rather than a pattern array) is what actually gives
    // the classic iOS AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)
    // buzz via RN's Vibration module - that call fires regardless of the
    // device's System Haptics setting, unlike UIFeedbackGenerator-based
    // APIs (e.g. expo-haptics), which is why this hook uses Vibration
    // directly instead. iOS ignores the duration and plays its fixed
    // system buzz; Android actually vibrates for this many ms.
    Vibration.vibrate(VIBRATE_DURATION_MS);
  } catch {
    // no-op - see comment above
  }
}

/**
 * Tracks whether the compass arrow is currently aligned with the Qibla
 * (rotation ~ 0), and fires a single vibration the moment it *enters* that
 * aligned zone - not a repeating buzz for as long as it stays aligned,
 * since that would spam the phone while the user just holds it still.
 *
 * `hapticsEnabled` is this app's own in-app preference (Settings -> Qibla),
 * not an attempt to read the device's system haptics setting - there's no
 * public API for that. Alignment detection itself (and the "Facing the
 * Qibla" label that depends on the return value) is unaffected either way
 * - only whether that alignment actually buzzes.
 */
export function useQiblaAlignment(rotation: number | null, hapticsEnabled = true): boolean {
  const [isAligned, setIsAligned] = useState(false);
  const alignedRef = useRef(false);
  const lastVibrateAtRef = useRef(0);

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

  // Runs once per false->true transition of `isAligned` (not on every
  // render while it stays true, since there's nothing re-triggering this
  // effect in between) - the cooldown guard on top of that only matters
  // for a *second* transition arriving too soon after the last buzz.
  useEffect(() => {
    if (!isAligned || !hapticsEnabled) return;
    const now = Date.now();
    if (now - lastVibrateAtRef.current < COOLDOWN_MS) return;
    lastVibrateAtRef.current = now;
    fireAlignmentVibration();
  }, [isAligned, hapticsEnabled]);

  return isAligned;
}
