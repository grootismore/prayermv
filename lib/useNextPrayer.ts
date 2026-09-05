import { useEffect, useState } from 'react';
import { getTodayPrayerTimes, getNextPrayer, PRAYER_ORDER, type PrayerTimeEntry } from './prayerTimes';

export interface NextPrayerState {
  today: PrayerTimeEntry[];
  next: PrayerTimeEntry | null;
  /** call name of the prayer period currently in effect among today's list, if any */
  currentCall: string | null;
  millisecondsRemaining: number;
}

function computeState(islandId: number): NextPrayerState {
  const now = Date.now();
  const today = getTodayPrayerTimes(islandId);
  const next = getNextPrayer(islandId);

  let currentCall: string | null = null;
  for (const entry of today) {
    if (entry.date.getTime() <= now) {
      currentCall = entry.call;
    }
  }

  return {
    today,
    next,
    currentCall,
    millisecondsRemaining: Math.max(0, next.date.getTime() - now),
  };
}

/** Live-updating (per second) next-prayer state for an island. */
export function useNextPrayer(islandId: number | null): NextPrayerState | null {
  const [state, setState] = useState<NextPrayerState | null>(() =>
    islandId != null ? computeState(islandId) : null
  );

  useEffect(() => {
    if (islandId == null) {
      setState(null);
      return;
    }

    setState(computeState(islandId));
    const interval = setInterval(() => {
      setState(computeState(islandId));
    }, 1000);

    return () => clearInterval(interval);
  }, [islandId]);

  return state;
}

export function formatCountdown(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export { PRAYER_ORDER };
