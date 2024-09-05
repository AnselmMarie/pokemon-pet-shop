import { useMemo } from 'react';

import { usePokemonTheme } from '../hooks/use.pokemone.theme.logic';

interface UseCardReturn {
  getPokemonDetail: any;
  getThemeClass: any;
}

const usePokemonCard = (dataDetail: any): UseCardReturn => {
  /** This needs to change once the apps calls multiple different detail */
  const getPokemonDetail = useMemo(() => {
    return dataDetail;
  }, [dataDetail]);

  const { getThemeClass } = usePokemonTheme(getPokemonDetail?.types);

  return {
    getPokemonDetail,
    getThemeClass,
  };
};

export default usePokemonCard;
