import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../context/SettingsContext';
import { useCompassHeading } from '../../lib/useCompassHeading';
import { getQiblaBearing } from '../../lib/qibla';
import { colors } from '../../lib/theme';

export default function QiblaScreen() {
  const { t } = useTranslation();
  const { island } = useSettings();
  const { heading, permission } = useCompassHeading();
  const [coords, setCoords] = useState<{ lat: number; long: number } | null>(null);
  const rotation = useState(new Animated.Value(0))[0];

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

  useEffect(() => {
    if (arrowRotation == null) return;
    Animated.timing(rotation, {
      toValue: arrowRotation,
      duration: 150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [arrowRotation, rotation]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Text style={styles.title}>{t('qibla.title')}</Text>

      {permission === 'denied' && <Text style={styles.warning}>{t('qibla.permissionDenied')}</Text>}
      {permission === 'unavailable' && <Text style={styles.warning}>{t('qibla.permissionDenied')}</Text>}

      <View style={styles.compassWrap}>
        <View style={styles.compassRing}>
          {qiblaBearing != null && heading != null ? (
            <Animated.View
              style={[
                styles.arrow,
                {
                  transform: [
                    {
                      rotate: rotation.interpolate({
                        inputRange: [-360, 360],
                        outputRange: ['-360deg', '360deg'],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Ionicons name="navigate" size={72} color={colors.primary} />
            </Animated.View>
          ) : (
            <Ionicons name="compass-outline" size={72} color={colors.textMuted} />
          )}
        </View>
        {qiblaBearing != null && (
          <Text style={styles.bearingText}>
            {t('qibla.bearing', { degrees: Math.round(qiblaBearing) })}
          </Text>
        )}
      </View>

      <Text style={styles.instructions}>{t('qibla.instructions')}</Text>
      <Text style={styles.calibrateHint}>{t('qibla.calibrate')}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginTop: 8, marginBottom: 16 },
  warning: {
    color: '#B33A3A',
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  compassWrap: { alignItems: 'center', justifyContent: 'center', marginVertical: 24 },
  compassRing: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 3,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
  },
  arrow: { alignItems: 'center', justifyContent: 'center' },
  bearingText: { marginTop: 16, fontSize: 18, fontWeight: '600', color: colors.text },
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
