import { useRef } from 'react';

import { UiHeader } from '@pokemon-pet-shop/features';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import 'react-native-svg';

import Homepage from './homepage';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
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
          style={styles.scrollView}
        >
          <Homepage />
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});

export default App;
