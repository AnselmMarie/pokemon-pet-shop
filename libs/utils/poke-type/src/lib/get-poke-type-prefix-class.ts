export const getPokeTypePrefixClass = (
  typeData: PokemonDetail.PokemonDetailTypes[]
): PokemonTypes.IconPokeListType => {
  const typeName = typeData?.[0]?.type?.name;
  return `${typeName}Type` as PokemonTypes.IconPokeListType;
};
