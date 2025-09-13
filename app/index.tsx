import { useQuery } from '@tanstack/react-query';
import Category from 'components/categories/Category';
import ProductCategoryList from 'components/categories/ProductCategoryList';
import CurrentLocation from 'components/location/CurrentLocation';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { productService } from 'services/productService';
import { SearchBar } from '../components/inputs/SearchBar';

const Main = () => {
  const router = useRouter();

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => await productService.getCategories(),
  });

  const { data: categorizedProducts = [] } = useQuery({
    queryKey: ['categorizedProducts'],
    queryFn: async () => await productService.getCategorizedProducts(),
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ backgroundColor: 'white', paddingBottom: 210 }}>
      <View className={styles.banner} style={{ height: 180 }}>
        <View style={{ position: 'absolute', bottom: 40, alignItems: 'center', gap: 8 }}>
          <Text className="font text-3xl font-bold text-white">Compre Ligeirim em</Text>
        </View>
        <View className="absolute -bottom-7 w-full px-4">
          <CurrentLocation city="Maceió" state="AL" />
        </View>
      </View>

      <View className={styles.container} style={{ gap: 24, padding: 16, paddingTop: 44 }}>
        <TouchableOpacity className="w-full" onPress={() => router.push('/search')}>
          <SearchBar value="" onChange={() => {}} readOnly />
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className={styles.categories}>
          <View className={styles.categoryContainer} style={{ gap: 16 }}>
            {!isLoading &&
              categories.map((category, i) => (
                <Category
                  id={category.id}
                  key={`category-${i}-${category.id}`}
                  icon={category.icon || 'pricetag'}
                  name={category.name}
                />
              ))}
          </View>
        </ScrollView>
        <View className={styles.productList} style={{ gap: 20, flexGrow: 1 }}>
          {categorizedProducts.map((category, i) => (
            <ProductCategoryList
              key={`product-category-list-${i}-${category.id}`}
              title={category.name}
              products={category.products}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  banner: `bg-indigo-500 items-center justify-center relative`,
  container: `flex-col items-center px-4 `,
  categories: `w-full`,
  productList: `w-full`,
  categoryContainer: `flex-row`,
};

export default Main;
