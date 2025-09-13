import { ICategorized, IProductCategory, IProductResponse } from './../interfaces/products';
import { BASE_URL } from './api';

const getCategories = async (): Promise<IProductCategory[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products/category`, {
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
    const res = await fetch(`${BASE_URL}/products/category`, {
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
}): Promise<IProductResponse[]> => {
  return [
    {
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
    },
    {
      careLevel: 'MEDIO',
      description: 'Calça jeans confortável com elastano',
      details: [
        {
          color: 'PRETO',
          id: 2,
          size: 'G',
          stock: 50,
        },
      ],
      id: 2,
      image: 'http://exemplo.com/imagens/calca.jpg',
      price: 120,
      product: {
        category: {
          id: 1,
          name: 'Roupas',
        },
        id: 2,
        name: 'Calça Jeans',
      },
      seller: {
        id: 2,
        realName: 'Moda Store',
        image: 'https://example.com/imagens/moda.jpg',
      },
      title: 'Calça Jeans Preta',
    },
    {
      careLevel: 'ALTO',
      description: 'Jaqueta de couro sintético',
      details: [
        {
          color: 'PRETO',
          id: 3,
          size: 'M',
          stock: 30,
        },
      ],
      id: 3,
      image: 'http://exemplo.com/imagens/jaqueta.jpg',
      price: 250,
      product: {
        category: {
          id: 1,
          name: 'Roupas',
        },
        id: 3,
        name: 'Jaqueta de Couro',
      },
      seller: {
        id: 3,
        realName: 'Estilo Fashion',
        image: 'https://example.com/imagens/estilo.jpg',
      },
      title: 'Jaqueta de Couro Sintético',
    },
  ];
};

export const productService = {
  getCategories,
  getCategorizedProducts,
  getCategoryById,
  getProductById,
  getProducts,
};
