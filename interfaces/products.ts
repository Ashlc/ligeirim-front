import { Ionicons } from '@expo/vector-icons';
import { OrderProduct } from './orders';
import { ISeller } from './users';

export interface IProductCategory {
  id: number;
  name: string;
  icon?: keyof typeof Ionicons.glyphMap;
  products?: ISellerProduct[];
}

export interface IProduct {
  id: number;
  category?: IProductCategory;
  name: string;
  sellerProducts?: ISellerProduct[];
  categoryId: number;
}

export type CareLevel = 'BAIXO' | 'MEDIO' | 'ALTO';
export type ProductColor =
  | 'AMARELO'
  | 'AZUL'
  | 'BEGE'
  | 'BRANCO'
  | 'CINZA'
  | 'LARANJA'
  | 'ROSA'
  | 'ROXO'
  | 'VERDE'
  | 'VERMELHO';
export type ProductSize = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'XG' | 'XG1' | 'XG2' | 'XG3';

export interface ISellerProduct {
  id: string;
  careLevel: CareLevel;
  description: string;
  details?: ISellerProductDetails[];
  image: string;
  orderProducts?: OrderProduct[];
  price: number;
  product?: IProduct;
  productId: number;
  seller?: ISeller;
  title: string;
  sellerId: number;
}

export interface ISellerProductDetails {
  id: number;
  color: ProductColor;
  sellerProduct?: ISellerProduct;
  sellerProductId: string;
  size: ProductSize;
  stock: number;
}

export interface ICategory {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
}

export interface IProductResponse {
  id: number;
  careLevel: CareLevel;
  category?: IProductCategory;
  categoryId: number;
  description: string;
  details?: ISellerProductDetails[];
  image: string;
  name: string;
  orderProducts?: OrderProduct[];
  price: number;
  product?: IProduct;
  productId: number;
  seller?: ISeller;
  sellerId: number;
  sellerProducts?: ISellerProduct[];
  title: string;
}

export interface ICategorizedProduct {
  id: number;
  title: string;
  name?: string;
  description: string;
  price: number;
  image: string;
}

export interface ICategorized {
  id: number;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  products: ICategorizedProduct[];
}
