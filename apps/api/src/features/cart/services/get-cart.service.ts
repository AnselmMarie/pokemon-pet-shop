import { errFormat500ResponseUtil } from '../../../shared/middleware';
import { getCartDataCall } from '../../../database/repositories';

export const getCartService = async () => {
  return await getCartDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
};
