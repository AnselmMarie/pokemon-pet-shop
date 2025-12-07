import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../shared/middleware';

import { PokemonSpeciesParamsProps } from '../pokemon.types';
import { getPokemonEvolutionChainService } from '../services/pokemon-evolution-chain.service';
import { getPokemonSpeciesService } from '../services/pokemon-species.service';

export const getPokemonSpeciesController = async (
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

    const finalEvolutionRes: PokemonEvolution.Base =
      await getPokemonEvolutionChainService({
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
  } catch (err: unknown) {
    res
      .status((err as { status: number })?.status || 500)
      .json(errFormatResponseUtil(err));
  }
};
