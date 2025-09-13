import { useQuery } from '@tanstack/react-query';
import Address from 'components/address/Address';
import OrderProductList from 'components/cart/OrderProductList';
import Card from 'components/checkout/Card';
import DriverInfo from 'components/delivery/DriverInfo';
import OrderStatus from 'components/orders/OrderStatus';
import SellerInfo from 'components/seller/SellerInfo';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { orderService } from 'services/orderService';
import { userService } from 'services/userService';

const OrderPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: order, isLoading } = useQuery({
    queryKey: ['order', id],
    queryFn: async () => orderService.getOrderById(Number(id)),
    enabled: !!id,
  });

  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: async () => userService.getMe(1),
  });

  if (!order || isLoading) {
    return <ActivityIndicator color={'#ec003f'} />;
  }

  const calculateTotal = () => {
    return order.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const shippingFee = 10.0;
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 96 }}>
        <View style={{ paddingHorizontal: 16, gap: 24, backgroundColor: 'white' }}>
          <View style={{ gap: 16 }}>
            <SellerInfo
              size="large"
              image={order?.seller?.image}
              name={order?.seller?.realName}
              id={order?.seller?.id}
            />
            <OrderStatus status={order.status} />
            <Text className="text-lg font-semibold" style={{ marginTop: 12, marginBottom: 8 }}>
              Produtos
            </Text>
            <OrderProductList products={order?.products || []} readonly />
            <View
              style={{ borderBottomWidth: 1, marginVertical: 12 }}
              className="border-gray-200"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Subtotal:</Text>
              <Text className="text-lg  text-indigo-600">
                R$ {calculateTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Frete</Text>
              <Text className="text-lg text-indigo-600">
                R$ {shippingFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, marginVertical: 12 }}
              className="border-gray-200"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text className="text-lg font-semibold">Total:</Text>
              <Text className="text-2xl font-bold text-indigo-600">
                R${' '}
                {(calculateTotal() + shippingFee).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
          </View>
          {order.driver && (
            <View className="border-gray-200" style={{ marginTop: 16, gap: 12 }}>
              <Text className="text-xl font-semibold">Entregador</Text>
              <DriverInfo
                name={order.driver.name || ''}
                plate={order.driver.plate || ''}
                vehicle={order.driver.vehicle || ''}
                image={order.driver.image || ''}
              />
            </View>
          )}
          <View className="border-gray-200" style={{ marginTop: 16, gap: 12 }}>
            <Text className="text-xl font-semibold">Endereço de entrega</Text>
            {user?.address && <Address address={user.address} readonly />}
          </View>
          <View className="border-gray-200" style={{ marginTop: 16, gap: 12 }}>
            <Text className="text-xl font-semibold">Método de pagamento</Text>
            {user?.cardsInfos && user.cardsInfos.length > 0 && (
              <Card card={user.cardsInfos[0]} readonly />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderPage;
