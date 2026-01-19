import { Request, Response } from 'express';

import { Pokemon, PokemonCreature, PokemonDetailBase } from '@pokemon-pet-shop/types';

import { errFormat500ResponseUtil, errFormatResponseUtil } from '../../../shared/middleware';

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../constants';
import { PokemonListQueryProps } from '../pokemon.types';
import { getPokemonDetailService } from '../services/pokemon-detail.service';
import { getPokemonListService } from '../services/pokemon-list.service';

const combineListAndDetailDataUtil = (
  pokemonList: Pokemon,
  detailPromisesRes: (PokemonDetailBase | { id: string; err: unknown })[]
) => {
  return (pokemonList?.results ?? []).map((el: PokemonCreature, i: number) => {
    return {
      ...el,
      ...detailPromisesRes[i + 1],
    };
  });
};

export const getPokemonListController = async (
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

    const detailPromisesRes = await Promise.all(detailPromises).then((values) => {
      return values;
    });

    const finalRes = combineListAndDetailDataUtil(pokemonList, detailPromisesRes);

    res.status(200).json(finalRes);
  } catch (err: unknown) {
    res.status((err as { status: number })?.status || 500).json(errFormatResponseUtil(err));
  }
};
