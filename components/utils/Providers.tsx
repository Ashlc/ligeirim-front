import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import qc from 'services/queryClient';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
};

export default Providers;
