export interface Pricing {
    price: number;
}
export interface PricingStages {
    [key: string]: Pricing;
}
export interface PokemonPricing {
    stages: PricingStages;
    legendary: Pricing;
    mythical: Pricing;
}
//# sourceMappingURL=pokemon-pricing.d.ts.map