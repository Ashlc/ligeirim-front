import { ICardInfo } from 'interfaces';
import { Text, View } from 'react-native';
import { CardBrand } from './CardBrand';

type CardProps = {
  card: ICardInfo;
  readonly?: boolean;
};

const Card = ({ card, readonly }: CardProps) => {
  return (
    <View
      className={`min-h-24 flex-row items-center rounded-lg border border-gray-200 p-4`}
      style={{ gap: 12 }}>
      <CardBrand brand={card.brand} />
      <Text className="capitalize">Crédito</Text>
      <Text className="flex-1"> •••• {card.last4}</Text>
      {!readonly && <Text className="font-semibold text-indigo-600">trocar</Text>}
    </View>
  );
};

export default Card;
