import { memo, ReactElement } from 'react';

import {
  UiElementLayout,
  UiImage,
  UiIconPokeType,
  UiTypography,
  ButtonTypeEnum,
  TypographyTypeEnum,
  UiButton,
  UiCard,
  UiHideInMobile,
  mobSrcTypeEnum,
} from '@pokemon-pet-shop/ui';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { CardProps } from './pokemon.card.interface';
import { styles } from './pokemon.card.module';
import usePokemonCard from './use.pokemon.card.logic';

const PokemonCard = ({ data = {}, dataDetail = {} }: CardProps): ReactElement => {
  const { getPokemonDetail, getThemeClass } = usePokemonCard(dataDetail);

  const handleClick = () => {
    console.log('handleClick');
  };

  return (
    <UiCard className={classNamesUtil(styles.cardWrapper, styles?.[`${getThemeClass}Wrapper`])}>
      <UiElementLayout className={styles.imgCardWrapper}>
        <UiTypography typographyType={TypographyTypeEnum.SPAN} className={styles.price}>
          $500.00
        </UiTypography>
        <UiImage
          src={getPokemonDetail?.sprites?.other?.['official-artwork']?.front_default}
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
          <UiElementLayout
            className={classNamesUtil(
              styles.cardSubHeadlineWrapper,
              styles?.[`${getThemeClass}CardSubHeadlineWrapper`]
            )}
          >
            <UiTypography
              className={styles.cardSubHeadline}
              typographyType={TypographyTypeEnum.SPAN}
            >
              Basic Pokemon
            </UiTypography>
            <UiTypography
              className={styles.cardSubHeadline}
              typographyType={TypographyTypeEnum.SPAN}
            >
              NO. {getPokemonDetail?.order}
            </UiTypography>
          </UiElementLayout>
          <UiTypography className={styles.cardHeadline} typographyType={TypographyTypeEnum.H1}>
            {data?.name}
          </UiTypography>

          {(getPokemonDetail?.abilities || []).map((ability: any): ReactElement => {
            return (
              <UiElementLayout key={ability?.ability?.name} className={styles.atkWrapper}>
                <UiHideInMobile>
                  <UiElementLayout
                    className={classNamesUtil(
                      styles.atkLine,
                      styles?.[`${getThemeClass}ContentCardWrapper`]
                    )}
                  />
                </UiHideInMobile>
                <UiElementLayout
                  className={classNamesUtil(
                    styles.atkCircle,
                    styles?.[`${getThemeClass}AtkCircle`]
                  )}
                >
                  <UiIconPokeType type={getPokemonDetail?.types[0]?.type?.name} size="10" />
                </UiElementLayout>
                <UiTypography className={styles.atkText} typographyType={TypographyTypeEnum.SPAN}>
                  {ability?.ability?.name}
                </UiTypography>
              </UiElementLayout>
            );
          })}
        </UiElementLayout>

        <UiElementLayout className={styles.btnWrapper}>
          <UiButton className={styles.btn} text="Get Pet" onClick={handleClick} />
          <UiButton
            className={styles.btn}
            type={ButtonTypeEnum.SECONDARY}
            text="Details"
            onClick={handleClick}
          />
        </UiElementLayout>
      </UiElementLayout>
    </UiCard>
  );
};

export default memo(PokemonCard);
