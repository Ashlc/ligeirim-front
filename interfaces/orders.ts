import { SellerProduct } from './products';
import { IUser } from './users';

export interface Client {
  id: number;
  userId: number;
  user?: IUser;
  orders?: Order[];
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

export interface Order {
  id: number;
  clientId: number;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  completeDate: string;
  client?: Client;
  products?: OrderProduct[];
}

export interface OrderProduct {
  id: number;
  quantity: number;
  orderId: number;
  sellerProductId: string;
  order?: Order;
  sellerProduct?: SellerProduct;
}
