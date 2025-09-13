import { Ionicons } from '@expo/vector-icons';
import { IOrderProduct } from './orders';
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
  categoryId?: number;
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
  id: number;
  careLevel: CareLevel;
  description: string;
  details?: ISellerProductDetails[];
  image: string;
  orderProducts?: IOrderProduct[];
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
  sellerProductId?: string;
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
  description: string;
  details?: ISellerProductDetails[];
  image: string;
  orderProducts?: IOrderProduct[];
  price: number;
  product?: IProduct;
  seller?: {
    id: 1;
    realName: 'Loja do João';
    image: string;
  };
  sellerProducts?: ISellerProduct[];
  title: string;
  quantity?: number;
  size?: ProductSize;
  color?: ProductColor;
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
