import { ICardInfo, IOrder } from './orders';
import { ISellerProduct } from './products';

export type DriverCategory = 'BIKE' | 'MOTORCYCLE' | 'CAR';

export interface IAddress {
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  address: IAddress;
  identifier: string;
  documentPath: string;
  seller?: ISeller;
  driver?: IDriver;
  client?: IClient;
}

export interface IBankingInfo {
  id: number;
  accountNumber: number;
  image: string;
  holderName: string;
  holderIdentifier: string;
  agency: string;
  operation: string;
  sellers?: ISeller[];
  drivers?: IDriver[];
}

export interface IDriver {
  id: number;
  category: DriverCategory;
  userId: number;
  bankingInfoId: number;
  user?: IUser;
  bankingInfo?: IBankingInfo;
  name?: string;
  plate?: string;
  vehicle?: string;
  image?: string;
}

export interface ISeller {
  id: number;
  realName: string;
  userId: number;
  bankingInfoId: number;
  user?: IUser;
  image: string;
  bankingInfo?: IBankingInfo;
  products?: ISellerProduct[];
}

export interface IClient {
  id: number;
  userId: number;
  user?: IUser;
  orders?: IOrder[];
  cardInfos?: ICardInfo[];
}

export interface IUserProfile {
  id: number;
  name: string;
  phone: string;
  identifier: string;
  documentPath: string;
  address: IAddress;
  cardsInfos: ICardInfo[];
}
