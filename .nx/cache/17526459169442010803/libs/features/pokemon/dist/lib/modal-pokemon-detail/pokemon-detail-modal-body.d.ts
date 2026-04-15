import { ReactElement } from 'react';
import { IconPokeListType, PokemonDetailBase } from '@pokemon-pet-shop/types';
interface PokemonDetailModalBodyProps {
    pokeCreature: PokemonDetailBase & {
        name: string;
    };
    pokeTypeClass: IconPokeListType;
}
export declare const PokemonDetailModalBody: ({ pokeCreature, pokeTypeClass, }: PokemonDetailModalBodyProps) => ReactElement;
export {};
//# sourceMappingURL=pokemon-detail-modal-body.d.ts.map