export interface PokemonSpeciesEggGroups {
  name: string;
  url: string;
}

export interface PokemonSpeciesColor {
  name: string;
  url: string;
}

export interface PokemonSpeciesEvolvesFromSpecies {
  name: string;
  url: string;
}

export interface PokemonSpeciesGeneration {
  name: string;
  url: string;
}

export interface PokemonSpeciesGrowthRate {
  name: string;
  url: string;
}

export interface PokemonSpeciesHabitat {
  name: string;
  url: string;
}

export interface PokemonSpeciesEvolutionChain {
  url: string;
}

export interface PokemonSpeciesShape {
  name: string;
  url: string;
}

export interface PokemonSpeciesVarieties {
  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  };
}

export interface PokemonSpeciesFlavorTextEntries {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

export interface PokemonSpeciesGenera {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: PokemonSpeciesColor;
  egg_groups: PokemonSpeciesEggGroups[];
  evolution_chain: PokemonSpeciesEvolutionChain;
  evolves_from_species: PokemonSpeciesEvolvesFromSpecies | null;
  forms_switchable: boolean;
  gender_rate: number;
  generation: PokemonSpeciesGeneration;
  growth_rate: PokemonSpeciesGrowthRate;
  habitat: PokemonSpeciesHabitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
  shape: PokemonSpeciesShape;
  varieties: PokemonSpeciesVarieties[];
  flavor_text_entries: PokemonSpeciesFlavorTextEntries;
  genera: PokemonSpeciesGenera;
}
