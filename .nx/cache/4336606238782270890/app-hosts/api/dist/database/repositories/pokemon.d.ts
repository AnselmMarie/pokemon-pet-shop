import { PokemonPricing } from '@pokemon-pet-shop/types';
export declare const pricingDatabase: {
    stages: {
        '1': {
            price: number;
        };
        '2': {
            price: number;
        };
        '3': {
            price: number;
        };
    };
    legendary: {
        price: number;
    };
    mythical: {
        price: number;
    };
};
export declare const getPricingDataCall: () => Promise<PokemonPricing>;
//# sourceMappingURL=pokemon.d.ts.map