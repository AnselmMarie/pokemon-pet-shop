import { ReactElement, useMemo, Fragment } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { skeletonLoadDataUtil } from '@ui/skeleton';
import { Button } from '@ui/button';

import { PokemonCard } from '../pokemonCard';

import image from './assets/bulbasaur.small.gif';
import { usePokemonList } from './use.pokemon.list.logic';

/**
 * @todo
 * Create a new component for this
 * React, use tanstack virtual for long lists -> https://tanstack.com/virtual/latest/docs/introduction
 * React Native, use flashlist for long lists -> https://shopify.github.io/flash-list/
 * */
export const PokemonList = (): ReactElement => {
  const {
    data = [],
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    onFetchNextPage,
  } = usePokemonList();

  const newData = useMemo(() => {
    const countNum = 50;
    const template = { abilities: [{}, {}] };
    const arrCount =
      data && data.length !== 0 ? data.length * countNum : countNum;
    return skeletonLoadDataUtil(data, isLoading, template, true, arrCount);
  }, [data, isLoading]);

  console.log('newData', newData);

  if (newData?.length === 0 && !hasNextPage) {
    return (
      <Box className="flex justify-center my-md">
        <Typography variant="h2">
          No Pets are available at the moment. Please check back again.
        </Typography>
        {/** @todo Note add a photo of a sad Pokemon or a image showing something sad */}
      </Box>
    );
  }

  return (
    <>
      <Box className="flex justify-center flex-wrap gap-md mb-sm">
        {(newData ?? []).map((arr: any, i: number): ReactElement => {
          return (
            <Fragment key={i}>
              {(arr?.data ?? []).map((el: any, i: number) => (
                <PokemonCard
                  key={el?.name || i}
                  item={el}
                  isLoading={isLoading}
                />
              ))}
            </Fragment>
          );
        })}
      </Box>
      {hasNextPage ? (
        <Box className="flex justify-center my-md">
          <Button
            isDisabled={!hasNextPage || isFetchingNextPage}
            text={isFetchingNextPage ? 'Loading' : 'Load More'}
            appendImage={isFetchingNextPage ? image : ''}
            onClick={() => {
              onFetchNextPage((old: number) => old + 1);
            }}
          />
        </Box>
      ) : null}
    </>
  );
};
