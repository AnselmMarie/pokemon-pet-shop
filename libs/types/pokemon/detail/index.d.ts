declare global {
  namespace PokemonDetail {
    interface PokemonDetailAbility {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }

    interface Species {
      name: string;
      url: string;
    }

    interface Stats {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }

    interface PokemonDetailTypes {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }

    interface Sprites {
      other: {
        'official-artwork': {
          front_default: string;
          front_shiny: string;
        };
      };
    }

    interface Base {
      base_experience: number;
      height: number;
      id: number;
      is_default: boolean;
      weight: number;
      order: number;
      species: Species[];
      stats: Stats[];
      types: PokemonDetailTypes[];
      sprites: Sprites;
      abilities: PokemonDetailAbility[];
      is_legendary: boolean;
      is_mythical: boolean;
    }
  }
}

export {};
