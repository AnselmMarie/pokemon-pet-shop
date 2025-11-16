import { useMemo } from 'react';

// import { PokemonDetailTypesObj } from '@pokemon-pet-shop/typing';

export const usePokemonTypeLogic = (typeData: any[]) => {
  const getPokeTypeClass = useMemo(() => {
    const typeName = typeData?.[0]?.type?.name;
    return `${typeName}Type`;
  }, [typeData]);

  return {
    getPokeTypeClass,
  };
};
