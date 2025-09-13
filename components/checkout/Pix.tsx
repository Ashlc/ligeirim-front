import { Image, Text, View } from 'react-native';

const Pix = () => {
  return (
    <View
      className={`min-h-24 flex-row items-center rounded-lg border border-gray-200 p-4`}
      style={{ gap: 12 }}>
      <Image source={require('../../assets/cards/pix.png')} className="h-8 w-8 rounded-full" />
      <Text>Gerar código Pix</Text>
    </View>
  );
};

export default Pix;
