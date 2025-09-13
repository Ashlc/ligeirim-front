import { OrderStatus as OrderStatusType } from 'interfaces';
import { Text, View } from 'react-native';
import { randomShippingTime } from 'utils/shipping';

type OrderStatusProps = {
  status: OrderStatusType;
};

const OrderStatus = ({ status }: OrderStatusProps) => {
  const shippingTime = Date.now() + randomShippingTime() * 60 * 1000;
  const statusStyles = {
    DRAFT: {
      label: 'Rascunho',
      description: 'Seu pedido está sendo preparado.',
    },
    'ON GOING': {
      label: 'Em andamento',
      description: 'Seu pedido está a caminho!',
    },
    COMPLETED: {
      label: 'Concluído',
      description: 'Seu pedido foi entregue!',
    },
  };
  return (
    <View className={`min-h-24 rounded-lg border border-gray-200 p-4`}>
      <View style={{ gap: 4, padding: 8 }}>
        <Text className="text-center text-2xl font-semibold text-indigo-500">
          {statusStyles[status].label}
        </Text>
        <Text className="text-center text-gray-500">{statusStyles[status].description}</Text>
      </View>
      {status === 'ON GOING' && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Previsão de chegada:</Text>
          <Text className="font-semibold">
            {new Date(shippingTime).toLocaleTimeString('pt-BR')}
          </Text>
        </View>
      )}
    </View>
  );
};

export default OrderStatus;
