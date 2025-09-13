import { Ionicons } from '@expo/vector-icons';

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
  name: string;
  category: ICategory;
}

export interface ISellerProductDetails {
  id: number;
  color: ProductColor;
  size: ProductSize;
  stock: number;
}

export interface ICategory {
  id: number;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
}

export interface IProductResponse {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  careLevel: CareLevel;
  category?: IProductCategory;
  product?: ISellerProduct[];
  seller?: {
    sellerId: number;
    userId: number;
    fantasyName: string;
    companyName: string;
    image: string;
  };
  details?: ISellerProductDetails[];
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
