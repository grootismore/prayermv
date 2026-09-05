import { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';

export type CompassPermission = 'granted' | 'denied' | 'undetermined' | 'unavailable';

export interface CompassState {
  /** Degrees from true north (0-360), or null until the first reading arrives. */
  heading: number | null;
  permission: CompassPermission;
  /** 0 (unreliable) to 3 (high) - a real signal from the OS compass, not guessed. */
  accuracy: number | null;
}

/** Smooths a circular value (0-360) with an exponential moving average. */
function smoothHeading(previous: number | null, next: number, alpha = 0.15): number {
  if (previous == null) return next;
  let delta = next - previous;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return (previous + delta * alpha + 360) % 360;
}

/**
 * Uses expo-location's fused compass heading (CLLocationManager on iOS,
 * the rotation-vector sensor on Android) rather than reading the raw
 * magnetometer directly. Raw x/y -> atan2 math is sensitive to device
 * tilt and to axis-convention differences between platforms/devices, and
 * separately would only ever give *magnetic* north - comparing that
 * against a Qibla bearing computed from true latitude/longitude (as
 * lib/qibla.ts does) silently bakes in the local magnetic declination as
 * an error. `trueHeading` here is already corrected for both.
 */
export function useCompassHeading(): CompassState {
  const [heading, setHeading] = useState<number | null>(null);
  const [permission, setPermission] = useState<CompassPermission>('undetermined');
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const headingRef = useRef<number | null>(null);

  useEffect(() => {
    let subscription: Location.LocationSubscription | null = null;
    let cancelled = false;

    (async () => {
      const servicesEnabled = await Location.hasServicesEnabledAsync();
      if (!servicesEnabled) {
        if (!cancelled) setPermission('unavailable');
        return;
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (cancelled) return;
      if (status !== 'granted') {
        setPermission('denied');
        return;
      }

      setPermission('granted');
      subscription = await Location.watchHeadingAsync((update) => {
        // trueHeading is -1 when location permission isn't actually
        // available yet (e.g. mid-grant); fall back to magnetic north
        // rather than showing nothing.
        const raw = update.trueHeading >= 0 ? update.trueHeading : update.magHeading;
        const next = smoothHeading(headingRef.current, raw);
        headingRef.current = next;
        setHeading(next);
        setAccuracy(update.accuracy);
      });
    })();

    return () => {
      cancelled = true;
      subscription?.remove();
    };
  }, []);

  return { heading, permission, accuracy };
}
