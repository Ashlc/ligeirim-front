const orderStatus = {
  DRAFT: 'Rascunho',
  PENDING: 'Pendente',
  SHIPPED: 'Enviado',
  COMPLETED: 'Finalizado',
  CANCELED: 'Cancelado',
};

export const orderStatusColor = {
  DRAFT: 'text-gray-500',
  PENDING: 'text-indigo-500',
  SHIPPED: 'text-blue-500',
  COMPLETED: 'text-indigo-500',
  CANCELED: 'text-red-500',
};

export default orderStatus;
