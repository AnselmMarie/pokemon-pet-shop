import { AxiosResponse } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { PokemonPricing } from '@pokemon-pet-shop/types';
import { axiosInstance } from '@pokemon-pet-shop/util-api-client';

export const useGetPokemonPricing = () => {
  const queryFn = () => axiosInstance.get<PokemonPricing>('pokemon/pricing');

  return useSuspenseQuery({
    queryKey: ['pricing'],
    queryFn: () => queryFn(),
    select: (r: AxiosResponse<PokemonPricing>) => r?.data,
  });
};
