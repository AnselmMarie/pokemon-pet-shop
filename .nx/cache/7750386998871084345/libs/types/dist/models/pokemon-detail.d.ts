export interface PokemonDetailAbility {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}
export interface PokemonDetailSpecies {
    name: string;
    url: string;
}
export interface PokemonDetailStats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}
export interface PokemonDetailTypes {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}
export interface PokemonDetailSprites {
    other: {
        'official-artwork': {
            front_default: string;
            front_shiny: string;
        };
    };
}
export interface PokemonDetailBase {
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    weight: number;
    order: number;
    species: PokemonDetailSpecies[];
    stats: PokemonDetailStats[];
    types: PokemonDetailTypes[];
    sprites: PokemonDetailSprites;
    abilities: PokemonDetailAbility[];
    is_legendary: boolean;
    is_mythical: boolean;
}
//# sourceMappingURL=pokemon-detail.d.ts.map