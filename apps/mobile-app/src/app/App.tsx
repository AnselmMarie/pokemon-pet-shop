import { UiHeader } from '@pokemon-pet-shop/features';
import { UiModal, UiScrollWrapper } from '@pokemon-pet-shop/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, StatusBar } from 'react-native';

import 'react-native-svg';
import Homepage from '../homepage/homepage';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
      <UiModal />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <UiHeader />
        <UiScrollWrapper>
          <Homepage />
        </UiScrollWrapper>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
