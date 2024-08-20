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
} from '@pokemon-pet-shop/ui';
import classNames from 'classnames';

import { CardProps } from './pokemon.card.interface';
import styles from './pokemon.card.module.css';
import usePokemonCard from './use.pokemon.card.logic';

const PokemonCard = ({ data = {}, dataDetail = {} }: CardProps): ReactElement => {
  const { getPokemonDetail, getThemeClass } = usePokemonCard(dataDetail);

  return (
    <UiCard className={classNames(styles.cardWrapper, styles?.[`${getThemeClass}Wrapper`])}>
      <UiElementLayout className={styles.imgCardWrapper}>
        <UiElementLayout className={styles.price}>$500.00</UiElementLayout>
        <UiImage
          src={getPokemonDetail?.sprites?.other?.['official-artwork']?.front_default}
          className={styles.image}
          alt={`${data?.name} Image`}
        />
      </UiElementLayout>

      <UiElementLayout className={styles.contentCardWrapper}>
        <UiElementLayout className={styles.cardContentTopWrapper}>
          <UiElementLayout className={styles.cardSubHeadlineWrapper}>
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
                <UiElementLayout className={styles.atkLine}></UiElementLayout>
                <UiElementLayout className={styles.atkCircle}>
                  <UiIconPokeType
                    type={getPokemonDetail?.types[0]?.type?.name}
                    width="10px"
                    height="10px"
                  />
                </UiElementLayout>
                <UiTypography className={styles.atkText}>{ability?.ability?.name}</UiTypography>
              </UiElementLayout>
            );
          })}
        </UiElementLayout>

        <UiElementLayout className={styles.btnWrapper}>
          <UiButton className={styles.btn}>Get Pet</UiButton>
          <UiButton className={styles.btn} type={ButtonTypeEnum.SECONDARY}>
            Details
          </UiButton>
        </UiElementLayout>
      </UiElementLayout>
    </UiCard>
  );
};

export default memo(PokemonCard);
