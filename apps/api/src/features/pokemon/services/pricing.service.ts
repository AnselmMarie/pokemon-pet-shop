import { errFormat500ResponseUtil } from '../../../shared/middleware';
import { getPricingDataCall } from '../../../database/repositories';

export const getPricingService = async () => {
  return await getPricingDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
};
