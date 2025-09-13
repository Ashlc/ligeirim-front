import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

type Props = {
  city: string;
  state: string;
};

const CurrentLocation = ({ city, state }: Props) => {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
      className="h-14 rounded-lg border border-gray-200 bg-white px-4 shadow-md">
      <Ionicons name="location-outline" size={18} color="slateblue" />
      <Text className="font-medium text-gray-700">
        {city}, {state}
      </Text>
    </View>
  );
};

export default CurrentLocation;
