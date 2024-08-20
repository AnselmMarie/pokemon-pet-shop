import { useMemo } from 'react';

interface UseCardReturn {
  getPokemonDetail: any;
  getThemeClass: any;
}

const usePokemonCard = (dataDetail: any): UseCardReturn => {
  /** This needs to change once the apps calls multiple different detail */
  const getPokemonDetail = useMemo(() => {
    return dataDetail;
  }, [dataDetail]);

  const getThemeClass = useMemo(() => {
    const typeName = getPokemonDetail?.types[0]?.type?.name;
    return `${typeName}Theme`;
  }, [getPokemonDetail]);

  return {
    getPokemonDetail,
    getThemeClass,
  };
};

export default usePokemonCard;
