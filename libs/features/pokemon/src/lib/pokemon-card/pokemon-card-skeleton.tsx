import { ReactElement } from 'react';

import { Box, Card } from '@pokemon-pet-shop/ui-primitives';
import { Skeleton } from '@pokemon-pet-shop/ui-components';

export const PokemonCardSkeleton = (): ReactElement => {
  return (
    <Card className="w-[352px] h-[167px] md:m-w-auto md:w-[250px] md:h-[367px] flex p-sm md:p-md rounded-md flex-row md:flex-col relative md:justify-between bg-medGrey">
      <Box className="w-[50%] h-[65%] my-lg mx-md md:flex-1 md:w-[60%] md:h-[80%] md:mx-auto md:mb-md">
        <Skeleton height="100%" circle />
      </Box>

      <Box className="flex flex-col justify-between w-full rounded-md p-0 md:p-md md:z-10 md:h-[180px] md:items-end">
        <Box className="w-full">
          <Box className="mb-sm">
            <Skeleton />
          </Box>
          <Box className="mb-sm">
            <Skeleton width={100} />
          </Box>
          <Box className="mb-sm">
            <Skeleton width={100} />
          </Box>
        </Box>

        <Box className="w-[100%] h-[100%] flex-1 justify-end items-end content-end">
          <Skeleton borderRadius="50px" height={40} />
        </Box>
      </Box>
    </Card>
  );
};
