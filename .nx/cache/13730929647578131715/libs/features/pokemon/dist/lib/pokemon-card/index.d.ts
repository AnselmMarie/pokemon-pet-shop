import { ReactElement } from 'react';
import { PokemonDetailBase } from '@pokemon-pet-shop/types';
interface PokemonCardProps {
    pokeCreature: PokemonDetailBase & {
        name: string;
    };
}
export declare const PokemonCard: ({ pokeCreature }: PokemonCardProps) => ReactElement;
export {};
//# sourceMappingURL=index.d.ts.map