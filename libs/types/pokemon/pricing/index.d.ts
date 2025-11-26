declare global {
  namespace PokemonPricing {
    interface Pricing {
      price: number;
    }

    interface PricingStages {
      [key: string]: Pricing;
    }

    interface Base {
      stages: PricingStages;
      legendary: Pricing;
      mythical: Pricing;
    }
  }
}

export {};
