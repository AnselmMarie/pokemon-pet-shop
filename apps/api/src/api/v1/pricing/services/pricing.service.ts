import { errFormat500ResponseUtil } from '../../../../utils/err.format.response.util';
import { getPricingDataCall } from '../database/pricing.database';

const getPricingService = async () => {
  return await getPricingDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
};

export { getPricingService };
