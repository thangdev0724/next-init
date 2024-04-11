import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const getQueryClient = cache(() => queryClient);
