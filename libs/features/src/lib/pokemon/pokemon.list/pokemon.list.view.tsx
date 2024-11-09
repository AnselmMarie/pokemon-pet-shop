import { Fragment, memo, ReactElement, useMemo } from 'react';

import { PokemonListApi } from '@pokemon-pet-shop/typing';
import { UiButton, UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';
import { skeletonLoadDataUtil } from '@pokemon-pet-shop/utils';

import { UiPokemonCard } from '../pokemon.card';

import image from './assets/bulbasaur.gif';
import { styles } from './pokemon.list.module';
import usePokemonList from './use.pokemon.list.logic';

/**
 * @todo
 * Create a new component for this
 * React, use tanstack virtual for long lists -> https://tanstack.com/virtual/latest/docs/introduction
 * React Native, use flashlist for long lists -> https://shopify.github.io/flash-list/
 * */
const PokemonList = (): ReactElement => {
  const {
    data = [],
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    onFetchNextPage,
  } = usePokemonList();

  const newData = useMemo(() => {
    const template = { abilities: [{}, {}] };
    return skeletonLoadDataUtil(data, isLoading, template, true, data?.length * 50);
  }, [data, isLoading]);

  if (newData?.length === 0 && !hasNextPage) {
    return (
      <UiElementLayout className={styles.failureWrapper}>
        <UiTypography>No Pets are available at the moment. Please check back again.</UiTypography>
        {/** @todo Note add a photo of a sad Pokemon or a image showing something sad */}
      </UiElementLayout>
    );
  }

  return (
    <>
      <UiElementLayout className={styles.cardListWrapper}>
        {(newData || []).map((arr: PokemonListApi[], i: number): ReactElement => {
          return (
            <Fragment key={i}>
              {arr.map((el: PokemonListApi, i: number) => (
                <UiPokemonCard key={el?.name || i} data={el} isLoading={isLoading} />
              ))}
            </Fragment>
          );
        })}
      </UiElementLayout>
      {hasNextPage ? (
        <UiElementLayout className={styles.btnWrapper}>
          <UiButton
            isDisabled={!hasNextPage || isFetchingNextPage}
            text={isFetchingNextPage ? 'Loading' : 'Load More'}
            appendImage={isFetchingNextPage ? image : ''}
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
