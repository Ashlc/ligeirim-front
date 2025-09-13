import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Text>Product Page</Text>
        <Text>Product ID: {id}</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProductPage;
