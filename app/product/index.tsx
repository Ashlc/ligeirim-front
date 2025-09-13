import { SearchBar } from 'components/inputs/SearchBar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductsPage = () => {
  const { search, filters } = useLocalSearchParams<{ search: string; filters: string }>();
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96, paddingHorizontal: 16 }}>
        <TouchableOpacity className="w-full" onPress={() => router.push('/search')}>
          <SearchBar value={search} readOnly />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsPage;
