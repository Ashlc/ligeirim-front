import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useQuery } from '@tanstack/react-query';
import Button from 'components/inputs/Button';
import ColorIcon from 'components/products/ColorIcon';
import SizeIcon from 'components/products/SizeIcon';
import SellerInfo from 'components/seller/SellerInfo';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ProductColor, ProductSize } from 'interfaces';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { productService } from 'services/productService';
import { randomShippingTime } from 'utils/shipping';

const ProductPage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState(1);
  const shippingCost = 5.99;

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => productService.getProductById(parseInt(id)),
    enabled: !!id,
  });

  const handleQuantityChange = (delta: number) => {
    if (delta === 1) {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const sizes =
    Array.from(
      new Set(product?.details?.filter((detail) => detail.size).map((detail) => detail.size))
    ) || [];

  const colors =
    Array.from(
      new Set(product?.details?.filter((detail) => detail.color).map((detail) => detail.color))
    ) || [];

  if (!product || isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'#432dd7'} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, paddingTop: 8 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 128 }}>
        {/* Product Image and Title */}
        <View style={{ height: 300 }} className={styles.image}></View>
        <View style={{ padding: 16, gap: 24 }}>
          <Text className={styles.title} numberOfLines={1}>
            {product?.title}
          </Text>

          <View style={{ gap: 16 }}>
            {/* Variations */}
            {colors.length > 0 && (
              <View>
                <Text className="mb-2 font-semibold">Cores</Text>
                <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                  {colors.map((color) => (
                    <ColorIcon
                      key={color}
                      color={color}
                      selected={selectedColor === color}
                      variant="large"
                      onPress={() => setSelectedColor(color)}
                    />
                  ))}
                </View>
              </View>
            )}
            {sizes.length > 0 && (
              <View>
                <Text className="mb-2 font-semibold">Tamanhos</Text>
                <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                  {sizes.map((size) => (
                    <SizeIcon
                      key={size}
                      size={size}
                      variant="large"
                      selected={selectedSize === size}
                      onPress={() => setSelectedSize(size)}
                    />
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Quantity */}
          <View className={styles.quantityContainer}>
            <Pressable onPress={() => handleQuantityChange(-1)}>
              <View className={styles.removeIcon}>
                <Ionicons name="remove" size={24} color="white" />
              </View>
            </Pressable>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text>{quantity}</Text>
            </View>
            <Pressable onPress={() => handleQuantityChange(1)}>
              <View className={styles.addIcon}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </Pressable>
          </View>

          {/* Price and Shipping */}
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text className="text-3xl font-semibold">
                {product &&
                  `R$ ${(product.price * quantity).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
              </Text>
              <Text className="text-sm text-gray-500 line-through">
                {product &&
                  `R$ ${(product.price * 1.2 * quantity).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <MaterialCommunityIcons name="racing-helmet" size={16} color="gray" />
                <Text className="text-gray-500">{`R$ ${shippingCost.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}`}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <MaterialCommunityIcons name="clock-fast" size={16} color="teal" />
                <Text numberOfLines={1} className={styles.shippingText}>
                  {randomShippingTime()} min
                </Text>
              </View>
            </View>
          </View>

          {/* Buy Button */}
          <Button title="Adicionar ao carrinho" onPress={() => {}} />

          <SellerInfo
            name={product?.seller?.fantasyName || ''}
            image={product?.seller?.image || ''}
            id={product?.seller?.sellerId || 0}
            size="medium"
          />

          {/* Description */}
          <View style={{ gap: 8, marginTop: 16 }}>
            <Text className="text-lg font-semibold">Descrição do produto</Text>
            <Text className={styles.description}>{product?.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductPage;

const styles = {
  image: `bg-gray-200`,
  sellerPfp: `rounded-lg bg-gray-200`,
  title: `text-xl font-semibold`,
  shippingText: `text-teal-600`,
  description: `text-gray-600`,
  seller: `font-semibold`,
  quantityContainer: `flex-row items-center border border-gray-300 rounded-lg overflow-hidden`,
  removeIcon: `p-4 border-r border-gray-300 bg-indigo-500`,
  addIcon: `p-4 border-l border-gray-300 bg-indigo-500`,
};
