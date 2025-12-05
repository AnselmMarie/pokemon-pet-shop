import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../shared/middleware/error.middleware';

import { PokemonDetailsParamsProps } from '../pokemon.types';
import { getPokemonDetailService } from '../services/pokemon.detail.service';

const getPokemonDetailsController = async (
  req: Request<PokemonDetailsParamsProps, null, null, null>,
  res: Response
) => {
  const { params } = req;

  try {
    const pokemonDetail = await getPokemonDetailService({
      id: params?.id,
    }).catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(200).json(pokemonDetail);
  } catch (err: any) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getPokemonDetailsController };

