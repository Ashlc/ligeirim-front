import { IAddress } from 'interfaces';
import { Text, View } from 'react-native';

type AddressProps = {
  address: IAddress;
};

const Address = ({ address }: AddressProps) => {
  return (
    <View
      className={`min-h-24 flex-row items-center justify-between rounded-lg border border-gray-200 p-4`}>
      <Text>
        {address?.street}, {address?.city}, {address?.state}, {address?.zipCode}
      </Text>
      <Text className="font-semibold text-rose-600">trocar</Text>
    </View>
  );
};

export default Address;
