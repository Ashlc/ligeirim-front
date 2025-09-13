import { IOrder } from 'interfaces';

const CART_URL = 'http://192.168.0.15:5000/cart';
const ORDERS_URL = 'http://192.168.0.15:5000/orders';

export const getUserOrders = async (userId: number): Promise<IOrder[]> => {
  try {
    const res = await fetch(`${ORDERS_URL}/client/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`Nenhum pedido encontrado para o usuário ${userId}`);
      return [];
    }

    const orders = await res.json() as IOrder[];

    return orders
  } catch (err) {
    console.error('Erro na chamada getUserOrders:', err);
    return [];
  }
};

const getDraftOrder = async (clientId: number): Promise<IOrder | null> => {
  try{
    const res = await fetch(`${CART_URL}/client/${clientId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`Nenhum carrinho encontrado para o cliente ${clientId}`);
      return null;
    }

    const data = await res.json();

    return data;

  } catch (err) {
    console.log('Erro na chamada getDraftOrder')
    throw err;
  }
};

const updateDraftOrder = async (productId: number, quantity: number, clientId: number): Promise<{message: string} | null> => {
  try {
    const res = await fetch(`${CART_URL}/client/${clientId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        { seller_product_id: productId, quantity }
      ]),
    });

    if (!res.ok) {
      throw new Error(`Erro ao atualizar carrinho: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Erro na chamada updateDraftOrder:', err);
    return null;
  }
};

const removeProductFromDraftOrder = async (productId: number, clientId: number, orderId: number): Promise<{message: string} | null> => {
  try {
    const res = await fetch(`${CART_URL}/${orderId}/product/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`Erro ao remover produto do carrinho: ${res.status}`);
    }

    const data = await res.json() as {message: string} | null;

    return data;
  } catch (err) {
    console.error('Erro na chamada removeProductFromDraftOrder:', err);
    return null;
  }
};

export const getOrderById = async (orderId: number): Promise<IOrder | null> => {
  try {
    // Chama o backend para buscar o pedido
    const res = await fetch(`${CART_URL}/order/${orderId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      console.warn(`Pedido ${orderId} não encontrado`);
      return null;
    }

    const order = await res.json() as IOrder;

    order.driver = {
      id: 1,
      category: 'CAR',
      userId: 12,
      name: 'João da Silva',
      plate: 'ABC-1234',
      vehicle: 'Honda Civic',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    };

    return order;
  } catch (err) {
    console.error('Erro na chamada getOrderById:', err);
    return null;
  }
};

export const orderService = {
  getUserOrders,
  getDraftOrder,
  updateDraftOrder,
  removeProductFromDraftOrder,
  getOrderById,
};
