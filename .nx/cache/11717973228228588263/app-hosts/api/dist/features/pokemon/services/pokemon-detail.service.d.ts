import { PokemonDetailQueryProps } from '../pokemon.types';
export declare const getPokemonDetailService: ({ id }: PokemonDetailQueryProps) => Promise<{
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
                front_shiny: string;
            } | undefined;
        };
    };
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
}>;
//# sourceMappingURL=pokemon-detail.service.d.ts.map