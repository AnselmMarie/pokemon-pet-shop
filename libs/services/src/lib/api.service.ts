import axios from 'axios';

const BASE_URL = `http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/`;

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getPokemonList = async ({ pageParam }: { pageParam: number }) => {
  return (await axiosInstance.get<any[]>(`pokemon/list?limit=50&offset=${pageParam}`)).data;
};

export const getPokemonSpecies = async (id: number) => {
  return (await axiosInstance.get<any>(`pokemon/species/${id}`)).data;
};
