import { Stack } from 'expo-router';

import { useTheme } from '../../../lib/useTheme';

/**
 * The Duas tab's own Stack navigator - lets the category and reading
 * screens push over the tab bar with native transitions, while the tab
 * itself stays on `index` when the tab is first selected. Nested under
 * app/(tabs)/_layout.tsx's Tabs the same way every other tab route file
 * lives directly under app/(tabs)/ - this is the one exception that's a
 * directory instead of a single file.
 */
export default function DuasLayout() {
  const { colors } = useTheme();

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="category/[categoryId]" />
      <Stack.Screen name="[duaId]" />
    </Stack>
  );
}
