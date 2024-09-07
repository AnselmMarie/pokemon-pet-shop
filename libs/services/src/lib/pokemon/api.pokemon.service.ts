import { axiosInstance } from '../common/utils/api.util';

export const getPokemonList = async ({ pageParam }: { pageParam: number }) => {
  return (await axiosInstance.get<any[]>(`pokemon/list?limit=50&offset=${pageParam}`)).data;
};

export const getPokemonSpecies = async (id: number) => {
  return (await axiosInstance.get<any>(`pokemon/species/${id}`)).data;
};
