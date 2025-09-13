import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { ICategorizedProduct } from 'interfaces';
import { Image, Pressable, Text, View } from 'react-native';
import { randomShippingTime } from 'utils/shipping';
type ProductCardProps = {
  product: ICategorizedProduct;
  grow?: boolean;
};

const ProductCard = ({ product, grow }: ProductCardProps) => {
  const router = useRouter();
  const formattedPrice = `R$ ${product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })}`;
  return (
    <Pressable
      style={{ width: grow ? '46%' : 160 }}
      onPress={() => {
        router.push(`/product/${product.id}`);
      }}>
      <View className={styles.card}>
        <Image
          source={{ uri: product.image }}
          style={{ width: '100%', aspectRatio: 1 }}
          className={styles.image}
        />
        <View style={{ paddingTop: 8 }}>
          <Text numberOfLines={1} className={styles.title}>
            {product.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'slateblue',
                marginTop: 4,
              }}>
              {product.price && formattedPrice}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <MaterialCommunityIcons name="clock-fast" size={16} color="teal" />
              <Text numberOfLines={1} className={styles.shippingText}>
                {randomShippingTime()} min
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = {
  card: `overflow-hidden`,
  image: `rounded-lg bg-gray-200`,
  title: `text-sm font-semibold`,
  shippingText: `text-sm text-teal-600`,
  description: `text-xs text-gray-600`,
};

export default ProductCard;
