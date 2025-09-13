import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfilePage = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Text>Perfil</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
