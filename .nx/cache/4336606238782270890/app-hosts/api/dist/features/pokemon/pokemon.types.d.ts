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
/**
 * Raw response shape from PokéAPI /pokemon/{id} endpoint.
 * Fields like cries, forms, moves, etc. are excluded from the
 * service response and typed as unknown.
 */
export interface PokemonDetailApiResponse {
    cries: unknown;
    forms: unknown[];
    game_indices: unknown[];
    held_items: unknown[];
    moves: unknown[];
    sprites: {
        other?: {
            'official-artwork'?: {
                front_default: string;
                front_shiny: string;
            };
        };
    };
    past_abilities: unknown[];
    past_types: unknown[];
    location_area_encounters: string;
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    weight: number;
}
interface LocalizedEntry {
    language: {
        name: string;
        url: string;
    };
}
export interface PokemonSpeciesFlavorTextEntry extends LocalizedEntry {
    flavor_text: string;
    version: {
        name: string;
        url: string;
    };
}
export interface PokemonSpeciesGeneraEntry extends LocalizedEntry {
    genus: string;
}
/**
 * Raw response shape from PokéAPI /pokemon-species/{id} endpoint.
 * Fields like genera, pokedex_numbers, names, etc. are excluded or
 * filtered in the service response.
 */
export interface PokemonSpeciesApiResponse {
    genera: PokemonSpeciesGeneraEntry[];
    pokedex_numbers: unknown[];
    form_descriptions: unknown[];
    pal_park_encounters: unknown[];
    flavor_text_entries: PokemonSpeciesFlavorTextEntry[];
    names: unknown[];
    base_happiness: number;
    capture_rate: number;
    color: {
        name: string;
        url: string;
    };
    egg_groups: {
        name: string;
        url: string;
    }[];
    evolution_chain: {
        url: string;
    };
    evolves_from_species: {
        name: string;
        url: string;
    } | null;
    forms_switchable: boolean;
    gender_rate: number;
    generation: {
        name: string;
        url: string;
    };
    growth_rate: {
        name: string;
        url: string;
    };
    habitat: {
        name: string;
        url: string;
    };
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    order: number;
    shape: {
        name: string;
        url: string;
    };
    varieties: {
        is_default: boolean;
        pokemon: {
            name: string;
            url: string;
        };
    }[];
}
export {};
//# sourceMappingURL=pokemon.types.d.ts.map