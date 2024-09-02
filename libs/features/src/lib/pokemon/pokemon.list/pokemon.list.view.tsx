import { memo, ReactElement } from 'react';

import { UiPokemonCard } from '../pokemon.card';

import usePokemonList from './use.pokemon.list.logic';

/** Use tanstack virtual for long lists -> https://tanstack.com/virtual/latest/docs/introduction  */
const PokemonList = (): ReactElement => {
  const { data, isError, isLoading, isFetching } = usePokemonList();

  return (data?.pages[0] || []).map((el: any): ReactElement => {
    return <UiPokemonCard key={el?.name} data={el} />;
  });
};

export default memo(PokemonList);
