interface PricingObj {
  price: number;
}

interface PricingStagesObj {
  [key: string]: PricingObj;
}

export interface PricingApi {
  stages: PricingStagesObj;
  legendary: PricingObj;
  mythical: PricingObj;
}
