import {
  ICategorized,
  ICategory,
  IProductCategory,
  IProductResponse,
} from './../interfaces/products';
import { BASE_URL } from './api';

const getCategories = async (): Promise<ICategory[]> => {
  try {
    const res = await fetch(`${BASE_URL}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Erro ao buscar categorias: ${res.status}`);
    }

    const data = await res.json();
    return data as ICategory[];
  } catch (err) {
    console.error('Erro na chamada getCategories:', err);
    throw err;
  }
};

export const getCategorizedProducts = async (id?: number): Promise<ICategorized[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products/category${id ? `/${id}` : ''}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(res);

    if (!res.ok) {
      throw new Error(`Erro ao buscar categorias: ${res.status}`);
    }

    const data = await res.json();
    return data as ICategorized[];
  } catch (err) {
    console.error('Erro na chamada getCategorizedProducts:', err);
    throw err;
  }
};

const getCategoryById = async (id: number): Promise<IProductCategory | null> => {
  const categories = await getCategories();
  return categories.find((category) => category.id === id) || null;
};

const getProductById = async (id: number): Promise<IProductResponse | null> => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Erro ao buscar produto: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error('Erro na chamada getProductById:', err);
    return null;
  }
};

const getProducts = async ({
  query,
  category,
}: {
  query: string;
  category: number | null;
}): Promise<IProductResponse[] | null> => {
  try {
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (category !== null) params.append('categoryId', category.toString());

    const url = `${BASE_URL}/products/${params.toString() ? `?${params.toString()}` : ''}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Erro ao buscar produtos: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Erro na chamada getProducts:', err);
    return null;
  }
};

export const productService = {
  getCategories,
  getCategorizedProducts,
  getCategoryById,
  getProductById,
  getProducts,
};
