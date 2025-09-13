import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

type SellerInfoProps = {
  image: string;
  name: string;
  id: number;
  size?: 'small' | 'large';
};

const SellerInfo = ({ image, name, id, size = 'small' }: SellerInfoProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8,
        borderTopWidth: 1,
        paddingTop: 24,
      }}
      className="border-gray-200">
      <Image
        className={'rounded-full bg-gray-200'}
        source={{ uri: image }}
        width={size === 'small' ? 42 : 64}
        height={size === 'small' ? 42 : 64}
      />
      <View style={{ flexDirection: 'column', gap: 4, flexGrow: 1 }}>
        <Text className={`font-semibold ${size === 'small' ? '' : 'text-lg'}`}>{name}</Text>
        {size === 'large' && (
          <Link href={`/store/${id}`} className="text-sm font-semibold text-rose-500">
            Ver mais itens da loja
          </Link>
        )}
      </View>
    </View>
  );
};

export default SellerInfo;
