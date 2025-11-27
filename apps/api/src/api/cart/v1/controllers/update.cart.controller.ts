import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import type { CartBodyProps } from '../interface/cart.interface';
import { updateCartItemService } from '../services/update.cart.service';

export const updateCartItemController = async (
  req: Request<null, null, CartBodyProps, null>,
  res: Response
) => {
  const { body } = req;

  try {
    const pokemonUpdate = await updateCartItemService(body).catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(200).json(pokemonUpdate);
  } catch (err: any) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};
