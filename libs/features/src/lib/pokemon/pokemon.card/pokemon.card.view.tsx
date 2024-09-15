import { memo, ReactElement } from 'react';

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
} from '@pokemon-pet-shop/ui';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiPokemonAbilityName } from '../components/pokemon.ability.name';

import { CardProps } from './pokemon.card.interface';
import { styles } from './pokemon.card.module';
import usePokemonCardLogic from './use.pokemon.card.logic';

const PokemonCard = ({ data }: CardProps): ReactElement => {
  const { getThemeClass, onHandleOpenDetailModalClick } = usePokemonCardLogic(data);

  return (
    <UiCard className={classNamesUtil(styles.cardWrapper, styles?.[`${getThemeClass}Wrapper`])}>
      <UiElementLayout className={styles.imgCardWrapper}>
        <UiImage
          src={data?.sprites?.other?.['official-artwork']?.front_default}
          className={styles.image}
          alt={`${data?.name} Image`}
          mobSrcType={mobSrcTypeEnum.URI}
        />
      </UiElementLayout>

      <UiElementLayout
        className={classNamesUtil(
          styles.contentCardWrapper,
          styles?.[`${getThemeClass}ContentCardWrapper`]
        )}
      >
        <UiElementLayout className={styles.cardContentTopWrapper}>
          <UiElementLayout className={styles.cardSubHeadlineWrapper}>
            <UiTypography
              className={classNamesUtil(
                styles.cardSubHeadline,
                styles?.[`${getThemeClass}ContentCardText`]
              )}
              typographyType={TypographyTypeEnum.SPAN}
            >
              Basic Pokemon
            </UiTypography>
            <UiTypography
              className={classNamesUtil(
                styles.cardSubHeadline,
                styles?.[`${getThemeClass}ContentCardText`]
              )}
              typographyType={TypographyTypeEnum.SPAN}
            >
              NO. {data?.id}
            </UiTypography>
          </UiElementLayout>
          <UiTypography
            className={classNamesUtil(
              styles.cardHeadline,
              styles?.[`${getThemeClass}ContentCardText`]
            )}
            typographyType={TypographyTypeEnum.H1}
          >
            {data?.name}
          </UiTypography>

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
                />
              );
            }
          )}
        </UiElementLayout>

        <UiElementLayout className={styles.btnWrapper}>
          <UiButton
            className={styles.btn}
            type={ButtonTypeEnum.SECONDARY}
            text="Learn More"
            onClick={onHandleOpenDetailModalClick}
          />
        </UiElementLayout>
      </UiElementLayout>
    </UiCard>
  );
};

export default memo(PokemonCard);
