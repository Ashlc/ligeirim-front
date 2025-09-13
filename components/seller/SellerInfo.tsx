import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

type SellerInfoProps = {
  image: string;
  name: string;
  id: number;
  size?: 'small' | 'medium' | 'large';
};

const SellerInfo = ({ image, name, id, size = 'small' }: SellerInfoProps) => {
  const sizes = {
    small: 42,
    medium: 64,
    large: 72,
  };

  const fontSizes = {
    small: 14,
    medium: 16,
    large: 18,
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8,
        paddingTop: 24,
      }}>
      <Image
        className={'rounded-full bg-gray-200'}
        source={{ uri: image }}
        width={sizes[size]}
        height={sizes[size]}
      />
      <View style={{ flexDirection: 'column', gap: 4, flexGrow: 1 }}>
        <Text className={`font-semibold`} style={{ fontSize: fontSizes[size] }}>
          {name}
        </Text>
        {size === 'medium' && (
          <Link href={`/store/${id}`} className="text-sm font-semibold text-indigo-500">
            Ver mais itens da loja
          </Link>
        )}
      </View>
    </View>
  );
};

export default SellerInfo;
