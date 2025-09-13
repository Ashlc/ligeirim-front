import IconButton from 'components/inputs/IconButton';
import ColorIcon from 'components/products/ColorIcon';
import SizeIcon from 'components/products/SizeIcon';
import { IOrderProduct } from 'interfaces';
import { Image, Text, View } from 'react-native';

type AddedProductProps = {
  product: IOrderProduct;
  readonly?: boolean;
  onQuantityChange?: (productId: number, newQuantity: number) => void;
  onRemove?: (productId: number) => void;
};

const AddedProduct = ({ product, readonly, onQuantityChange, onRemove }: AddedProductProps) => {
  const formattedPrice = `R$ ${product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })}`;

  const handleIncrease = () => {
    onQuantityChange?.(product.id, product.quantity + 1);
  };

  const handleDecrease = () => {
    onQuantityChange?.(product.id, product.quantity - 1);
  };

  const handleRemove = () => {
    onRemove?.(product.id);
  };

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
            <IconButton icon="remove" size={20} onPress={handleDecrease} />
            <Text className={styles.quantity}>{product.quantity}</Text>
            <IconButton icon="add" size={20} onPress={handleIncrease} />
          </View>
        )}
        {readonly && (
          <View className={styles.quantityBox}>
            <Text className={styles.quantityText}>{product.quantity}</Text>
          </View>
        )}
        {!readonly && (
          <IconButton icon="trash-outline" size={24} color="slateblue" onPress={handleRemove} />
        )}
      </View>
    </View>
  );
};

const styles = {
  card: `flex-row items-center justify-between`,
  image: `w-20 h-20 rounded-lg bg-gray-200`,
  title: `text-base font-semibold`,
  price: `text-lg font-bold text-indigo-600`,
  quantity: `text-lg font-bold`,
  quantityBox: `w-8 h-8 items-center justify-center rounded bg-gray-200`,
  quantityText: `font-semibold text-gray-500`,
};

export default AddedProduct;
