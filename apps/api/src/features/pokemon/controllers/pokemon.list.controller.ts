import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../shared/middleware/error.middleware';

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../../shared/constants/httpCodes';
import { PokemonListQueryProps } from '../pokemon.types';
import { getPokemonDetailService } from '../services/pokemon.detail.service';
import { getPokemonListService } from '../services/pokemon.list.service';

const combineListAndDetailDataUtil = (
  pokemonList: any,
  detailPromisesRes: any
) => {
  return (pokemonList?.results ?? []).map((el: any, i: number) => {
    return {
      ...el,
      ...detailPromisesRes[i + 1],
    };
  });
};

const getPokemonListController = async (
  req: Request<null, null, null, PokemonListQueryProps>,
  res: Response
) => {
  try {
    const limitQuery = req?.query?.limit || DEFAULT_LIMIT;
    const offset = req?.query?.offset || DEFAULT_OFFSET;

    const pokemonList = await getPokemonListService({
      offset,
      limit: limitQuery,
    }).catch(() => {
      throw errFormat500ResponseUtil();
    });

    const limitNumberQuery = Number(limitQuery) + 1 + Number(offset);
    const detailPromises = [];
    for (let loop = Number(offset); loop < limitNumberQuery; loop++) {
      const id = String(loop);
      detailPromises.push(
        await getPokemonDetailService({
          id,
        }).catch((err) => ({ id, err }))
      );
    }

    const detailPromisesRes = await Promise.all(detailPromises).then(
      (values) => {
        return values;
      }
    );

    const finalRes = combineListAndDetailDataUtil(
      pokemonList,
      detailPromisesRes
    );

    res.status(200).json(finalRes);
  } catch (err: any) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getPokemonListController };

