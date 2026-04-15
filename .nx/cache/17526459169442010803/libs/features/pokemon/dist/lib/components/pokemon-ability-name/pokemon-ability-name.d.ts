import { ReactElement } from 'react';
import { IconPokeListType, PokemonDetailAbility, PokemonDetailTypes } from '@pokemon-pet-shop/types';
interface PokemonAbilityNameProps {
    abilityData: PokemonDetailAbility;
    typeData: PokemonDetailTypes[];
    pokeTypeClass: IconPokeListType;
    showAtkLine?: boolean;
    displayInDetail?: boolean;
}
export declare const PokemonAbilityName: ({ abilityData, typeData, pokeTypeClass, showAtkLine, displayInDetail, }: PokemonAbilityNameProps) => ReactElement;
export {};
//# sourceMappingURL=pokemon-ability-name.d.ts.map