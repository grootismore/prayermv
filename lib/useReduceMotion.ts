import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

/** Live "Reduce Motion" (iOS) / "Remove animations" (Android) setting; decorative slides and fades should skip when true. */
export function useReduceMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled().then((v) => mounted && setReduce(v));
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduce);
    return () => {
      mounted = false;
      sub.remove();
    };
  }, []);
  return reduce;
}
