import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const actions = [
    {
      name: 'Início',
      icon: 'home-outline',
      route: '/',
    },
    {
      name: 'Pesquisar',
      icon: 'search',
      route: '/search',
    },
    {
      name: 'Pedidos',
      icon: 'bag-handle-outline',
      route: '/orders',
    },
    {
      name: 'Perfil',
      icon: 'person-outline',
      route: '/profile',
    },
  ];
  return (
    <View className={styles.container} style={{ elevation: 10, paddingTop: 12, paddingBottom: 18 }}>
      {actions.map((action) => {
        const isActive = pathname === action.route;
        return (
          <Pressable
            key={action.name}
            className={styles.actionButton}
            onPress={() => router.push(action.route)}>
            <Ionicons
              name={action.icon as keyof typeof Ionicons.glyphMap}
              size={24}
              color={isActive ? '#3b82f6' : '#6b7280'}
            />
            <Text
              className={`${styles.actionText} ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>
              {action.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = {
  container: `w-full bg-white border-t border-gray-200 flex-row justify-around items-center absolute bottom-0 left-0`,
  actionButton: `flex flex-col items-center justify-center`,
  actionText: `text-xs mt-1 text-gray-600`,
};

export default Navbar;
