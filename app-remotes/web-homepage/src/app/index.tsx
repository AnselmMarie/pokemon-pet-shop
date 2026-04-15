import { PokemonList, PokemonListSkeleton } from '@pokemon-pet-shop/feature-pokemon';
import { SuspenseBoundary } from '@pokemon-pet-shop/ui-components';

import '../styles.css';

const App = () => {
  return (
    <SuspenseBoundary fallback={<PokemonListSkeleton />}>
      <PokemonList />
    </SuspenseBoundary>
  );
};

export default App;
