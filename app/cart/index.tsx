import { useQuery } from '@tanstack/react-query';
import Address from 'components/address/Address';
import OrderProductList from 'components/cart/OrderProductList';
import SellerInfo from 'components/seller/SellerInfo';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { orderService } from 'services/orderService';
import { userService } from 'services/userService';

const CartPage = () => {
  const { data: draftOrder, isLoading } = useQuery({
    queryKey: ['draftOrder'],
    queryFn: async () => orderService.getDraftOrder(),
  });

  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: async () => userService.getMe(1),
  });

  if (!draftOrder || isLoading) {
    return <ActivityIndicator color={'#ec003f'} />;
  }

  const calculateTotal = () => {
    return draftOrder.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const shippingFee = 10.0;
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 16, gap: 12 }}>
        <SellerInfo
          size="large"
          image={draftOrder?.seller?.image}
          name={draftOrder?.seller?.realName}
          id={draftOrder?.seller?.id}
        />
        <View style={{ borderBottomWidth: 1, marginVertical: 12 }} className="border-gray-200" />
        <OrderProductList products={draftOrder?.products || []} />
        <View style={{ borderBottomWidth: 1, marginVertical: 12 }} className="border-gray-200" />
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>Subtotal:</Text>
          <Text className="text-lg  text-rose-600">
            R$ {calculateTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Text>
        </View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>Frete</Text>
          <Text className="text-lg text-rose-600">
            R$ {shippingFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Text>
        </View>
        <View style={{ borderBottomWidth: 1, marginVertical: 12 }} className="border-gray-200" />
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text className="text-lg font-semibold">Total:</Text>
          <Text className="text-2xl font-bold text-rose-600">
            R${' '}
            {(calculateTotal() + shippingFee).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Text>
        </View>
        <View
          style={{ borderTopWidth: 1, marginTop: 12, paddingTop: 12, gap: 8 }}
          className="border-gray-200">
          <Text className="text-lg font-semibold">Endereço de entrega</Text>
          {!user?.address ? (
            <Text className="font-semibold text-rose-600">Adicionar endereço</Text>
          ) : (
            <Address address={user.address} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartPage;
