export interface PokemonDetailAbilityObj {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface SpeciesObj {
  name: string;
  url: string;
}

interface StatsObj {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonDetailTypesObj {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface SpritesObj {
  other: {
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
}

export interface PokemonDetailApi {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  weight: number;
  order: number;
  species: SpeciesObj[];
  stats: StatsObj[];
  types: PokemonDetailTypesObj[];
  sprites: SpritesObj;
  abilities: PokemonDetailAbilityObj[];
  is_legendary: boolean;
  is_mythical: boolean;
}
