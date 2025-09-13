import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

type DriverInfoProps = {
  name: string;
  plate: string;
  vehicle: string;
  image: string;
};

const DriverInfo = ({ name, plate, vehicle, image }: DriverInfoProps) => {
  return (
    <View className={`min-h-24 flex-row items-center gap-4 rounded-lg border border-gray-200 p-4`}>
      <Image source={{ uri: image }} style={{ width: 64, height: 64, borderRadius: 32 }} />
      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Ionicons name="car-sport-outline" size={20} color="#4b5563" />
          <Text style={{ color: '#4b5563' }}>{vehicle}</Text>
          <Text style={{ color: '#4b5563' }}>{plate}</Text>
        </View>
      </View>
    </View>
  );
};

export default DriverInfo;
