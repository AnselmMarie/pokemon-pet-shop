import { render } from '@testing-library/react';

import PokemonPetShopFooter from './footer';

describe('PokemonPetShopFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonPetShopFooter />);
    expect(baseElement).toBeTruthy();
  });
});
