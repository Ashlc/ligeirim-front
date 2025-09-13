import IconButton from 'components/inputs/IconButton';
import ColorIcon from 'components/products/ColorIcon';
import SizeIcon from 'components/products/SizeIcon';
import { IOrderProduct } from 'interfaces';
import { Image, Text, View } from 'react-native';

type AddedProductProps = {
  product: IOrderProduct;
  readonly?: boolean;
};

const AddedProduct = ({ product, readonly }: AddedProductProps) => {
  const formattedPrice = `R$ ${product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })}`;
  return (
    <View className={styles.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
        <Image source={{ uri: product.image }} className={styles.image} />
        <View style={{ gap: 4, flex: 1 }}>
          <Text numberOfLines={2} className={styles.title}>
            {product.title}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            {product.size && <SizeIcon size={product.size} />}
            {product.color && <ColorIcon color={product.color} />}
          </View>
          <Text className={styles.price}>{formattedPrice}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        {!readonly && (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <IconButton icon="remove" size={20} />
            <Text className={styles.quantity}>{product.quantity}</Text>
            <IconButton icon="add" size={20} />
          </View>
        )}
        {readonly && (
          <View className={styles.quantityBox}>
            <Text className={styles.quantityText}>{product.quantity}</Text>
          </View>
        )}
        {!readonly && <IconButton icon="trash-outline" size={24} color="crimson" />}
      </View>
    </View>
  );
};

const styles = {
  card: `flex-row items-center justify-between`,
  image: `w-20 h-20 rounded-lg bg-gray-200`,
  title: `text-base font-semibold`,
  price: `text-lg font-bold text-rose-600`,
  quantity: `text-lg font-bold`,
  quantityBox: `w-8 h-8 items-center justify-center rounded bg-gray-200`,
  quantityText: `font-semibold text-gray-500`,
};

export default AddedProduct;
