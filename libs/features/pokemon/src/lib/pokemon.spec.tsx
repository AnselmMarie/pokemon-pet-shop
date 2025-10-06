import { render } from '@testing-library/react';

import PokemonPetShopPokemon from './pokemon';

describe('PokemonPetShopPokemon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonPetShopPokemon />);
    expect(baseElement).toBeTruthy();
  });
});
