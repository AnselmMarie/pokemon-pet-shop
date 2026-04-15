import { ReactElement } from 'react';
import { IconPokeListType, PokemonDetailBase } from '@pokemon-pet-shop/types';
interface PokemonDetailModalHeaderProps {
    pokeCreature: PokemonDetailBase & {
        name: string;
    };
    pokeTypeClass: IconPokeListType;
}
export declare const PokemonDetailModalHeader: ({ pokeCreature, pokeTypeClass, }: PokemonDetailModalHeaderProps) => ReactElement;
export {};
//# sourceMappingURL=pokemon-detail-modal-header.d.ts.map