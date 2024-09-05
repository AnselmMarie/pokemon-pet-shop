import { useMemo } from 'react';

const usePokemonTheme = (typeData) => {
  const getThemeClass = useMemo(() => {
    const typeName = typeData[0]?.type?.name;
    return `${typeName}Theme`;
  }, [typeData]);

  return {
    getThemeClass,
  };
};

export { usePokemonTheme };
