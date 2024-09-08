import { PricingApi } from '@pokemon-pet-shop/typing';

import { axiosInstance } from '../common/utils/api.util';

export const getPricing = async () => {
  return (await axiosInstance.get<PricingApi>('pricing')).data;
};
