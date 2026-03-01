import { PokemonEvolutionChain, PokemonPricing } from '@pokemon-pet-shop/types';

import { pricingFormat } from './pricing-format';

const mockPricingData: PokemonPricing = {
  stages: {
    '1': { price: 1000 },
    '2': { price: 2000 },
    '3': { price: 3000 },
  },
  legendary: { price: 9999 },
  mythical: { price: 8888 },
};

const mockChainData = {
  evolution_details: [],
  evolves_to: [
    {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [],
          evolves_to: [],
          is_baby: false,
          species: { name: 'venusaur', url: '' },
        },
      ],
      is_baby: false,
      species: { name: 'ivysaur', url: '' },
    },
  ],
  is_baby: false,
  species: { name: 'bulbasaur', url: '' },
} as unknown as PokemonEvolutionChain;

describe('pricingFormat', () => {
  describe('legendary pokemon', () => {
    it('returns legendary price formatted as USD', () => {
      const result = pricingFormat(
        { name: 'mewtwo', isLegendary: true, chainData: undefined },
        mockPricingData
      );
      expect(result).toBe('$99.99');
    });

    it('returns legendary price as number when returnAsNum is true', () => {
      const result = pricingFormat(
        { name: 'mewtwo', isLegendary: true, chainData: undefined },
        mockPricingData,
        true
      );
      expect(result).toBe(9999);
    });
  });

  describe('mythical pokemon', () => {
    it('returns mythical price formatted as USD', () => {
      const result = pricingFormat(
        { name: 'mew', isMythical: true, chainData: undefined },
        mockPricingData
      );
      expect(result).toBe('$88.88');
    });

    it('mythical overrides legendary when both are true', () => {
      const result = pricingFormat(
        {
          name: 'arceus',
          isMythical: true,
          isLegendary: true,
          chainData: undefined,
        },
        mockPricingData
      );
      expect(result).toBe('$88.88');
    });
  });

  describe('base stage pokemon', () => {
    it('returns stage 1 price when name matches base chain species', () => {
      const result = pricingFormat(
        { name: 'bulbasaur', chainData: mockChainData },
        mockPricingData
      );
      expect(result).toBe('$10.00');
    });
  });

  describe('evolution chain lookup', () => {
    it('returns stage 2 price for first evolution', () => {
      const result = pricingFormat({ name: 'ivysaur', chainData: mockChainData }, mockPricingData);
      expect(result).toBe('$20.00');
    });

    it('returns stage 3 price for second evolution', () => {
      const result = pricingFormat({ name: 'venusaur', chainData: mockChainData }, mockPricingData);
      expect(result).toBe('$30.00');
    });
  });

  describe('not found', () => {
    it('returns "Price is Not Available" when pokemon not found in chain', () => {
      const result = pricingFormat({ name: 'pikachu', chainData: mockChainData }, mockPricingData);
      expect(result).toBe('Price is Not Available');
    });

    it('returns "Price is Not Available" when chainData is undefined', () => {
      const result = pricingFormat({ name: 'pikachu', chainData: undefined }, mockPricingData);
      expect(result).toBe('Price is Not Available');
    });

    it('returns stage 1 price when both name and chainData are undefined (both match as undefined)', () => {
      const result = pricingFormat({ chainData: undefined }, mockPricingData);
      // undefined === undefined evaluates to true, so stage 1 price is returned
      expect(result).toBe('$10.00');
    });
  });

  describe('returnAsNum flag', () => {
    it('returns formatted USD string by default', () => {
      const result = pricingFormat(
        { name: 'bulbasaur', chainData: mockChainData },
        mockPricingData
      );
      expect(typeof result).toBe('string');
      expect(result).toBe('$10.00');
    });

    it('returns number when returnAsNum is true', () => {
      const result = pricingFormat(
        { name: 'bulbasaur', chainData: mockChainData },
        mockPricingData,
        true
      );
      expect(result).toBe(1000);
    });
  });
});
