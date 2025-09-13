import { useQuery } from '@tanstack/react-query';
import Category from 'components/categories/Category';
import ProductCategoryList from 'components/categories/ProductCategoryList';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { productService } from 'services/productService';
import { SearchBar } from '../components/inputs/SearchBar';

const Main = () => {
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
      contentContainerStyle={{ backgroundColor: 'white', paddingBottom: 100 }}>
      <View className={styles.main}>
        <View className={styles.banner}>
          <Text>This should be a banner.</Text>
        </View>
        <SafeAreaView className={styles.container} style={{ gap: 32 }}>
          <SearchBar value="" onChange={() => {}} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className={styles.categories}
            contentContainerStyle={{ paddingVertical: 8 }}>
            <View className={styles.categoryContainer}>
              {!isLoading &&
                categories.map((category) => (
                  <Category
                    id={category.id}
                    key={category.id}
                    icon={category.icon || 'pricetag'}
                    name={category.name}
                  />
                ))}
            </View>
          </ScrollView>
          <View className={styles.productList} style={{ gap: 20, flexGrow: 1 }}>
            {categorizedProducts.map((category) => (
              <ProductCategoryList
                key={category.id}
                title={category.name}
                products={category.products}
              />
            ))}
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = {
  main: ``,
  banner: `h-1/5 bg-blue-500 items-center justify-center`,
  container: `flex-col items-center px-4`,
  categories: `w-full`,
  productList: `w-full`,
  categoryContainer: `flex-row`,
};

export default Main;
