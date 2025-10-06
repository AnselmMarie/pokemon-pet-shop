import { render } from '@testing-library/react';

import PokemonPetShopTypography from './typography';

describe('PokemonPetShopTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonPetShopTypography />);
    expect(baseElement).toBeTruthy();
  });
});
