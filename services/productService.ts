import { ICategorized, IProductCategory } from './../interfaces/products';

const getCategories = async (): Promise<IProductCategory[]> => {
  return [
    { id: 1, icon: 'bed', name: 'Para casa' },
    { id: 2, icon: 'car', name: 'Automotivos' },
    { id: 3, icon: 'football', name: 'Esportes' },
    { id: 4, icon: 'desktop-outline', name: 'Informática' },
    { id: 5, icon: 'shirt', name: 'Moda' },
    { id: 6, icon: 'phone-portrait', name: 'Telefonia' },
  ];
};

const getCategorizedProducts = async (): Promise<ICategorized[]> => {
  return [
    {
      id: 2,
      icon: 'car',
      name: 'Acessórios automotivos',
      products: [
        {
          id: 1,
          title: 'Tapete Automotivo Universal',
          description: 'Tapete resistente e impermeável para proteção do seu veículo',
          price: 89.9,
          image: 'https://example.com/tapete.jpg',
        },
        {
          id: 2,
          title: 'Capa para Volante',
          description: 'Capa ergonômica em couro sintético para maior conforto',
          price: 49.9,
          image: 'https://example.com/capa-volante.jpg',
        },
        {
          id: 3,
          title: 'Kit Limpeza Automotiva',
          description: 'Kit completo com shampoo, cera e panos de microfibra',
          price: 129.9,
          image: 'https://example.com/kit-limpeza.jpg',
        },
      ],
    },
    {
      id: 3,
      icon: 'football',
      name: 'Esportes',
      products: [
        {
          id: 4,
          title: 'Bola de Futebol Oficial',
          description: 'Bola oficial com tecnologia de alta durabilidade',
          price: 149.9,
          image: 'https://example.com/bola.jpg',
        },
        {
          id: 5,
          title: 'Raquete de Tênis',
          description: 'Raquete profissional com cordas de alta tensão',
          price: 199.9,
          image: 'https://example.com/raquete.jpg',
        },
        {
          id: 6,
          title: 'Kit de Yoga',
          description: 'Kit com tapete antiderrapante e blocos de apoio',
          price: 89.9,
          image: 'https://example.com/yoga.jpg',
        },
      ],
    },
    {
      id: 4,
      icon: 'desktop-outline',
      name: 'Informática',
      products: [
        {
          id: 7,
          title: 'Mouse Gamer RGB',
          description: 'Mouse com sensor óptico de alta precisão e iluminação RGB',
          price: 179.9,
          image: 'https://example.com/mouse.jpg',
        },
        {
          id: 8,
          title: 'Teclado Mecânico',
          description: 'Teclado com switches blue e retroiluminação',
          price: 299.9,
          image: 'https://example.com/teclado.jpg',
        },
        {
          id: 9,
          title: 'Headset 7.1',
          description: 'Headset com som surround 7.1 e microfone removível',
          price: 249.9,
          image: 'https://example.com/headset.jpg',
        },
      ],
    },
    {
      id: 5,
      icon: 'shirt',
      name: 'Moda',
      products: [
        {
          id: 10,
          title: 'Camiseta Básica',
          description: 'Camiseta 100% algodão em diversos tamanhos',
          price: 49.9,
          image: 'https://example.com/camiseta.jpg',
        },
        {
          id: 11,
          title: 'Calça Jeans',
          description: 'Calça jeans com elastano de alta qualidade',
          price: 159.9,
          image: 'https://example.com/calca.jpg',
        },
        {
          id: 12,
          title: 'Tênis Casual',
          description: 'Tênis confortável para uso diário',
          price: 199.9,
          image: 'https://example.com/tenis.jpg',
        },
      ],
    },
    {
      id: 6,
      icon: 'phone-portrait',
      name: 'Telefonia',
      products: [
        {
          id: 13,
          title: 'Carregador Rápido',
          description: 'Carregador com tecnologia de carga rápida 65W',
          price: 89.9,
          image: 'https://example.com/carregador.jpg',
        },
        {
          id: 14,
          title: 'Capa Protetora',
          description: 'Capa anti-impacto com proteção reforçada',
          price: 39.9,
          image: 'https://example.com/capa.jpg',
        },
        {
          id: 15,
          title: 'Película de Vidro',
          description: 'Película de vidro temperado 9H anti-riscos',
          price: 29.9,
          image: 'https://example.com/pelicula.jpg',
        },
      ],
    },
    {
      id: 1,
      icon: 'bed',
      name: 'Para casa',
      products: [
        {
          id: 16,
          title: 'Jogo de Lençóis',
          description: 'Jogo de lençóis 100% algodão 200 fios',
          price: 129.9,
          image: 'https://example.com/lencol.jpg',
        },
        {
          id: 17,
          title: 'Toalha de Banho',
          description: 'Toalha felpuda de alta absorção',
          price: 49.9,
          image: 'https://example.com/toalha.jpg',
        },
        {
          id: 18,
          title: 'Kit Panelas',
          description: 'Kit com 5 panelas antiaderentes',
          price: 299.9,
          image: 'https://example.com/panelas.jpg',
        },
      ],
    },
  ];
};

const getCategoryById = async (id: number): Promise<IProductCategory | null> => {
  const categories = await getCategories();
  return categories.find((category) => category.id === id) || null;
};

export const productService = {
  getCategories,
  getCategorizedProducts,
  getCategoryById,
};
