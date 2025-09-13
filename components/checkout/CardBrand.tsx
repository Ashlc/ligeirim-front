import { Image } from 'react-native';

const cardImages: { [key: string]: any } = {
  bb: require('../../assets/cards/bb.png'),
  boleto: require('../../assets/cards/boleto.png'),
  caixa: require('../../assets/cards/caixa.png'),
  elo: require('../../assets/cards/elo.png'),
  itau: require('../../assets/cards/itau.png'),
  mastercard: require('../../assets/cards/mastercard.png'),
  pagseguro: require('../../assets/cards/pagseguro.png'),
  santander: require('../../assets/cards/santander.png'),
  visa_electron: require('../../assets/cards/visa_electron.png'),
  visa: require('../../assets/cards/visa.png'),
};

export const CardBrand = ({ brand }: { brand: string }) => {
  const imageSource = cardImages[brand];

  if (!imageSource) {
    return null;
  }

  return <Image source={imageSource} className="h-8 w-8" resizeMode="contain" />;
};
