import { ProductColor } from 'interfaces';
import { Pressable, View } from 'react-native';

type ColorIconProps = {
  color: ProductColor;
  variant?: 'small' | 'large';
  onPress?: () => void;
  selected?: boolean;
};

const ColorIcon = ({ color, variant = 'small', onPress, selected = false }: ColorIconProps) => {
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
    <Pressable onPress={onPress}>
      <View
        style={{
          width: variant === 'small' ? 16 : 32,
          height: variant === 'small' ? 16 : 32,
          outlineColor: 'gainsboro',
          outlineWidth: selected ? 4 : 0,
          outlineStyle: 'solid',
        }}
        className={`${colors[color]} rounded-full border border-gray-200`}
      />
    </Pressable>
  );
};

export default ColorIcon;
