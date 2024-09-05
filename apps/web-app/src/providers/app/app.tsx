import { ReactElement, StrictMode } from 'react';

import { UiElementLayout, UiModal } from '@pokemon-pet-shop/ui';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Homepage from '../../pages/homepage';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

const App = (): ReactElement => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <UiElementLayout>
          <UiElementLayout>
            <Homepage />
          </UiElementLayout>
          <UiModal />
        </UiElementLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
