import { Fragment, memo, ReactElement } from 'react';

import { PokemonListApi } from '@pokemon-pet-shop/typing';
import { UiButton, UiElementLayout } from '@pokemon-pet-shop/ui';

import { UiPokemonCard } from '../pokemon.card';

import { styles } from './pokemon.list.module';
import usePokemonList from './use.pokemon.list.logic';

/** Use tanstack virtual for long lists -> https://tanstack.com/virtual/latest/docs/introduction  */
const PokemonList = (): ReactElement => {
  const { data, isError, isLoading, isFetching, isFetchingNextPage, hasNextPage, onFetchNextPage } =
    usePokemonList();

  return (
    <>
      <UiElementLayout className={styles.cardListWrapper}>
        {(data || []).map((arr: PokemonListApi[], i: number): ReactElement => {
          return (
            <Fragment key={i}>
              {arr.map((el: PokemonListApi) => (
                <UiPokemonCard key={el?.name} data={el} />
              ))}
            </Fragment>
          );
        })}
      </UiElementLayout>
      <UiElementLayout className={styles.btnWrapper}>
        <UiButton
          isDisabled={!hasNextPage || isFetchingNextPage}
          text={
            isFetchingNextPage
              ? 'Loading More...'
              : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'
          }
          onClick={() => {
            onFetchNextPage((old: number) => old + 1);
          }}
        />
      </UiElementLayout>
    </>
  );
};

export default memo(PokemonList);
