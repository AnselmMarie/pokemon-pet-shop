import { errFormat500ResponseUtil } from '../../../shared/middleware';
import { getPricingDataCall } from '../../../database/repositories';

const getPricingService = async () => {
  return await getPricingDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
};

export { getPricingService };
