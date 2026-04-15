import '../global.css';
import 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@pokemon-pet-shop/feature-header';
import { Footer } from '@pokemon-pet-shop/feature-footer';
import { PokemonList } from '@pokemon-pet-shop/feature-pokemon';

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
