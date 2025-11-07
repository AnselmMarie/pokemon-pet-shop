import { memo, ReactElement, useMemo } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
import { PokemonDetailAbilityObj } from '@pokemon-pet-shop/typing';
import {
  UiElementLayout,
  UiImage,
  UiTypography,
  ButtonTypeEnum,
  TypographyTypeEnum,
  UiButton,
  UiCard,
  mobSrcTypeEnum,
  UiSkeleton,
} from '@pokemon-pet-shop/ui';
import { capitalizeNameUtil, classNamesUtil, isWebUtil } from '@pokemon-pet-shop/utils';

import { UiPokemonAbilityName } from '../components/pokemon.ability.name';

import { CardProps } from './pokemon.card.interface';
import { styles } from './pokemon.card.module';
import usePokemonCardLogic from './use.pokemon.card.logic';

const PokemonCard = ({ data, isLoading }: CardProps): ReactElement => {
  const { getThemeClass, onHandleOpenDetailModalClick } = usePokemonCardLogic(data);
  const { theme } = useThemeStore();
  const { newStyles } = useRenderStyles(styles);

  const capitalizeName = useMemo((): string => {
    return capitalizeNameUtil(data?.name);
  }, [data?.name]);

  return (
    <UiCard
      className={classNamesUtil(
        newStyles.cardWrapper,
        newStyles?.[`${getThemeClass}Wrapper`],
        newStyles?.[
          theme === ThemeTypeEnum.LIGHT ? 'cardWrapperShadowLight' : 'cardWrapperShadowDark'
        ],
        isLoading ? newStyles.cardWrapperLoading : ''
      )}
    >
      {isLoading ? (
        <UiElementLayout className={newStyles.imgCardIsLoadingWrapper}>
          <UiSkeleton height={isWebUtil() ? '100%' : 100} circle />
        </UiElementLayout>
      ) : (
        <UiElementLayout className={newStyles.imgCardWrapper}>
          <UiImage
            src={data?.sprites?.other?.['official-artwork']?.front_default}
            className={newStyles.image}
            alt={`${data?.name} Image`}
            mobSrcType={mobSrcTypeEnum.URI}
            isLoading={isLoading}
          />
        </UiElementLayout>
      )}

      <UiElementLayout
        className={classNamesUtil(
          newStyles.contentCardWrapper,
          newStyles?.[`${getThemeClass}ContentCardWrapper`],
          isLoading ? newStyles.contentCardWrapperIsLoading : ''
        )}
      >
        <UiElementLayout className={newStyles.cardContentTopWrapper}>
          {isLoading ? (
            <UiElementLayout className={newStyles.cardContentTopIsLoadingWrapper}>
              <UiSkeleton />
            </UiElementLayout>
          ) : (
            <UiElementLayout className={newStyles.cardSubHeadlineWrapper}>
              <UiTypography
                className={classNamesUtil(
                  newStyles.cardHeadline,
                  newStyles?.[`${getThemeClass}ContentCardText`]
                )}
                typographyType={TypographyTypeEnum.H1}
              >
                {capitalizeName}
              </UiTypography>
              <UiTypography
                className={classNamesUtil(
                  newStyles.cardSubHeadline,
                  newStyles?.[`${getThemeClass}ContentCardText`]
                )}
                typographyType={TypographyTypeEnum.SPAN}
              >
                NO. {data?.id}
              </UiTypography>
            </UiElementLayout>
          )}

          {(data?.abilities || []).map(
            (abilityObj: PokemonDetailAbilityObj, i: number): ReactElement | null => {
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
          )}
        </UiElementLayout>

        <UiElementLayout className={newStyles.btnWrapper}>
          <UiButton
            className={newStyles.btn}
            type={ButtonTypeEnum.SECONDARY}
            text="Learn More"
            isLoading={isLoading}
            onClick={onHandleOpenDetailModalClick}
          />
        </UiElementLayout>
      </UiElementLayout>
    </UiCard>
  );
};

export default memo(PokemonCard);
