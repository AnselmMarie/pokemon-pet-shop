import { errFormat500ResponseUtil } from '../../../shared/middleware/error.middleware';
import { getPricingDataCall } from '../../../database/repositories/pokemon.repository';

const getPricingService = async () => {
  return await getPricingDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
};

export { getPricingService };

