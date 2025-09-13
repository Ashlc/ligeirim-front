import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Address from 'components/address/Address';
import OrderProductList from 'components/cart/OrderProductList';
import Card from 'components/checkout/Card';
import Pix from 'components/checkout/Pix';
import Button from 'components/inputs/Button';
import SellerInfo from 'components/seller/SellerInfo';
import { useRouter } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { orderService } from 'services/orderService';
import { userService } from 'services/userService';
import { MOCK_USER_ID } from '../../constants';

const CartPage = () => {
  const router = useRouter();
  const qc = useQueryClient();
  const { data: draftOrder, isLoading } = useQuery({
    queryKey: ['draftOrder'],
    queryFn: async () => orderService.getDraftOrder(),
  });

  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: async () => userService.getMe(MOCK_USER_ID),
  });

  const { mutate: updateOrder } = useMutation({
    mutationFn: (params: { productId: number; quantity: number }) =>
      orderService.updateDraftOrder(params.productId, params.quantity),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['draftOrder'] });
    },
  });

  const { mutate: removeProduct } = useMutation({
    mutationFn: (productId: number) => orderService.removeProductFromDraftOrder(productId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['draftOrder'] });
    },
  });

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateOrder({ productId, quantity: newQuantity });
    } else {
      removeProduct(productId);
    }
  };

  const { mutate: finalizeOrder } = useMutation({
    mutationFn: () => orderService.finalizeDraftOrder(draftOrder?.id || 0),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['draftOrder'] });
      router.push(`/orders/${draftOrder?.id}`);
    },
  });

  if (!draftOrder || isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'#432dd7'} />
      </SafeAreaView>
    );
  }

  const calculateTotal = () => {
    return draftOrder.products.reduce((total, product) => {
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
              image={draftOrder?.seller?.image}
              name={draftOrder?.seller?.realName}
              id={draftOrder?.seller?.id}
            />
            <Text className="text-lg font-semibold" style={{ marginTop: 12, marginBottom: 8 }}>
              Produtos
            </Text>
            <OrderProductList
              products={draftOrder?.products || []}
              onQuantityChange={handleQuantityChange}
              onRemove={removeProduct}
            />
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
          <View className="border-gray-200" style={{ marginTop: 16, gap: 12 }}>
            <Text className="text-xl font-semibold">Endereço de entrega</Text>
            {!user?.address ? (
              <Text className="font-semibold text-indigo-600">Adicionar endereço</Text>
            ) : (
              <Address address={user.address} />
            )}
          </View>
          <View className="border-gray-200" style={{ marginTop: 16, gap: 12 }}>
            <Text className="text-xl font-semibold">Método de pagamento</Text>
            <Pix />
            {!user?.cardsInfos || user.cardsInfos.length === 0 ? (
              <Text className="font-semibold text-indigo-600">Adicionar cartão de crédito</Text>
            ) : (
              <Card card={user.cardsInfos[0]} key={user.cardsInfos[0].id} />
            )}
          </View>
          <Button title="Concluir pedido" onPress={finalizeOrder} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartPage;
