import { errFormat500ResponseUtil } from '../../../../utils/err.format.response.util';
import { getCartDataCall } from '../database/cart.database';

export const getCartService = async () => {
  return await getCartDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
};
