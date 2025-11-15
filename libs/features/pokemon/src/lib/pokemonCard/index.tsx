import { ReactElement } from 'react';
// import { useAtom } from 'jotai';

// import { toggleThemeAtom } from '@features/atomTheme';

import { Box } from '@ui/box';
import { Card } from '@ui/card';
import { Skeleton } from '@ui/skeleton';
import { Button } from '@ui/button';
import { Image } from '@ui/image';

import { isWeb } from '@utils/detect';
// import { Typography } from '@ui/typography';
// import { capitalizeName } from '@utils/textTransform';

import { PokemonAbilityName } from '../components/pokemon.ability.name';
import { CardProps } from './pokemon.card.interface';

// import { useRenderStyles } from '@pokemon-pet-shop/hooks';
// import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
// import { PokemonDetailAbilityObj } from '@pokemon-pet-shop/typing';
// import {
//   UiElementLayout,
//   UiImage,
//   UiTypography,
//   ButtonTypeEnum,
//   TypographyTypeEnum,
//   UiButton,
//   UiCard,
//   mobSrcTypeEnum,
//   UiSkeleton,
// } from '@pokemon-pet-shop/ui';
// import {
//   capitalizeNameUtil,
//   classNamesUtil,
//   isWebUtil,
// } from '@pokemon-pet-shop/utils';

// import { styles } from './pokemon.card.module';
// import usePokemonCardLogic from './use.pokemon.card.logic';

export const PokemonCard = ({ item, isLoading }: CardProps): ReactElement => {
  // const { getThemeClass, onHandleOpenDetailModalClick } =
  //   usePokemonCardLogic(data);
  // const [theme] = useAtom(toggleThemeAtom);
  // const { newStyles } = useRenderStyles(styles);

  console.log('item', item);

  return (
    <Card
      className={`min-w-[352px] h-[154px] flex p-sm rounded-md flex-row relative ${
        isLoading ? 'bg-medGrey' : ''
      }`}
      // className={classNamesUtil(
      //   newStyles.cardWrapper,
      //   newStyles?.[`${getThemeClass}Wrapper`],
      //   newStyles?.[
      //     theme === ThemeTypeEnum.LIGHT
      //       ? 'cardWrapperShadowLight'
      //       : 'cardWrapperShadowDark'
      //   ],
      //   isLoading ? newStyles.cardWrapperLoading : ''
      // )}
    >
      {isLoading ? (
        <Box className="w-[50%] h-[70%] my-lg mx-md md:flex-1 md:w-[80%] md:h-full md:mx-auto md:mb-md">
          <Skeleton height={isWeb() ? '100%' : 100} circle />
        </Box>
      ) : (
        <Box className="flex justify-center items-center w-full max-w-[115px] rounded-md p-sm">
          <Image
            src={item?.sprites?.other?.['official-artwork']?.front_default}
            className="w-full h-auto position-absolute md:w-[88%] md:z-0"
            alt={`${item?.name} Image`}
            isLoading={isLoading}
          />
        </Box>
      )}

      <Box
        className={`flex flex-col justify-between w-full rounded-md p-md ${
          isLoading ? 'bg-darkGrey' : ''
        }`}
        // className={classNamesUtil(
        //   newStyles.contentCardWrapper,
        //   newStyles?.[`${getThemeClass}ContentCardWrapper`],
        //   isLoading ? newStyles.contentCardWrapperIsLoading : ''
        // )}
      >
        <Box className="w-full">
          {isLoading ? (
            <Box className="mb-sm">
              <Skeleton />
            </Box>
          ) : (
            <Box className="flex justify-between items-center mb-sm">
              {/* <Typography
                // className={classNamesUtil(
                //   newStyles.cardHeadline,
                //   newStyles?.[`${getThemeClass}ContentCardText`]
                // )}
                variant="h1"
              >
                {capitalizeName(item?.name)}
              </Typography>
              <Typography
              // className={classNamesUtil(
              //   newStyles.cardSubHeadline,
              //   newStyles?.[`${getThemeClass}ContentCardText`]
              // )}
              >
                NO. {item?.id}
              </Typography> */}
            </Box>
          )}

          {(item?.abilities || []).map(
            (
              abilityObj: any, // PokemonDetailAbilityObj,
              i: number
            ): ReactElement | null => {
              if (i > 1) {
                return null;
              }
              return (
                <PokemonAbilityName
                  key={i}
                  abilityData={abilityObj}
                  typeData={item?.types}
                  getThemeClass=""
                  // getThemeClass={getThemeClass}
                  isLoading={isLoading}
                />
              );
            }
          )}
        </Box>

        <Box className="w-full flex gap-sm">
          <Button
            className="w-full"
            type="secondary"
            text="Learn More"
            isLoading={isLoading}
            // onClick={onHandleOpenDetailModalClick}
          />
        </Box>
      </Box>
    </Card>
  );
};
