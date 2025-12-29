import { StrictMode } from 'react';
import { Provider } from 'jotai';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Provider>{children}</Provider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </StrictMode>
  );
};
