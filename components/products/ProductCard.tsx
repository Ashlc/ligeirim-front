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
        style={{ width: 140, height: 140 }}
        className={styles.image}
      />
      <View className={styles.priceContainer}>
        <Text numberOfLines={1} className={styles.title}>
          {product.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'crimson',
            marginTop: 4,
          }}>{`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</Text>
      </View>
    </View>
  );
};

const styles = {
  card: `w-[140px] overflow-hidden`,
  priceContainer: `space-y-1 mt-2 flex-1 px-1`,
  image: `rounded-lg bg-gray-200`,
  title: `text-sm font-semibold`,
  description: `text-xs text-gray-600`,
};

export default ProductCard;
