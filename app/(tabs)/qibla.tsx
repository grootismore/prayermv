import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import * as Location from 'expo-location';

import { useSettings } from '../../context/SettingsContext';
import { useCompassHeading } from '../../lib/useCompassHeading';
import { useQiblaAlignment } from '../../lib/useQiblaAlignment';
import { getQiblaBearing } from '../../lib/qibla';
import { colors } from '../../lib/theme';
import QiblaCompass from '../../components/QiblaCompass';
import GeometricStar from '../../components/GeometricStar';

export default function QiblaScreen() {
  const { t } = useTranslation();
  const { island } = useSettings();
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
  const isAligned = useQiblaAlignment(arrowRotation);

  const stillAcquiring = permission === 'granted' && heading == null;
  // accuracy is a real signal from the OS compass (0 = unreliable, 3 =
  // high) - only warn once we actually have a reading to judge.
  const needsCalibration = heading != null && accuracy != null && accuracy <= 1;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.titleRow}>
        <GeometricStar size={14} color={colors.gold} />
        <Text style={styles.title}>{t('qibla.title')}</Text>
        <GeometricStar size={14} color={colors.gold} />
      </View>

      {(permission === 'denied' || permission === 'unavailable') && (
        <Text style={styles.warning}>{t('qibla.permissionDenied')}</Text>
      )}

      <View style={styles.compassWrap}>
        <QiblaCompass rotation={arrowRotation} aligned={isAligned} />
        {qiblaBearing != null && (
          <Text style={[styles.bearingText, isAligned && styles.bearingTextAligned]}>
            {isAligned ? t('qibla.aligned') : t('qibla.bearing', { degrees: Math.round(qiblaBearing) })}
          </Text>
        )}
      </View>

      <Text style={styles.instructions}>{t('qibla.instructions')}</Text>
      {(stillAcquiring || needsCalibration) && (
        <Text style={styles.calibrateHint}>{t('qibla.calibrate')}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', padding: 20 },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
    marginBottom: 16,
  },
  title: { fontSize: 22, fontWeight: '700', color: colors.text },
  warning: {
    color: colors.danger,
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  compassWrap: { alignItems: 'center', justifyContent: 'center', marginVertical: 24 },
  bearingText: { marginTop: 16, fontSize: 18, fontWeight: '600', color: colors.text },
  bearingTextAligned: { color: colors.gold, fontWeight: '800' },
  instructions: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  calibrateHint: {
    textAlign: 'center',
    color: colors.accent,
    fontSize: 13,
    marginTop: 8,
    paddingHorizontal: 16,
  },
});
