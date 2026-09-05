import { useEffect, useRef, useState } from 'react';
import { Magnetometer } from 'expo-sensors';

export type CompassPermission = 'granted' | 'denied' | 'undetermined' | 'unavailable';

export interface CompassState {
  heading: number | null;
  permission: CompassPermission;
}

/** Smooths a circular value (0-360) with an exponential moving average. */
function smoothHeading(previous: number | null, next: number, alpha = 0.15): number {
  if (previous == null) return next;
  let delta = next - previous;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return (previous + delta * alpha + 360) % 360;
}

export function useCompassHeading(): CompassState {
  const [heading, setHeading] = useState<number | null>(null);
  const [permission, setPermission] = useState<CompassPermission>('undetermined');
  const headingRef = useRef<number | null>(null);

  useEffect(() => {
    let subscription: { remove: () => void } | null = null;

    (async () => {
      const available = await Magnetometer.isAvailableAsync();
      if (!available) {
        setPermission('unavailable');
        return;
      }

      const { status } = await Magnetometer.requestPermissionsAsync();
      if (status !== 'granted') {
        setPermission('denied');
        return;
      }

      setPermission('granted');
      Magnetometer.setUpdateInterval(100);
      subscription = Magnetometer.addListener(({ x, y }) => {
        const rad = Math.atan2(y, x);
        const rawDeg = ((rad * 180) / Math.PI + 90 + 360) % 360;
        const next = smoothHeading(headingRef.current, rawDeg);
        headingRef.current = next;
        setHeading(next);
      });
    })();

    return () => subscription?.remove();
  }, []);

  return { heading, permission };
}
