import '../global.css';
import 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@features/header';
import { Footer } from '@features/footer';
import { PokemonList } from '@features/pokemon';

import { AppProvider } from '../providers/app-provider';

export const App = () => {
  return (
    <AppProvider>
      <Header />
      <SafeAreaView>
        <PokemonList />
        <Footer />
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
