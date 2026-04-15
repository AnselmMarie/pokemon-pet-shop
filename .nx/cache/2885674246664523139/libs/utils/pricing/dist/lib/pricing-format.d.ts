import { PokemonEvolutionChain, PokemonPricing } from '@pokemon-pet-shop/types';
export declare const pricingFormat: (pokemonData: {
    name?: string;
    isMythical?: boolean;
    isLegendary?: boolean;
    chainData?: PokemonEvolutionChain;
}, pricingData: PokemonPricing, returnAsNum?: boolean) => number | string;
//# sourceMappingURL=pricing-format.d.ts.map