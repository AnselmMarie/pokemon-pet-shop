import { Request, Response } from 'express';

import { errFormatResponseUtil } from '../../../../utils/err.format.response.util';
import { clearCartService, getCartService, updateCartService } from '../services/cart.service';

const getCartController = async (req: Request<null, null, null, null>, res: Response) => {
  try {
    const pokemonDetail = await getCartService();

    res.status(200).json(pokemonDetail);
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

interface CartBodyProps {
  id: string;
}

const updateCartController = async (
  req: Request<null, null, CartBodyProps, null>,
  res: Response
) => {
  const { body } = req;

  try {
    const pokemonDetail = await updateCartService(body);

    res.status(200).json(pokemonDetail);
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

const clearCartController = async (req: Request<null, null, null, null>, res: Response) => {
  try {
    const pokemonDetail = await clearCartService();

    res.status(200).json(pokemonDetail);
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getCartController, updateCartController, clearCartController };
