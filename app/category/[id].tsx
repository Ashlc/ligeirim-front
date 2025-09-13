import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Text>Category Page</Text>
        <Text>Category ID: {id}</Text>
      </View>
    </SafeAreaView>
  );
};
export default CategoryPage;
