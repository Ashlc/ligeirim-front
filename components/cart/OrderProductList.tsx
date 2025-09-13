import { IOrderProduct } from 'interfaces';
import { View } from 'react-native';
import AddedProduct from './AddedProduct';

type OrderProductListProps = {
  products: IOrderProduct[];
  onQuantityChange?: (productId: number, newQuantity: number) => void;
  onRemove?: (productId: number) => void;
  readonly?: boolean;
};

const OrderProductList = ({
  products,
  onQuantityChange,
  onRemove,
  readonly,
}: OrderProductListProps) => {
  return (
    <View style={{ gap: 12 }}>
      {products.map((product) => (
        <AddedProduct
          key={product.id}
          product={product}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
          readonly={readonly}
        />
      ))}
    </View>
  );
};

export default OrderProductList;
