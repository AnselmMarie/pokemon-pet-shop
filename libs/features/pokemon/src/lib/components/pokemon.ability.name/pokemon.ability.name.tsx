import { ReactElement, useMemo } from 'react';

import { Box } from '@ui/box';
import { HideInMobile } from '@ui/hideInMobile';
import { IconPokeType } from '@ui/iconPokeType';
import { Typography } from '@ui/typography';
import { Skeleton } from '@ui/skeleton';

import { capitalizeName } from '@utils/textTransform';

import { PokemonAbilityNameProps } from './pokemon.ability.name.interface';
import { pokeAbilityTypeMap } from './pokemon.ability.type.map.util';

export const PokemonAbilityName = ({
  abilityData,
  typeData,
  getPokeTypeClass,
  showAtkLine = true,
  displayInDetail = false,
  isLoading = false,
}: PokemonAbilityNameProps): ReactElement => {
  const isAtkLineShownCircleClass = useMemo(() => {
    return showAtkLine ? '-ml-sm' : '';
  }, [showAtkLine]);

  const isAtkLineShownWrapperClass = useMemo(() => {
    return showAtkLine ? '-ml-sm' : '';
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
      className={`flex h-[17px] justify-items-center w-full items-center text-white mb-md ${
        displayInDetail ? 'color-default mb-md h-auto' : ''
      } ${isAtkLineShownWrapperClass}
      `}
    >
      {showAtkLine ? (
        <HideInMobile>
          <Box
            className={`hidden md:block w-[30px] h-full ${
              pokeAbilityTypeMap.get(getPokeTypeClass)?.[
                `${getPokeTypeClass}AtkLine` as keyof object
              ] ?? ''
            }`}
            // className={classNamesUtil(
            //   displayInDetail ? newStyles.atkLineDetailModal : '',
            // )}
          />
        </HideInMobile>
      ) : null}

      <Box
        className={`h-[17px] w-[17px] rounded-circle mr-sm flex justify-center items-center ${
          displayInDetail ? 'w-[35px] h-[35px] mr-md' : ''
        } ${isAtkLineShownCircleClass} ${
          pokeAbilityTypeMap.get(getPokeTypeClass)?.[
            `${getPokeTypeClass}AtkCircle` as keyof object
          ] ?? ''
        }`}
      >
        <IconPokeType
          type={typeData?.[0]?.type?.name}
          size={displayInDetail ? 18 : 10}
        />
      </Box>

      <Typography
        className={`text-sm ${displayInDetail ? 'color-default text-lg' : ''} ${
          pokeAbilityTypeMap.get(getPokeTypeClass)?.[
            `${getPokeTypeClass}ContentCardText` as keyof object
          ] ?? ''
        }`}
      >
        {isLoading ? <Skeleton width={100} /> : formatName}
      </Typography>
    </Box>
  );
};
