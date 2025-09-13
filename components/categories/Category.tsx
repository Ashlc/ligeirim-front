import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

type CategoryProps = {
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  id: number;
  size?: 'small' | 'large';
};

const Category = ({ icon, name, id, size = 'small' }: CategoryProps) => {
  if (size === 'small')
    return (
      <View className={styles.container}>
        <View className={styles.iconContainer}>
          <Ionicons name={icon} size={24} color="black" />
        </View>
        <Text className={styles.name}>{name}</Text>
      </View>
    );
  else if (size === 'large')
    return (
      <View className={styles.largeContainer}>
        <Ionicons name={icon} size={28} className="color-blue-700" />
        <Text className="text-center text-lg font-medium">{name}</Text>
      </View>
    );
};

const styles = {
  container: `flex flex-col items-center gap-2 w-[72px]`,
  largeContainer: `flex flex-row items-center gap-4 grow p-4 bg-blue-200 rounded-lg`,
  iconContainer: `w-16 h-16 rounded-lg bg-blue-200 items-center justify-center`,
  name: `text-sm text-center`,
};

export default Category;
