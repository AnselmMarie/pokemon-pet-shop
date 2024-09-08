import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { PokemonDetailsParamsProps } from '../interface/pokemon.interface';
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
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getPokemonDetailsController };
