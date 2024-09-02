interface AbilityObj {
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

interface TypesObj {
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

export interface PokemonAbilityApi {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  weight: number;
  order: number;
  species: SpeciesObj[];
  stats: StatsObj[];
  types: TypesObj[];
  sprites: SpritesObj[];
  abilities: AbilityObj[];
}
