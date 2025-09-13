import { IOrder } from 'interfaces';

let draftOrder: IOrder | null = {
  id: 3,
  clientId: 1,
  totalPrice: 75.5,
  paymentMethod: 'CARTAO',
  status: 'DRAFT',
  completeDate: '2023-03-20',
  seller: {
    id: 1,
    realName: 'Loja Exemplo',
    userId: 2,
    bankingInfoId: 1,
    image: 'https://via.placeholder.com/150',
    user: {
      id: 2,
      name: 'Loja Exemplo',
      phone: '123456789',
      address: {
        street: 'Rua Exemplo',
        number: '123',
        city: 'Cidade',
        state: 'Estado',
        zipCode: '00000-000',
        country: 'País',
      },
      identifier: '00.000.000/0001-00',
      documentPath: '',
    },
  },
  products: [
    {
      id: 3,
      quantity: 3,
      orderId: 3,
      sellerProductId: 'SP003',
      title: 'Produto 3',
      price: 75.5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      quantity: 1,
      orderId: 3,
      sellerProductId: 'SP004',
      title: 'Produto 4',
      price: 25.0,
      image: 'https://via.placeholder.com/150',
    },
  ],
};

const getUserOrders = async (userId: number): Promise<IOrder[]> => {
  // Simulação de chamada à API para obter pedidos do usuário
  return [
    {
      id: 1,
      clientId: userId,
      totalPrice: 100,
      paymentMethod: 'CARTAO',
      status: 'COMPLETED',
      seller: {
        id: 1,
        realName: 'Loja Exemplo',
        image: 'https://via.placeholder.com/150',
        userId: 2,
        bankingInfoId: 1,
        user: {
          id: 2,
          name: 'Loja Exemplo',
          phone: '123456789',
          address: {
            street: 'Rua Exemplo',
            number: '123',
            city: 'Cidade',
            state: 'Estado',
            zipCode: '00000-000',
            country: 'País',
          },
          identifier: '00.000.000/0001-00',
          documentPath: '',
        },
      },
      completeDate: '2023-01-01',
      products: [
        {
          id: 1,
          quantity: 2,
          orderId: 1,
          sellerProductId: 'SP001',
          title: 'Produto 1',
          price: 100,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 11,
          quantity: 1,
          orderId: 1,
          color: 'VERMELHO',
          size: 'M',
          sellerProductId: 'SP001',
          title: 'Produto 1',
          price: 100,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
    {
      id: 2,
      clientId: userId,
      totalPrice: 250,
      paymentMethod: 'PIX',
      status: 'COMPLETED',
      completeDate: '2023-02-15',
      seller: {
        id: 1,
        realName: 'Loja Exemplo',
        userId: 2,
        bankingInfoId: 1,
        image: 'https://via.placeholder.com/150',
        user: {
          id: 2,
          name: 'Loja Exemplo',
          phone: '123456789',
          address: {
            street: 'Rua Exemplo',
            number: '123',
            city: 'Cidade',
            state: 'Estado',
            zipCode: '00000-000',
            country: 'País',
          },
          identifier: '00.000.000/0001-00',
          documentPath: '',
        },
      },
      products: [
        {
          id: 2,
          title: 'Produto 2',
          quantity: 1,
          orderId: 2,
          sellerProductId: 'SP002',
          price: 250,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
    {
      id: 3,
      clientId: userId,
      totalPrice: 75.5,
      paymentMethod: 'CARTAO',
      status: 'DRAFT',
      completeDate: '2023-03-20',
      seller: {
        id: 1,
        realName: 'Loja Exemplo',
        userId: 2,
        bankingInfoId: 1,
        image: 'https://via.placeholder.com/150',
        user: {
          id: 2,
          name: 'Loja Exemplo',
          phone: '123456789',
          address: {
            street: 'Rua Exemplo',
            number: '123',
            city: 'Cidade',
            state: 'Estado',
            zipCode: '00000-000',
            country: 'País',
          },
          identifier: '00.000.000/0001-00',
          documentPath: '',
        },
      },
      products: [
        {
          id: 3,
          quantity: 3,
          orderId: 3,
          sellerProductId: 'SP003',
          title: 'Produto 3',
          price: 75.5,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
  ];
};

const getDraftOrder = async (): Promise<IOrder | null> => {
  return new Promise((resolve) => setTimeout(() => resolve(draftOrder), 500));
};

const updateDraftOrder = async (productId: number, quantity: number): Promise<IOrder | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (draftOrder) {
        const productIndex = draftOrder.products.findIndex((p) => p.id === productId);
        if (productIndex !== -1) {
          draftOrder.products[productIndex].quantity = quantity;
        }
      }
      resolve(draftOrder);
    }, 500);
  });
};

const removeProductFromDraftOrder = async (productId: number): Promise<IOrder | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (draftOrder) {
        draftOrder.products = draftOrder.products.filter((p) => p.id !== productId);
      }
      resolve(draftOrder);
    }, 500);
  });
};

const getOrderById = async (orderId: number): Promise<IOrder | null> => {
  const orders = await getUserOrders(1);
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.driver = {
      name: 'João da Silva',
      plate: 'ABC-1234',
      vehicle: 'Honda Civic',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    };
  }
  return new Promise((resolve) => setTimeout(() => resolve(order || null), 500));
};

export const orderService = {
  getUserOrders,
  getDraftOrder,
  updateDraftOrder,
  removeProductFromDraftOrder,
  getOrderById,
};
