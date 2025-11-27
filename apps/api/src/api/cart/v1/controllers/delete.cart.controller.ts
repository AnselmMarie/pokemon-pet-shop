import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { CartParamsProps } from '../interface/cart.interface';
import { deleteCartItemService } from '../services/delete.cart.service';

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
  } catch (err: any) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};
