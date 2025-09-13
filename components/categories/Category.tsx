import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

type CategoryProps = {
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  id: number;
  size?: 'small' | 'large';
};

const Category = ({ icon, name, id, size = 'small' }: CategoryProps) => {
  const router = useRouter();
  const onPress = () => {
    router.push(`/product?category=${id}`);
  };
  if (size === 'small')
    return (
      <Pressable className={styles.container} onPress={onPress}>
        <View className={styles.iconContainer}>
          <Ionicons name={icon} size={24} color="slateblue" />
        </View>
        <Text className={styles.name}>{name}</Text>
      </Pressable>
    );
  else if (size === 'large')
    return (
      <Pressable className={styles.largeContainer} onPress={onPress}>
        <Ionicons name={icon} size={24} color="slateblue" />
        <Text className="text-center">{name}</Text>
      </Pressable>
    );
};

const styles = {
  container: `flex flex-col items-center gap-2 w-fit`,
  largeContainer: `flex flex-row items-center gap-4 grow p-4 bg-indigo-100 rounded-lg`,
  iconContainer: `w-20 h-20 rounded-lg bg-indigo-200 items-center justify-center`,
  name: `text-sm text-center`,
};

export default Category;
