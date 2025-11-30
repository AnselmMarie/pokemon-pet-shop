import { useMemo } from 'react';

export const useGetPokemonType = (typeData: any[]) => {
  const pokeTypeClass = useMemo(() => {
    const typeName = typeData?.[0]?.type?.name;
    return `${typeName}Type`;
  }, [typeData]);

  return {
    pokeTypeClass,
  };
};
