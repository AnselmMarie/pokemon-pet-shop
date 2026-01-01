import { ReactElement, useMemo, Fragment } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { skeletonLoadDataUtil } from '@ui/skeleton';
import { Button } from '@ui/button';

import { useGetPokemonList } from '@services/pokemon-api';

import { PokemonCard } from '../pokemon-card';
import image from './assets/bulbasaur.small.gif';

/**
 * @todo
 * Create a new component for this
 * React, use tanstack virtual for long lists -> https://tanstack.com/virtual/latest/docs/introduction
 * React Native, use flashlist for long lists -> https://shopify.github.io/flash-list/
 * */
export const PokemonList = (): ReactElement => {
  const { data, isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetPokemonList();

  const isDataLoading = isLoading || isFetching || isFetchingNextPage;

  const newData = useMemo(() => {
    const pageData = data?.pages;
    const countNum = 50;
    const template = { abilities: [{}, {}] };
    const arrCount = pageData && pageData.length !== 0 ? pageData.length * countNum : countNum;
    return skeletonLoadDataUtil(pageData, isLoading, template, true, arrCount);
  }, [data, isLoading]);

  if ((!newData || newData.length === 0) && !hasNextPage) {
    return (
      <Box className="flex justify-center my-md mt-[100px]">
        <Typography variant="h2">
          No Pets are available at the moment. Please check back again.
        </Typography>
        {/** @todo Note add a photo of a sad Pokemon or a image showing something sad */}
      </Box>
    );
  }

  return (
    <>
      <Box className="flex flex-row justify-center flex-wrap gap-md m-lg pt-lg mt-[100px]">
        {(newData ?? []).map(
          (arr: { data: (PokemonDetail.Base & { name: string })[] }, i: number): ReactElement => {
            return (
              <Fragment key={i}>
                {(arr?.data ?? []).map((el: PokemonDetail.Base & { name: string }, i: number) => (
                  <PokemonCard key={el?.name || i} pokeCreature={el} isLoading={isDataLoading} />
                ))}
              </Fragment>
            );
          }
        )}
      </Box>
      {hasNextPage ? (
        <Box className="flex justify-center my-md">
          <Button
            isDisabled={!hasNextPage || isFetchingNextPage}
            text={isFetchingNextPage ? 'Loading' : 'Load More'}
            appendImage={isFetchingNextPage ? image : ''}
            onClick={() => {
              fetchNextPage();
            }}
          />
        </Box>
      ) : null}
    </>
  );
};
