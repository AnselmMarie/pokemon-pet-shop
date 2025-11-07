export interface PokemonListQueryProps {
  offset?: string | string[];
  limit?: string | string[];
}

export interface PokemonDetailQueryProps {
  id: string;
}

export interface PokemonSpeciesParamsProps {
  id: string;
}

export interface PokemonDetailsParamsProps {
  id: string;
}

export interface PokemonEvolutionChainParamsProps {
  id: string;
}
