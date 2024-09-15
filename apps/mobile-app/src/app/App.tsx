import { useRef } from 'react';

import { UiHeader } from '@pokemon-pet-shop/features';
import { UiModal } from '@pokemon-pet-shop/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import 'react-native-svg';
import Homepage from '../homepage/homepage';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

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
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Homepage />
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
