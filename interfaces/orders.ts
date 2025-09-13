import { ISellerProduct, ProductColor, ProductSize } from './products';
import { IClient, IDriver, ISeller } from './users';

export interface ICardInfo {
  id: number;
  brand: string;
  expirationDate: string;
  last4: string;
  securityCode?: number;
  clientId: number;
  client?: IClient;
}

export type PaymentMethod = 'CARTAO' | 'PIX';
export type OrderStatus = 'COMPLETED' | 'DRAFT' | 'ON GOING';

export interface IOrder {
  id: number;
  clientId: number;
  totalPrice: number;
  paymentMethod?: PaymentMethod;
  status: OrderStatus;
  completeDate?: string;
  client?: IClient;
  quantity?: number;
  color?: ProductColor;
  seller: ISeller;
  size?: ProductSize;
  products: IOrderProduct[];
  driver?: IDriver;
}

export interface IOrderProduct {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
  details: ISellerProduct;
  orderId: number;
  sellerProductId: string;
  order?: IOrder;
  sellerProduct?: ISellerProduct;
}
