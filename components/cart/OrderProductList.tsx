import { IOrderProduct } from 'interfaces';
import { View } from 'react-native';
import AddedProduct from './AddedProduct';

type OrderProductListProps = {
  products: IOrderProduct[];
};

const OrderProductList = ({ products }: OrderProductListProps) => {
  return (
    <View>
      {products.map((product) => (
        <AddedProduct key={product.id} product={product} />
      ))}
    </View>
  );
};

export default OrderProductList;
