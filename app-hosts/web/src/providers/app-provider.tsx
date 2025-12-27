import { StrictMode } from 'react';
import { Provider } from 'jotai';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider>{children}</Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
};
