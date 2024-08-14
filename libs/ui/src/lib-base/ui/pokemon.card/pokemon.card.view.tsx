import { ReactElement } from 'react';

import { ButtonTypeEnum, UiButton } from '../button';
import { UiElementLayout } from '../element-layout';
import { UiTypography, TypographyTypeEnum } from '../typography';

import { CardProps } from './pokemon.card.interface';
import styles from './pokemon.card.module.css';

const PokemonCard = ({ classNameCardWrapper = '' }: CardProps): ReactElement => {
  return (
    <UiElementLayout className={styles.cardWrapper}>
      <UiElementLayout className={styles.hp}>45 HP</UiElementLayout>
      <div className="image" />

      <UiElementLayout className={styles.cardContentWrapper}>
        <UiElementLayout className={styles.cardSubHeadlineWrapper}>
          <UiTypography className={styles.cardSubHeadline} typographyType={TypographyTypeEnum.SPAN}>
            Basic Pokemon
          </UiTypography>
          <UiTypography className={styles.cardSubHeadline} typographyType={TypographyTypeEnum.SPAN}>
            NO. 001
          </UiTypography>
        </UiElementLayout>
        <UiTypography className={styles.cardHeadline} typographyType={TypographyTypeEnum.H1}>
          Bulbasaur
        </UiTypography>

        <UiElementLayout className={styles.atkWrapper}>
          <UiElementLayout className={styles.atkLine}></UiElementLayout>
          <UiElementLayout className={styles.atkCircle}></UiElementLayout>
          <UiTypography className={styles.atkText}>Razor Wind</UiTypography>
        </UiElementLayout>

        <UiElementLayout className={styles.btnWrapper}>
          <UiButton className={styles.btn}>Get Pet</UiButton>
          <UiButton className={styles.btn} type={ButtonTypeEnum.SECONDARY}>
            Details
          </UiButton>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default PokemonCard;
