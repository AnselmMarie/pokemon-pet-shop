import { errFormat500ResponseUtil } from '../../../shared/middleware/error.middleware';
import { getCartDataCall } from '../../../database/repositories/cart.repository';

export const getCartService = async () => {
  return await getCartDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
};

