import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Footer } from '@features/footer';

import { AppProvider } from '../providers/app-provider';

import '../styles.css';

export const App = () => {
  return (
    <AppProvider>
      <SafeAreaView>
        {/* <Header />
        <HomepageModule /> */}
        <Text>fasdfsaf</Text>
        <Footer />
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
