import { ReactElement, useMemo } from 'react';

import { Box } from '@ui/box';
import { Image } from '@ui/image';
import { Typography } from '@ui/typography';
import { Skeleton } from '@ui/skeleton';

import { capitalizeName } from '@utils/textTransform';
import { pricingFormat } from '@utils/pricing';

import {
  useGetPokemonSpecies,
  useGetPokemonPricing,
} from '@services/pokemon-api';

import { HalfCircle } from './components/half.circle';
import { pokeDetailTypeMap } from './pokemon-detail-type-map.util';

export const PokemonDetailModalHeader = ({
  pokeCreature,
  pokeTypeClass,
}: any): ReactElement => {
  const res: any = useGetPokemonSpecies([String(pokeCreature?.id)]);
  const {
    data: speciesData,
    isLoading: speciesIsLoading,
    isFetching: speciesIsFetching,
  } = res[0];

  const pricingRes = useGetPokemonPricing();
  const {
    data: pricingData,
    isLoading: pricingIsLoading,
    isFetching: pricingIsFetching,
  } = pricingRes;

  const getPricingFormat = useMemo((): number | string => {
    return pricingFormat(
      {
        name: speciesData?.name,
        isLegendary: speciesData?.is_legendary,
        isMythical: speciesData?.is_mythical,
        chainData: speciesData?.evolution_chain?.chain,
      },
      pricingData
    );
  }, [
    speciesData?.name,
    speciesData?.is_legendary,
    speciesData?.is_mythical,
    speciesData?.evolution_chain?.chain,
    pricingData,
  ]);

  return (
    <Box
      className={`z-0 relative rounded-t-sm ${
        pokeDetailTypeMap.get(pokeTypeClass)?.[
          `${pokeTypeClass}ImageBg` as keyof object
        ] ?? ''
      }`}
    >
      <Box className="absolute flex w-fit bg-medYellow mt-md ml-md text-xl py-xs px-sm rounded-sm">
        <Typography>
          {(!pricingIsLoading || !pricingIsFetching) &&
          (!speciesIsLoading || !speciesIsFetching) ? (
            getPricingFormat
          ) : (
            <Skeleton width={100} />
          )}
        </Typography>
      </Box>
      <Image
        src={pokeCreature?.sprites?.other?.['official-artwork']?.front_default}
        className="h-full m-0 mx-auto"
        alt={`${capitalizeName(pokeCreature?.name)} Image`}
      />
      <HalfCircle />
    </Box>
  );
};
