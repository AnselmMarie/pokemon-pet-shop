import { IconPokeListType, PokemonDetailTypes } from '@pokemon-pet-shop/types';

export const getPokeTypePrefixClass = (typeData: PokemonDetailTypes[]): IconPokeListType => {
  const typeName = typeData?.[0]?.type?.name;
  return `${typeName}Type` as IconPokeListType;
};
