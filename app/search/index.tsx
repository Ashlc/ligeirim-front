import { useQuery } from '@tanstack/react-query';
import Category from 'components/categories/Category';
import Button from 'components/inputs/Button';
import { SearchBar } from 'components/inputs/SearchBar';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { productService } from 'services/productService';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => await productService.getCategories(),
  });
  const handleSearch = () => {
    if (searchTerm.trim() === '') return;
    router.push(`/product?query=${searchTerm}`);
  };
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 16, gap: 32 }}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} autoFocus />
        <ScrollView>
          <View className={styles.categoryContainer}>
            {!isLoading &&
              categories.map((category) => (
                <Category
                  id={category.id}
                  key={category.id}
                  icon={category.icon || 'pricetag'}
                  name={category.name}
                  size="large"
                />
              ))}
          </View>
        </ScrollView>
        <Button title="Pesquisar" onPress={handleSearch} />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  categoryContainer: `flex flex-row flex-wrap gap-4`,
};

export default SearchPage;
