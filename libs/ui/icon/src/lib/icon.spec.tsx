import { render } from '@testing-library/react';

import PokemonPetShopIcon from './icon';

describe('PokemonPetShopIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonPetShopIcon />);
    expect(baseElement).toBeTruthy();
  });
});
