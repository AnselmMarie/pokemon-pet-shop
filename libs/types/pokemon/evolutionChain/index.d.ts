declare global {
  namespace PokemonEvolution {
    interface EvolvesTo {
      evolution_details: EvolutionDetails[];
      evolves_to: EvolutionDetails[];
      is_baby: boolean;
      species: {
        name: string;
        url: string;
      };
    }

    interface EvolutionDetails {
      gender: string | null;
      held_item: string | null;
      item: string;
      known_move: string | null;
      known_move_type: string | null;
      location: string | null;
      min_affection: string | null;
      min_beauty: string | null;
      min_happiness: string | null;
      min_level: number;
      needs_overworld_rain: boolean;
      party_species: string | null;
      party_type: string | null;
      relative_physical_stats: string | null;
      time_of_day: string;
      evolves_to?: EvolvesTo;
      trade_species: string | null;
      trigger: {
        name: string;
        url: string;
      };
      turn_upside_down: boolean;
    }

    interface Chain {
      evolution_details: [];
      evolves_to: EvolvesTo[];
      is_baby: boolean;
      species: {
        name: string;
        url: string;
      };
    }

    interface EvolutionChain {
      baby_trigger_item: null;
      chain: Chain;
      id: number;
    }
  }
}

export {};
