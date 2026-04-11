import { ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-primitives';

import { PokemonCardSkeleton } from '../pokemon-card/pokemon-card-skeleton';

const SKELETON_COUNT = 50;

const skeletonItems = Array(SKELETON_COUNT).fill(null);

export const PokemonListSkeleton = (): ReactElement => {
  return (
    <Box className="flex flex-row justify-center flex-wrap gap-md m-lg pt-lg mt-[100px]">
      {skeletonItems.map((_, i) => (
        <PokemonCardSkeleton key={i} />
      ))}
    </Box>
  );
};
