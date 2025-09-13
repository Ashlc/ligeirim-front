import { ProductColor } from 'interfaces';
import { View } from 'react-native';

type ColorIconProps = {
  color: ProductColor;
};

const ColorIcon = ({ color }: ColorIconProps) => {
  const colors: Record<ProductColor, string> = {
    AMARELO: 'bg-yellow-500',
    AZUL: 'bg-blue-500',
    BEGE: 'bg-orange-100',
    BRANCO: 'bg-white',
    CINZA: 'bg-gray-500',
    LARANJA: 'bg-orange-500',
    ROSA: 'bg-pink-500',
    ROXO: 'bg-purple-500',
    VERDE: 'bg-green-500',
    VERMELHO: 'bg-red-500',
  };
  return (
    <View
      style={{ width: 16, height: 16 }}
      className={`${colors[color]} rounded-full border border-gray-200`}
    />
  );
};

export default ColorIcon;
