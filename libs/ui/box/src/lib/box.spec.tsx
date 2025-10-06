import { render } from '@testing-library/react';

import PokemonPetShopBox from './box';

describe('PokemonPetShopBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonPetShopBox />);
    expect(baseElement).toBeTruthy();
  });
});
