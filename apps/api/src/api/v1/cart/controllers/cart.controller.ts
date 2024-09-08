import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { CartParamsProps } from '../interface/cart.interface';
import {
  getCartService,
  deleteCartItemService,
  updateCartItemService,
} from '../services/cart.service';

const getCartController = async (req: Request<null, null, null, null>, res: Response) => {
  try {
    const pokemonDetail = await getCartService().catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(200).json(pokemonDetail);
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

interface CartBodyProps {
  id: string;
}

const updateCartItemController = async (
  req: Request<null, null, CartBodyProps, null>,
  res: Response
) => {
  const { body } = req;

  try {
    const pokemonUpdate = await updateCartItemService(body).catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(200).json(pokemonUpdate);
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

const deleteCartItemController = async (
  req: Request<CartParamsProps, null, null, null>,
  res: Response
) => {
  const { params } = req;

  try {
    await deleteCartItemService(params?.id).catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(204).json();
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getCartController, updateCartItemController, deleteCartItemController };
