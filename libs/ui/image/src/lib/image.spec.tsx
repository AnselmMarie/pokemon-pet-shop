import { render } from '@testing-library/react';

import PokemonPetShopImage from './image';

describe('PokemonPetShopImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonPetShopImage />);
    expect(baseElement).toBeTruthy();
  });
});
