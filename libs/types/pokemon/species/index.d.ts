declare global {
  namespace PokemonSpecies {
    interface EggGroups {
      name: string;
      url: string;
    }

    interface Color {
      name: string;
      url: string;
    }

    interface EvolvesFromSpecies {
      name: string;
      url: string;
    }

    interface Generation {
      name: string;
      url: string;
    }

    interface GrowthRate {
      name: string;
      url: string;
    }

    interface Habitat {
      name: string;
      url: string;
    }

    interface EvolutionChain {
      url: string;
    }

    interface Shape {
      name: string;
      url: string;
    }

    interface Varieties {
      is_default: boolean;
      pokemon: {
        name: string;
        url: string;
      };
    }

    interface PokemonSpeciesFlavorTextEntries {
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

    interface Genera {
      genus: string;
      language: {
        name: string;
        url: string;
      };
    }

    interface Species {
      base_happiness: number;
      capture_rate: number;
      color: Color;
      egg_groups: EggGroups[];
      evolution_chain: EvolutionChain;
      evolves_from_species: EvolvesFromSpecies | null;
      forms_switchable: boolean;
      gender_rate: number;
      generation: Generation;
      growth_rate: GrowthRate;
      habitat: Habitat;
      has_gender_differences: boolean;
      hatch_counter: number;
      id: number;
      is_baby: boolean;
      is_legendary: boolean;
      is_mythical: boolean;
      name: string;
      order: number;
      shape: Shape;
      varieties: Varieties[];
      flavor_text_entries: PokemonSpeciesFlavorTextEntries;
      genera: Genera;
    }
  }
}

export {};
