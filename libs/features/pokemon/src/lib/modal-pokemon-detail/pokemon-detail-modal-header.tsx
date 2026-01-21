import { ReactElement, useMemo } from 'react';

import {
  IconPokeListType,
  PokemonDetailBase,
  PokemonEvolution,
  PokemonSpecies,
} from '@pokemon-pet-shop/types';
import { Box, Image, Typography } from '@pokemon-pet-shop/ui-primitives';
import { Skeleton } from '@pokemon-pet-shop/ui-components';

import { capitalizeName } from '@pokemon-pet-shop/util-text-transform';
import { pricingFormat } from '@pokemon-pet-shop/util-pricing';

import { useGetPokemonSpecies, useGetPokemonPricing } from '@pokemon-pet-shop/service-pokemon';

import { HalfCircle } from './components/half.circle';
import { pokeDetailTypeMap } from './pokemon-detail-type-map.util';

interface PokemonDetailModalHeaderProps {
  pokeCreature: PokemonDetailBase & { name: string };
  pokeTypeClass: IconPokeListType;
}

interface PokeSpeciesResProps {
  data: Omit<PokemonSpecies, 'evolution_chain'> & {
    evolution_chain: PokemonEvolution;
  };
  isLoading: boolean;
  isFetching: boolean;
}

export const PokemonDetailModalHeader = ({
  pokeCreature,
  pokeTypeClass,
}: PokemonDetailModalHeaderProps): ReactElement => {
  const res = useGetPokemonSpecies([String(pokeCreature?.id)]);
  const {
    data: speciesData,
    isLoading: speciesIsLoading,
    isFetching: speciesIsFetching,
  } = res[0] as unknown as PokeSpeciesResProps;

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
      pricingData!
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
        pokeDetailTypeMap.get(pokeTypeClass)?.[`${pokeTypeClass}ImageBg` as keyof object] ?? ''
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
