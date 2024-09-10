import { useMemo } from 'react';

import { PokemonDetailTypesObj } from '@pokemon-pet-shop/typing';

const usePokemonTheme = (typeData: PokemonDetailTypesObj[]) => {
  const getThemeClass = useMemo(() => {
    const typeName = typeData[0]?.type?.name;
    return `${typeName}Theme`;
  }, [typeData]);

  return {
    getThemeClass,
  };
};

export { usePokemonTheme };