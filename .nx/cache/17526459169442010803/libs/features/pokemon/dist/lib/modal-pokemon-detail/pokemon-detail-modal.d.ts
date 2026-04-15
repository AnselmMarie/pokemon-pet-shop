import { ReactElement } from 'react';
import { PokemonDetailBase } from '@pokemon-pet-shop/types';
interface PokemonDetailModalProps {
    pokeCreature: PokemonDetailBase & {
        name: string;
    };
    isOpen: boolean;
    onCloseModal: () => void;
}
export declare const PokemonDetailModal: ({ pokeCreature, isOpen, onCloseModal, }: PokemonDetailModalProps) => ReactElement;
export {};
//# sourceMappingURL=pokemon-detail-modal.d.ts.map