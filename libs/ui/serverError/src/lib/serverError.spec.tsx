import { render } from '@testing-library/react';

import PokemonPetShopServerError from './serverError';

describe('PokemonPetShopServerError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonPetShopServerError />);
    expect(baseElement).toBeTruthy();
  });
});
