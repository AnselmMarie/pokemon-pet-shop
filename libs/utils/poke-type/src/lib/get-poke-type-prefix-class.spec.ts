import { PokemonDetailTypes } from '@pokemon-pet-shop/types';

import { getPokeTypePrefixClass } from './get-poke-type-prefix-class';

describe('getPokeTypePrefixClass', () => {
  it('returns the type name with "Type" suffix for valid data', () => {
    const typeData: PokemonDetailTypes[] = [
      { slot: 1, type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' } },
    ];
    expect(getPokeTypePrefixClass(typeData)).toBe('fireType');
  });

  it('uses the first type when multiple types are present', () => {
    const typeData: PokemonDetailTypes[] = [
      { slot: 1, type: { name: 'grass', url: '' } },
      { slot: 2, type: { name: 'poison', url: '' } },
    ];
    expect(getPokeTypePrefixClass(typeData)).toBe('grassType');
  });

  it('returns "undefinedType" when given an empty array', () => {
    expect(getPokeTypePrefixClass([])).toBe('undefinedType');
  });

  it('returns "undefinedType" when given undefined input', () => {
    expect(getPokeTypePrefixClass(undefined as unknown as PokemonDetailTypes[])).toBe(
      'undefinedType'
    );
  });

  it('returns "undefinedType" when given null input', () => {
    expect(getPokeTypePrefixClass(null as unknown as PokemonDetailTypes[])).toBe('undefinedType');
  });

  it('works for various pokemon types', () => {
    const types: string[] = ['water', 'electric', 'psychic', 'dragon'];
    types.forEach((typeName) => {
      const typeData: PokemonDetailTypes[] = [{ slot: 1, type: { name: typeName, url: '' } }];
      expect(getPokeTypePrefixClass(typeData)).toBe(`${typeName}Type`);
    });
  });
});
