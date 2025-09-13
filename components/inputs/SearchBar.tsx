import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
  autoFocus?: boolean;
};

export const SearchBar = ({ value, onChange, autoFocus }: SearchBarProps) => {
  return (
    <View className="relative w-full">
      <TextInput
        placeholder="Pesquisar"
        autoFocus={autoFocus}
        className="h-16 w-full rounded-xl border border-gray-300 pl-12 pr-3"
        value={value}
        onChangeText={onChange}
      />
      <View className="absolute left-4 top-1/2 -translate-y-1/2">
        <Ionicons name="search-outline" size={20} color="gray" />
      </View>
    </View>
  );
};

SearchBar.displayName = 'SearchBar';
