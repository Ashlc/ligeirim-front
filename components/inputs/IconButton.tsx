import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  disabled?: boolean;
  size?: number;
  color?: string;
};

const IconButton = ({ icon, onPress, disabled, size = 20, color = 'gray' }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} className={styles.button}>
      {icon && <Ionicons name={icon} size={size} color={color} />}
    </Pressable>
  );
};

const styles = {
  button: `flex-row items-center justify-center rounded-full active:bg-gray-100 w-10 h-10`,
};

export default IconButton;
