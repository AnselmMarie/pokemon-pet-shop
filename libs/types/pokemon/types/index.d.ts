declare global {
  namespace PokemonTypes {
    type IconPokeList =
      | 'bug'
      | 'dark'
      | 'dragon'
      | 'electric'
      | 'fairy'
      | 'fighting'
      | 'fire'
      | 'flying'
      | 'ghost'
      | 'grass'
      | 'ground'
      | 'ice'
      | 'normal'
      | 'poison'
      | 'psychic'
      | 'rock'
      | 'steel'
      | 'water';

    type IconPokeListType = `${IconPokeList}Type`;
  }
}

export {};
