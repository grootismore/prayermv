import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Location from 'expo-location';

import { useSettings } from '../../context/SettingsContext';
import { useCompassHeading } from '../../lib/useCompassHeading';
import { useQiblaAlignment } from '../../lib/useQiblaAlignment';
import { getQiblaBearing } from '../../lib/qibla';
import { colors, spacing, typography } from '../../lib/theme';
import Screen from '../../components/Screen';
import SurfaceCard from '../../components/SurfaceCard';
import QiblaCompass from '../../components/QiblaCompass';

export default function QiblaScreen() {
  const { t } = useTranslation();
  const { island, qiblaHapticsEnabled } = useSettings();
  const { heading, permission, accuracy } = useCompassHeading();
  const [coords, setCoords] = useState<{ lat: number; long: number } | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        try {
          const position = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
          });
          setCoords({ lat: position.coords.latitude, long: position.coords.longitude });
          return;
        } catch {
          // fall through to island fallback below
        }
      }
      if (island?.location.lat != null && island?.location.long != null) {
        setCoords({ lat: island.location.lat, long: island.location.long });
      }
    })();
  }, [island]);

  const qiblaBearing = coords ? getQiblaBearing(coords.lat, coords.long) : null;
  const arrowRotation = qiblaBearing != null && heading != null ? qiblaBearing - heading : null;
  const isAligned = useQiblaAlignment(arrowRotation, qiblaHapticsEnabled);

  const stillAcquiring = permission === 'granted' && heading == null;
  // accuracy is a real signal from the OS compass (0 = unreliable, 3 =
  // high) - only warn once we actually have a reading to judge.
  const needsCalibration = heading != null && accuracy != null && accuracy <= 1;
  const showCalibrate = stillAcquiring || needsCalibration;

  return (
    <Screen contentContainerStyle={styles.content}>
      <Text style={styles.title}>{t('qibla.title')}</Text>

      {(permission === 'denied' || permission === 'unavailable') && (
        <Text style={styles.warning} accessibilityRole="alert">
          {t('qibla.permissionDenied')}
        </Text>
      )}

      <View style={styles.compassWrap}>
        <QiblaCompass rotation={arrowRotation} aligned={isAligned} />
        {qiblaBearing != null && (
          <Text
            style={[styles.bearingText, isAligned && styles.bearingTextAligned]}
            accessibilityLiveRegion="polite"
          >
            {isAligned ? t('qibla.aligned') : t('qibla.bearing', { degrees: Math.round(qiblaBearing) })}
          </Text>
        )}
      </View>

      <Text style={styles.instructions}>{t('qibla.instructions')}</Text>
      {/* Always mounted, with its space always reserved (opacity toggled
          instead of conditionally rendering it) - accuracy can flicker
          in and out of the "needs calibration" range in real time as the
          phone moves, and mounting/unmounting this card was shifting the
          compass above it up and down each time. */}
      <View
        style={!showCalibrate && styles.calibrateSlotHidden}
        accessibilityElementsHidden={!showCalibrate}
        importantForAccessibility={showCalibrate ? 'auto' : 'no-hide-descendants'}
        pointerEvents={showCalibrate ? 'auto' : 'none'}
      >
        <SurfaceCard style={styles.calibrateCard} accessibilityLabel={t('qibla.calibrate')}>
          <Text style={styles.calibrateHint}>{t('qibla.calibrate')}</Text>
        </SurfaceCard>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
  title: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  warning: {
    color: colors.danger,
    textAlign: 'center',
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  compassWrap: { alignItems: 'center', justifyContent: 'center', marginVertical: spacing.lg },
  bearingText: {
    marginTop: spacing.md,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
    color: colors.textPrimary,
  },
  bearingTextAligned: { color: colors.gold, fontWeight: typography.weight.heavy },
  instructions: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: typography.size.base,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  calibrateSlotHidden: {
    opacity: 0,
  },
  calibrateCard: {
    marginTop: spacing.md,
    backgroundColor: colors.goldSoft,
    borderColor: colors.goldMuted,
    padding: spacing.sm,
  },
  calibrateHint: {
    textAlign: 'center',
    color: colors.gold,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
});
