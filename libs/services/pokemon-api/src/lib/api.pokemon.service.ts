// import { InfiniteData } from '@tanstack/react-query';

// import { axiosInstance } from '@utils/apiClient';

// export const getPokemonList = async ({ pageParam }: { pageParam: number }) => {
//   return (
//     await axiosInstance.get<
//       InfiniteData<Pokemon.Creature, unknown> | undefined
//     >(`pokemon/list?limit=50&offset=${pageParam}`)
//   ).data;
// };

// export const getPokemonSpecies = async (id: string | undefined) => {
//   return (
//     await axiosInstance.get<PokemonSpecies.Species>(`pokemon/species/${id}`)
//   ).data;
// };
