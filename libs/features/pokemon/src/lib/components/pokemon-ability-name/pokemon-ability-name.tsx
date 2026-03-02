import { ReactElement, useMemo } from 'react';

import {
  IconPokeList,
  IconPokeListType,
  PokemonDetailAbility,
  PokemonDetailTypes,
} from '@pokemon-pet-shop/types';
import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';
import { HideInMobile, IconPokeType, Skeleton } from '@pokemon-pet-shop/ui-components';

import { capitalizeName } from '@pokemon-pet-shop/util-text-transform';

import { pokeAbilityTypeMap } from './pokemon-ability-type-map.util';

interface PokemonAbilityNameProps {
  abilityData: PokemonDetailAbility;
  typeData: PokemonDetailTypes[];
  pokeTypeClass: IconPokeListType;
  showAtkLine?: boolean;
  displayInDetail?: boolean;
  isLoading?: boolean;
}

export const PokemonAbilityName = ({
  abilityData,
  typeData,
  pokeTypeClass,
  showAtkLine = true,
  displayInDetail = false,
  isLoading = false,
}: PokemonAbilityNameProps): ReactElement => {
  const isAtkLineShownCircleClass = useMemo(() => {
    return showAtkLine ? 'md:-ml-[12px]' : '';
  }, [showAtkLine]);

  const isAtkLineShownWrapperClass = useMemo(() => {
    return showAtkLine ? 'md:-ml-[16px]' : '';
  }, [showAtkLine]);

  const formatName = useMemo(() => {
    if (!abilityData?.ability?.name) {
      return;
    }
    const splitName = abilityData?.ability?.name?.split('-');

    const getCapitalizeName = splitName.map((el: string) => {
      return capitalizeName(el);
    });

    return getCapitalizeName.join(' ');
  }, [abilityData?.ability?.name]);

  return (
    <Box
      className={`flex h-[16px] justify-items-center w-full items-center text-white mb-sm md:mb-md ${
        displayInDetail ? 'color-default mb-md h-auto' : ''
      } ${isAtkLineShownWrapperClass}
      `}
    >
      {showAtkLine ? (
        <HideInMobile>
          <Box
            className={`hidden md:block w-[30px] h-full ${
              pokeAbilityTypeMap.get(pokeTypeClass)?.[`${pokeTypeClass}AtkLine` as keyof object] ??
              ''
            }`}
          />
        </HideInMobile>
      ) : null}

      <Box
        className={`h-[17px] w-[17px] rounded-circle mr-xs md:mr-sm flex justify-center items-center ${
          displayInDetail ? 'w-[35px] h-[35px] mr-md' : ''
        } ${isAtkLineShownCircleClass} ${
          pokeAbilityTypeMap.get(pokeTypeClass)?.[`${pokeTypeClass}AtkCircle` as keyof object] ?? ''
        }`}
      >
        <IconPokeType
          type={typeData?.[0]?.type?.name as IconPokeList}
          size={displayInDetail ? 18 : 10}
        />
      </Box>

      <Typography
        className={`${displayInDetail ? '!text-default text-lg' : 'text-sm'} ${
          pokeAbilityTypeMap.get(pokeTypeClass)?.[
            `${pokeTypeClass}ContentCardText` as keyof object
          ] ?? ''
        }`}
      >
        {isLoading ? (
          <Skeleton
            width={100}
            baseColor={
              (pokeAbilityTypeMap.get(pokeTypeClass)?.[
                `${pokeTypeClass}SkeletonBase` as keyof object
              ] ?? undefined) as string | undefined
            }
            highlightColor={
              (pokeAbilityTypeMap.get(pokeTypeClass)?.[
                `${pokeTypeClass}SkeletonHighlight` as keyof object
              ] ?? undefined) as string | undefined
            }
          />
        ) : (
          formatName
        )}
      </Typography>
    </Box>
  );
};
