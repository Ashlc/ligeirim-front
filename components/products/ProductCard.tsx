import { ICategorizedProduct } from 'interfaces';
import { Image, Text, View } from 'react-native';

type ProductCardProps = {
  product: ICategorizedProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View className={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={{ width: 120, height: 120 }}
        className={styles.image}
      />
      <View className={styles.priceContainer}>
        <Text numberOfLines={1} className={styles.title}>
          {product.title}
        </Text>
        <Text
          className={
            styles.price
          }>{`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</Text>
      </View>
    </View>
  );
};

const styles = {
  card: `w-[120px] overflow-hidden`,
  priceContainer: `space-y-1 mt-2 flex-1 px-1`,
  image: `rounded-lg bg-gray-200`,
  title: `text-sm font-semibold`,
  description: `text-xs text-gray-600`,
  price: `text-lg font-medium text-blue-600 mt-1`,
};

export default ProductCard;
