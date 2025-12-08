import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../shared/middleware/error';
import { getCartService } from '../services/get-cart.service';

export const getCartController = async (
  req: Request<null, null, null, null>,
  res: Response
) => {
  try {
    const pokemonDetail = await getCartService().catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(200).json(pokemonDetail);
  } catch (err: unknown) {
    res
      .status((err as { status: number })?.status || 500)
      .json(errFormatResponseUtil(err));
  }
};
