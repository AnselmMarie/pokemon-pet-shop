/* eslint-disable @typescript-eslint/no-unused-vars */
import { errFormat500ResponseUtil } from '../../../../utils/err.format.response.util';
import { PokemonDetailQueryProps } from '../interface/pokemon.interface';

const getPokemonDetailService = async ({ id }: PokemonDetailQueryProps) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).catch(() => {
    throw errFormat500ResponseUtil();
  });

  if (res.ok) {
    const {
      cries,
      forms,
      game_indices,
      held_items,
      moves,
      sprites,
      past_abilities,
      past_types,
      location_area_encounters,
      ...args
    } = await res.json();

    return {
      ...args,
      sprites: {
        other: {
          ['official-artwork']: sprites?.other?.['official-artwork'],
        },
      },
    };
  }
};

export { getPokemonDetailService };
