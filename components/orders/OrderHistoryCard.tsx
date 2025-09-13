import IconButton from 'components/inputs/IconButton';
import ColorIcon from 'components/products/ColorIcon';
import SizeIcon from 'components/products/SizeIcon';
import { IOrder } from 'interfaces';
import { Image, Text, View } from 'react-native';
import orderStatus, { orderStatusColor } from 'utils/orderStatus';

type OrderHistoryCardProps = {
  order: IOrder;
};

const OrderHistoryCard = ({ order }: OrderHistoryCardProps) => {
  return (
    <View className={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexGrow: 1,
          gap: 8,
        }}>
        <View style={{ padding: 12, gap: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Image
              className={styles.image}
              source={{ uri: order.seller.image }}
              width={48}
              height={48}
            />
            <View style={{ flexDirection: 'column', gap: 4, flexGrow: 1 }}>
              <Text className={styles.seller}>{order.seller.realName}</Text>
              <Text
                className={`${orderStatusColor[order.status as keyof typeof orderStatusColor]}`}>
                {orderStatus[order.status as keyof typeof orderStatus]}
              </Text>
            </View>
          </View>
          <View style={{ gap: 4 }}>
            {order.products.map((product) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }} key={product.id}>
                <View className={styles.quantityBox}>
                  <Text className={styles.quantityText}>{product.quantity}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text key={product.id} numberOfLines={1} style={{ maxWidth: 200 }}>
                    {product.title}
                  </Text>
                  {(product.size || product.color) && <Text>·</Text>}
                  {product.size && <SizeIcon size={product.size} />}
                  {product.color && <ColorIcon color={product.color} />}
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={{ paddingRight: 6 }}>
          <IconButton icon="chevron-forward" onPress={() => {}} />
        </View>
      </View>
      <View
        style={{
          padding: 12,
          flexGrow: 1,
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}>
        <Text className={styles.totalPrice}>{`R$ ${order.totalPrice.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}`}</Text>
      </View>
    </View>
  );
};

const styles = {
  card: `w-[140px] overflow-hidden border border-gray-200 rounded-lg w-full`,
  seller: `font-semibold`,
  status: `text-sm font-medium`,
  image: `rounded-lg bg-gray-200`,
  quantityBox: `w-6 h-6  items-center justify-center rounded bg-gray-200`,
  quantityText: `font-semibold text-gray-500`,
  totalPrice: `font-bold text-indigo-600`,
};

export default OrderHistoryCard;
