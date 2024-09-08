import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { DEFAULT_LIMIT } from '../const/default.prop.const';
import { PokemonListQueryProps } from '../interface/pokemon.interface';
import { getPokemonDetailService } from '../services/pokemon.detail.service';
import { getPokemonListService } from '../services/pokemon.list.service';

const combineListAndDetailDataUtil = (pokemonList, detailPromisesRes) => {
  return (pokemonList?.results || []).map((el, i) => {
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
    const pokemonList = await getPokemonListService({
      offset: req?.query?.offset,
      limit: limitQuery,
    }).catch(() => {
      throw errFormat500ResponseUtil();
    });

    const limitNumberQuery = Number(limitQuery) + 1;
    const detailPromises = [];
    for (let loop = 0; loop < limitNumberQuery; loop++) {
      const id = String(loop);
      detailPromises.push(
        await getPokemonDetailService({
          id,
        }).catch((err) => ({ id, err }))
      );
    }

    const detailPromisesRes = await Promise.all(detailPromises).then((values) => {
      return values;
    });

    const finalRes = combineListAndDetailDataUtil(pokemonList, detailPromisesRes);

    res.status(200).json(finalRes);
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getPokemonListController };
