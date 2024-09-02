interface EggGroupsObj {
  name: string;
  url: string;
}

interface ColorObj {
  name: string;
  url: string;
}

interface EvolvesFromSpeciesObj {
  name: string;
  url: string;
}

interface GenerationObj {
  name: string;
  url: string;
}

interface GrowthRateObj {
  name: string;
  url: string;
}

interface HabitatObj {
  name: string;
  url: string;
}

interface EvolutionChainObj {
  url: string;
}

interface ShapeObj {
  name: string;
  url: string;
}

interface VarietiesObj {
  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  };
}

interface FlavorTextEntriesObj {
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

interface GeneraObj {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export interface PokemonSpeciesApi {
  base_happiness: number;
  capture_rate: number;
  color: ColorObj;
  egg_groups: EggGroupsObj[];
  evolution_chain: EvolutionChainObj;
  evolves_from_species: EvolvesFromSpeciesObj | null;
  forms_switchable: boolean;
  gender_rate: number;
  generation: GenerationObj;
  growth_rate: GrowthRateObj;
  habitat: HabitatObj;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
  shape: ShapeObj;
  varieties: VarietiesObj[];
  flavor_text_entries: FlavorTextEntriesObj;
  genera: GeneraObj;
}
