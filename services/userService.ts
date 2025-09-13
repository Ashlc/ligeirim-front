import { IUserProfile } from 'interfaces';

export const getMe = async (userId: number): Promise<IUserProfile> => {
  // Simulação de chamada à API para obter o perfil do usuário
  return {
    id: userId,
    name: 'Usuário Exemplo',
    phone: '1234-5678',
    identifier: '123.456.789-00',
    documentPath: '/path/to/document',
    address: {
      street: 'Rua Exemplo',
      number: '123',
      city: 'Cidade',
      state: 'Estado',
      zipCode: '00000-000',
      country: 'País',
    },
    cardsInfos: [
      {
        id: 1,
        brand: 'Visa',
        last4: '1234',
        expirationDate: '12/25',
        clientId: userId,
      },
    ],
  };
};

export const userService = {
  getMe,
};
