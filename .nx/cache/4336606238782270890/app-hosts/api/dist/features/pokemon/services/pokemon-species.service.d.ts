import { PokemonSpeciesFlavorTextEntry, PokemonSpeciesGeneraEntry, PokemonSpeciesParamsProps } from '../pokemon.types';
export declare const getPokemonSpeciesService: ({ id }: PokemonSpeciesParamsProps) => Promise<{
    flavor_text_entries: PokemonSpeciesFlavorTextEntry | undefined;
    genera: PokemonSpeciesGeneraEntry | undefined;
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
}>;
//# sourceMappingURL=pokemon-species.service.d.ts.map