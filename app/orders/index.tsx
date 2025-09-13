import { useQuery } from '@tanstack/react-query';
import OrderHistoryCard from 'components/orders/OrderHistoryCard';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { orderService } from 'services/orderService';

const OrdersPage = () => {
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => await orderService.getUserOrders(1),
  });
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 16, gap: 16, flex: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Pedidos</Text>
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 16, color: 'gray' }}>Sábado, 13/09/2025</Text>
          <View style={{ marginTop: 16, gap: 8 }}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              orders.map((order) => <OrderHistoryCard key={order.id} order={order} />)
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrdersPage;
