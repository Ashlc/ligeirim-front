import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import IconButton from 'components/inputs/IconButton';
import { SearchBar } from 'components/inputs/SearchBar';
import ProductCard from 'components/products/ProductCard';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ICategory } from 'interfaces';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { productService } from 'services/productService';

const ProductsPage = () => {
  const { query, filters, category } = useLocalSearchParams<{
    query: string;
    filters: string;
    category: string;
  }>();
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
  const router = useRouter();
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await productService.getCategories();
      if (category) {
        const cat = res.find((c) => c.id === parseInt(category));
        if (cat) setSelectedCategory(cat);
      }
      return res;
    },
  });

  const { data: products = [] } = useQuery({
    queryKey: ['products', query, selectedCategory, filters],
    queryFn: async () => {
      if (category) {
        const res = await productService.getCategorizedProducts(parseInt(category));
        return res[0].products;
      } else {
        const res = await productService.getProducts({
          query,
          category: category ? parseInt(category) : null,
        });
        return res;
      }
    },
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96, paddingHorizontal: 16, paddingTop: 16 }}>
        <View>
          <TouchableOpacity className="w-full" onPress={() => router.push('/search')}>
            <SearchBar value={query} readOnly />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="mb-2 mt-4 flex flex-row items-center gap-4">
            <Pressable
              className={`min-w-24 flex-row items-center justify-center gap-4 rounded-lg border ${selectedCategory ? 'border-indigo-400' : 'border-gray-300'}`}
              style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
              <Ionicons
                name={selectedCategory?.icon || 'shapes-outline'}
                size={16}
                color={selectedCategory ? 'slateblue' : 'gray'}
              />
              <Text
                className={`font-medium ${selectedCategory ? 'text-indigo-500' : 'text-gray-500'}`}>
                {selectedCategory?.name || 'Todas as categorias'}
              </Text>
              {selectedCategory && (
                <IconButton
                  icon="close"
                  size={16}
                  color={selectedCategory ? 'slateblue' : 'gray'}
                  customStyle="w-6 h-6"
                  onPress={() => setSelectedCategory(null)}
                />
              )}
            </Pressable>
            <Pressable
              className="min-w-24 flex-row items-center justify-center gap-4 rounded-lg border border-gray-300"
              style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
              <Ionicons name="filter" size={16} color="gray" />
              <Text>Ordenar</Text>
            </Pressable>
            <Pressable
              className="min-w-24 flex-row items-center justify-center gap-4 rounded-lg border border-gray-300"
              style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
              <Ionicons name="filter" size={16} color="gray" />
              <Text>Filtrar</Text>
            </Pressable>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 30,
            marginTop: 18,
            marginBottom: 32,
          }}>
          {products &&
            products.map((product) => <ProductCard key={product.id} product={product} grow />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsPage;
