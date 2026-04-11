import { ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-primitives';
import { Skeleton } from '@pokemon-pet-shop/ui-components';

export const PokemonDetailModalSkeleton = (): ReactElement => {
  return (
    <Box className="p-lg">
      <Box className="flex w-fit bg-medYellow mt-md ml-md py-xs px-sm rounded-sm mb-md">
        <Skeleton width={100} baseColor="#cab22c" highlightColor="#fce97d" />
      </Box>
      <Box className="mt-lg ml-2xl mr-2xl">
        <Box className="mb-sm">
          <Skeleton width={80} />
        </Box>
        <Box className="mb-sm">
          <Skeleton width={150} height={24} />
        </Box>
        <Box className="mb-lg">
          <Skeleton count={3} />
        </Box>
        <Box className="flex gap-md mb-lg">
          <Skeleton width={120} />
          <Skeleton width={120} />
        </Box>
      </Box>
    </Box>
  );
};
