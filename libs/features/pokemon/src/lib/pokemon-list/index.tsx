import { ReactElement, Fragment } from 'react';

import { PokemonDetailBase } from '@pokemon-pet-shop/types';
import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';
import { Button } from '@pokemon-pet-shop/ui-components';

import { useGetPokemonList } from '@pokemon-pet-shop/service-pokemon';

import { PokemonCard } from '../pokemon-card';
import image from './assets/bulbasaur.small.gif';

/**
 * @todo
 * Create a new component for this
 * React, use tanstack virtual for long lists -> https://tanstack.com/virtual/latest/docs/introduction
 * React Native, use flashlist for long lists -> https://shopify.github.io/flash-list/
 * */
export const PokemonList = (): ReactElement => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetPokemonList();

  const pages = data?.pages;

  if ((!pages || pages.length === 0) && !hasNextPage) {
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
        {(pages ?? []).map(
          (arr: { data: (PokemonDetailBase & { name: string })[] }, i: number): ReactElement => {
            return (
              <Fragment key={i}>
                {(arr?.data ?? []).map((el: PokemonDetailBase & { name: string }, i: number) => (
                  <PokemonCard key={el?.name || i} pokeCreature={el} />
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
