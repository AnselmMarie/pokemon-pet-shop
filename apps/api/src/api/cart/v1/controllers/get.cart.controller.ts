import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { getCartService } from '../services/get.cart.service';

export const getCartController = async (
  req: Request<null, null, null, null>,
  res: Response
) => {
  try {
    const pokemonDetail = await getCartService().catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(200).json(pokemonDetail);
  } catch (err: any) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};
