import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  disabled?: boolean;
};

const IconButton = ({ icon, onPress, disabled }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} className={styles.button}>
      {icon && <Ionicons name={icon} size={20} color="white" />}
    </TouchableOpacity>
  );
};

const styles = {
  button: `flex-row items-center justify-center px-4 py-2 rounded-full active:bg-blue-100`,
};

export default IconButton;
