import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { PokemonSpeciesParamsProps } from '../interface/pokemon.interface';
import { getPokemonEvolutionChainService } from '../services/pokemon.evolution.chain.service';
import { getPokemonSpeciesService } from '../services/pokemon.species.service';

const getPokemonSpeciesController = async (
  req: Request<PokemonSpeciesParamsProps, null, null, null>,
  res: Response
) => {
  const { params } = req;

  try {
    const finalRes = await getPokemonSpeciesService({
      id: params?.id,
    }).catch(() => {
      throw errFormat500ResponseUtil();
    });

    const evolutionChainSplit = finalRes?.evolution_chain?.url?.split('/');

    const finalEvolutionRes = await getPokemonEvolutionChainService({
      id: evolutionChainSplit[evolutionChainSplit.length - 2],
    }).catch(() => {
      throw errFormat500ResponseUtil();
    });

    res.status(200).json({
      ...finalRes,
      evolution_chain: {
        ...finalRes?.evolution_chain,
        ...finalEvolutionRes,
      },
    });
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getPokemonSpeciesController };
