const minutes = [20, 30, 40, 50, 60];
export const randomShippingTime = () => {
  return minutes[Math.floor(Math.random() * minutes.length)];
};

// export const randomShippingCost = () => {
//   const costs = [5.99, 9.99, 12.99, 15.99];
//   return costs[Math.floor(Math.random() * costs.length)];
// };
