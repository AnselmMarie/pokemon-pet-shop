import { Request, Response } from 'express';

import { errFormat500ResponseUtil, errFormatResponseUtil } from '../../../shared/middleware/error';
import { CartParamsProps } from '../cart.types';
import { deleteCartItemService } from '../services/delete-cart.service';

export const deleteCartItemController = async (
  req: Request<CartParamsProps, null, null, null>,
  res: Response
) => {
  const { params } = req;

  try {
    await deleteCartItemService(params?.id).catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(204).json();
  } catch (err: unknown) {
    res.status((err as { status: number })?.status || 500).json(errFormatResponseUtil(err));
  }
};
