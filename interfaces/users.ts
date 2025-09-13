import { Client } from './orders';
import { SellerProduct } from './products';

export type DriverCategory = 'BIKE' | 'MOTORCYCLE' | 'CAR';

export interface IUser {
  id: number;
  name: string;
  phone: string;
  address: string;
  identifier: string;
  documentPath: string;
  seller?: ISeller;
  driver?: IDriver;
  client?: Client;
}

export interface IBankingInfo {
  id: number;
  accountNumber: number;
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
}

export interface ISeller {
  id: number;
  realName: string;
  userId: number;
  bankingInfoId: number;
  user?: IUser;
  bankingInfo?: IBankingInfo;
  products?: SellerProduct[];
}
