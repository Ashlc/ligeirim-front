import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
};

export const Button = ({ title, onPress, disabled, icon }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: 'lightgray', radius: 10 }}
      disabled={disabled}
      className={`${styles.button} ${disabled ? 'bg-gray-400' : 'bg-rose-500'}`}>
      {icon && <Ionicons name={icon} size={20} color="white" />}
      <Text className={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = {
  button: `flex-row items-center justify-center px-4 py-2 rounded-lg h-14 active:opacity-70`,
  buttonText: `text-white font-semibold text-lg`,
};

export default Button;
