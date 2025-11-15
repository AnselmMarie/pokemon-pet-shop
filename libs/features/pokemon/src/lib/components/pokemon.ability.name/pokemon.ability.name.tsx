import { ReactElement, useMemo } from 'react';

import { Box } from '@ui/box';
import { HideInMobile } from '@ui/hideInMobile';
// import { Typography } from '@ui/typography';
// import { Skeleton } from '@ui/skeleton';

// import { capitalizeName } from '@utils/textTransform';

// import { useRenderStyles } from '@pokemon-pet-shop/hooks';
// import {
//   UiElementLayout,
//   UiIconPokeType,
//   UiTypography,
//   TypographyTypeEnum,
//   UiHideInMobile,
//   UiSkeleton,
// } from '@pokemon-pet-shop/ui';
// import { capitalizeNameUtil, classNamesUtil } from '@pokemon-pet-shop/utils';

import { PokemonAbilityNameProps } from './pokemon.ability.name.interface';

export const PokemonAbilityName = ({
  abilityData,
  typeData,
  getThemeClass = '',
  showAtkLine = true,
  displayInDetail = false,
  isLoading = false,
}: PokemonAbilityNameProps): ReactElement => {
  // const { newStyles } = useRenderStyles(styles);

  // const isAtkLineShownCircleClass = useMemo(() => {
  //   return showAtkLine ? '-ml-sm' : '';
  // }, [showAtkLine]);

  const isAtkLineShownWrapperClass = useMemo(() => {
    return showAtkLine ? '-ml-sm' : '';
  }, [showAtkLine]);

  // const formatName = useMemo(() => {
  //   if (!abilityData?.ability?.name) {
  //     return;
  //   }
  //   const splitName = abilityData?.ability?.name?.split('-');

  //   const getCapitalizeName = splitName.map((el: string) => {
  //     return capitalizeName(el);
  //   });

  //   return getCapitalizeName.join(' ');
  // }, [abilityData?.ability?.name]);

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
            className={`hidden md:block w-[30px] h-full`}
            // className={classNamesUtil(
            //   newStyles.atkLine,
            //   displayInDetail ? newStyles.atkLineDetailModal : '',
            //   newStyles?.[`${getThemeClass}AtkLine`]
            // )}
          />
        </HideInMobile>
      ) : null}

      {/* <Box
        className={classNamesUtil(
          newStyles.atkCircle,
          displayInDetail ? newStyles.atkCircleDetailModal : '',
          isAtkLineShownCircleClass,
          newStyles?.[`${getThemeClass}AtkCircle`]
        )}
      >
        {isLoading ? (
          <UiIconPokeType
            type={typeData?.[0]?.type?.name}
            size={12}
            isLoading={isLoading}
          />
        ) : (
          <UiIconPokeType
            type={typeData?.[0]?.type?.name}
            size={displayInDetail ? '18' : '10'}
          />
        )}
      </Box> */}

      {/* <Typography
        className={classNamesUtil(
          newStyles.atkText,
          displayInDetail ? newStyles.atkTextDetailModal : '',
          newStyles?.[`${getThemeClass}ContentCardText`]
        )}
      >
        {isLoading ? <Skeleton width={100} /> : formatName}
      </Typography> */}
    </Box>
  );
};
