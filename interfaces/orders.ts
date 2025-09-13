import { ISellerProduct, ProductColor, ProductSize } from './products';
import { ISeller, IUser } from './users';

export interface Client {
  id: number;
  userId: number;
  user?: IUser;
  orders?: IOrder[];
  cardInfos?: CardInfo[];
}

export interface CardInfo {
  id: number;
  expirationDate: string;
  number: number;
  securityCode: number;
  clientId: number;
  client?: Client;
}

export type PaymentMethod = 'CARTAO' | 'PIX';
export type OrderStatus = 'COMPLETED' | 'DRAFT';

export interface IOrder {
  id: number;
  clientId: number;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  completeDate: string;
  client?: Client;
  quantity?: number;
  color?: ProductColor;
  seller: ISeller;
  size?: ProductSize;
  products: IOrderProduct[];
}

export interface IOrderProduct {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
  color?: ProductColor;
  size?: ProductSize;
  orderId: number;
  sellerProductId: string;
  order?: IOrder;
  sellerProduct?: ISellerProduct;
}
