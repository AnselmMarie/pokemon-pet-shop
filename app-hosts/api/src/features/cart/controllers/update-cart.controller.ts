import { Request, Response } from 'express';

import { errFormat500ResponseUtil, errFormatResponseUtil } from '../../../shared/middleware';
import type { CartBodyProps } from '../cart.types';
import { updateCartItemService } from '../services/update-cart.service';

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
  } catch (err: unknown) {
    res.status((err as { status: number })?.status || 500).json(errFormatResponseUtil(err));
  }
};
