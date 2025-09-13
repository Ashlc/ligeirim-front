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
      icon: 'search-outline',
      route: '/search',
    },
    {
      name: 'Carrinho',
      icon: 'cart-outline',
      route: '/cart',
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
  const cartItemCount = 1;
  return (
    <View className={styles.container} style={{ elevation: 10, paddingTop: 12, paddingBottom: 20 }}>
      {actions.map((action) => {
        const isActive = pathname === action.route;
        const isCart = action.name === 'Carrinho';
        return (
          <Pressable
            key={action.name}
            className={styles.actionButton}
            onPress={() => router.push(action.route)}>
            <View>
              <Ionicons
                name={action.icon as keyof typeof Ionicons.glyphMap}
                size={24}
                color={isActive ? 'slateblue' : '#6b7280'}
              />
              {isCart && cartItemCount > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    right: -6,
                    top: -3,
                    width: 16,
                    height: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="rounded-full bg-indigo-500">
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                    {cartItemCount}
                  </Text>
                </View>
              )}
            </View>
            <Text
              className={`${styles.actionText} ${isActive ? 'text-indigo-500' : 'text-gray-500'}`}>
              {action.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = {
  container: `w-full bg-white border-t border-gray-200 flex-row justify-around items-center absolute bottom-0 left-0 shadow-xl`,
  actionButton: `flex flex-col items-center justify-center`,
  actionText: `text-xs mt-1 text-gray-600`,
};

export default Navbar;
