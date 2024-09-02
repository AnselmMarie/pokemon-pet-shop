import {
  useQuery,
  useQueries,
  keepPreviousData,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';

// import { Product } from '../types/product';

import { getPokemonList, getPokemonSpecies } from './api.service';

export function useGetPokemonList() {
  return useInfiniteQuery({
    queryKey: ['pokemonList'],
    queryFn: getPokemonList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 50;
    },
  });
}
export function useGetPokemonSpecies(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['species', { id }],
        queryFn: () => getPokemonSpecies(id!),
      };
    }),
  });
}

// export function useProduct(id: number | null) {
//   const queryClient = useQueryClient();

//   return useQuery({
//     queryKey: ['product', { id }],
//     queryFn: () => getProduct(id!),
//     enabled: !!id,
//     placeholderData: () => {
//       const cachedProducts = (
//         queryClient.getQueryData(['products']) as {
//           pages: Product[] | undefined;
//         }
//       )?.pages?.flat(2);

//       if (cachedProducts) {
//         return cachedProducts.find((item) => item.id === id);
//       }
//     },
//   });
// }
