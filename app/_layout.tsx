import Navbar from 'components/utils/Navbar';
import Providers from 'components/utils/Providers';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <Providers>
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <SafeAreaView edges={['bottom']} className="absolute bottom-0 w-full">
          <Navbar />
        </SafeAreaView>
      </View>
    </Providers>
  );
}
