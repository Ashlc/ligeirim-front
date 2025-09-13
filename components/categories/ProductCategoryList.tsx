import ProductCard from 'components/products/ProductCard';
import { ICategorizedProduct } from 'interfaces';
import { ScrollView, Text, View } from 'react-native';

type Props = {
  title: string;
  products: ICategorizedProduct[];
};

const ProductCategoryList = ({ title, products }: Props) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 8 }}>
        <View className={styles.productList}>
          {products.map((product, index) => (
            <View key={product.id} className={index !== 0 ? 'ml-4' : ''}>
              <ProductCard product={product} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: `w-full`,
  title: `text-lg font-bold mb-2`,
  productList: `flex-row`,
};

export default ProductCategoryList;
