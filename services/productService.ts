import { ICategorized, IProductCategory, IProductResponse } from './../interfaces/products';

const BASE_URL = 'http://192.168.0.4:5000/products'

const getCategories = async (): Promise<IProductCategory[]> => {
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
    return data as IProductCategory[];
  } catch (err) {
    console.error('Erro na chamada getCategorizedProducts:', err);
    throw err;
  }
};

export const getCategorizedProducts = async (): Promise<ICategorized[]> => {
  try {
    const res = await fetch(`${BASE_URL}/category`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
  return {
    careLevel: 'BAIXO',
    description: 'Camiseta confortável de algodão',
    details: [
      {
        color: 'AZUL',
        id: 1,
        size: 'M',
        stock: 100,
      },
    ],
    id: 1,
    image: 'http://exemplo.com/imagens/camiseta.jpg',
    price: 60,
    product: {
      category: {
        id: 1,
        name: 'Roupas',
      },
      id: 1,
      name: 'Camiseta',
    },
    seller: {
      id: 1,
      realName: 'Loja do João',
      image: 'https://example.com/imagens/loja.jpg',
    },
    title: 'Camiseta Básica Azul',
  };
};

export const productService = {
  getCategories,
  getCategorizedProducts,
  getCategoryById,
  getProductById,
};
