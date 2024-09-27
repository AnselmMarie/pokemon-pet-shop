import { Fragment, memo, ReactElement, useMemo } from 'react';

import { PokemonListApi } from '@pokemon-pet-shop/typing';
import { UiButton, UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';
import { skeletonLoadDataUtil } from '@pokemon-pet-shop/utils';

import { UiPokemonCard } from '../pokemon.card';

import { styles } from './pokemon.list.module';
import usePokemonList from './use.pokemon.list.logic';

/** Use tanstack virtual for long lists -> https://tanstack.com/virtual/latest/docs/introduction  */
const PokemonList = (): ReactElement => {
  const {
    data = [],
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    onFetchNextPage,
  } = usePokemonList();

  console.log('data', data);

  // const newData = useMemo(() => {
  //   const template = { abilities: [{}, {}] };
  //   return skeletonLoadDataUtil(data, isLoading, template, true);
  // }, [data, isLoading]);

  if (data?.length === 0 && !hasNextPage) {
    return (
      <UiElementLayout className={styles.failureWrapper}>
        <UiTypography>No Pets are available at the moment. Please check back again.</UiTypography>
        {/** Note add a photo of a sad Pokemon or a image showing something sad */}
      </UiElementLayout>
    );
  }

  return (
    <>
      <UiElementLayout className={styles.cardListWrapper}>
        {(data || []).map((arr: PokemonListApi[], i: number): ReactElement => {
          return (
            <Fragment key={i}>
              {arr.map((el: PokemonListApi, i: number) => (
                <UiPokemonCard key={el?.name || i} data={el} />
              ))}
            </Fragment>
          );
        })}
      </UiElementLayout>
      {hasNextPage ? (
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
      ) : null}
    </>
  );
};

export default memo(PokemonList);
