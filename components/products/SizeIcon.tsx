import { ProductSize } from 'interfaces';
import { Pressable, Text, View } from 'react-native';

type Props = {
  size: ProductSize;
  variant?: 'small' | 'large';
  onPress?: () => void;
  selected?: boolean;
};

const SizeIcon = ({ size, variant = 'small', onPress, selected = false }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        className={`items-center justify-center rounded bg-gray-200 outline-gray-200`}
        style={{
          width: variant === 'small' ? 18 : 32,
          height: variant === 'small' ? 18 : 32,
          outlineWidth: selected ? 4 : 0,
          outlineOffset: 2,
          outlineColor: 'gainsboro',
          outlineStyle: 'solid',
        }}>
        <Text className={styles.text} style={{ fontSize: variant === 'small' ? 12 : 16 }}>
          {size}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = {
  outlineColor: `outline-gray-500`,
  text: `font-semibold text-gray-500`,
};

export default SizeIcon;
