import { ProductSize } from 'interfaces';
import { Text, View } from 'react-native';

type Props = {
  size: ProductSize;
};

const SizeIcon = ({ size }: Props) => {
  return (
    <View className={styles.box} style={{ width: 18, height: 18 }}>
      <Text className={styles.text}>{size}</Text>
    </View>
  );
};

const styles = {
  box: `items-center justify-center rounded bg-gray-200`,
  text: `text-sm font-semibold text-gray-500`,
};

export default SizeIcon;
