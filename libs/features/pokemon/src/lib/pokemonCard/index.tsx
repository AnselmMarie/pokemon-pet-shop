import { ReactElement } from 'react';
// import { useAtom } from 'jotai';

// import { toggleThemeAtom } from '@features/atomTheme';
import { Box } from '@ui/box';
import { Card } from '@ui/card';
import { Skeleton } from '@ui/skeleton';
// import { UiButton } from '@ui/button';
// import { Typography } from '@ui/typography';
// import { capitalizeName } from '@utils/textTransform';

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

// import { UiPokemonAbilityName } from '../components/pokemon.ability.name';

// import { styles } from './pokemon.card.module';
// import usePokemonCardLogic from './use.pokemon.card.logic';

export const PokemonCard = ({ data, isLoading }: CardProps): ReactElement => {
  // const { getThemeClass, onHandleOpenDetailModalClick } =
  //   usePokemonCardLogic(data);
  // const [theme] = useAtom(toggleThemeAtom);
  // const { newStyles } = useRenderStyles(styles);

  return (
    <Card
      className={`min-w-[352px] h-[154px] flex p-sm rounded-md flex-row relative`}
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
      {/* {isLoading ? (
        <Box className={newStyles.imgCardIsLoadingWrapper}>
          <UiSkeleton height={isWebUtil() ? '100%' : 100} circle />
        </Box>
      ) : (
        <Box className={newStyles.imgCardWrapper}>
          <UiImage
            src={data?.sprites?.other?.['official-artwork']?.front_default}
            className={newStyles.image}
            alt={`${data?.name} Image`}
            mobSrcType={mobSrcTypeEnum.URI}
            isLoading={isLoading}
          />
        </Box>
      )} */}

      <Box
        className={`flex flex-col justify-between w-full rounded-md p-md`}
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
                {capitalizeName(data?.name)}
              </Typography>
              <Typography
              // className={classNamesUtil(
              //   newStyles.cardSubHeadline,
              //   newStyles?.[`${getThemeClass}ContentCardText`]
              // )}
              >
                NO. {data?.id}
              </Typography> */}
            </Box>
          )}

          {/* {(data?.abilities || []).map(
            (
              abilityObj: PokemonDetailAbilityObj,
              i: number
            ): ReactElement | null => {
              if (i > 1) {
                return null;
              }
              return (
                <UiPokemonAbilityName
                  key={i}
                  abilityData={abilityObj}
                  typeData={data?.types}
                  getThemeClass={getThemeClass}
                  isLoading={isLoading}
                />
              );
            }
          )} */}
        </Box>

        {/* <Box className={newStyles.btnWrapper}>
          <UiButton
            className={newStyles.btn}
            type={ButtonTypeEnum.SECONDARY}
            text="Learn More"
            isLoading={isLoading}
            onClick={onHandleOpenDetailModalClick}
          />
        </Box> */}
      </Box>
    </Card>
  );
};
