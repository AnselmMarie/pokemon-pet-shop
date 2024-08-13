import { ReactElement } from 'react';

import { ButtonTypeEnum, UiButton } from '../button';
import { UiElementLayout } from '../element-layout';
import { UiTypography, TypographyTypeEnum } from '../typography';

import { CardProps } from './pokemon.card.interface';
import styles from './pokemon.card.module.css';

const PokemonCard = ({ classNameCardWrapper = '' }: CardProps): ReactElement => {
  return (
    <UiElementLayout className={styles.cardWrapper}>
      <UiElementLayout className={styles.hp}></UiElementLayout>
      <div className="image" />

      <UiElementLayout className={styles.cardContentWrapper}>
        <UiElementLayout className={styles.cardHeadlineWrapper}>
          <UiTypography typographyType={TypographyTypeEnum.H4}>Basic Pokemon</UiTypography>
          <UiTypography typographyType={TypographyTypeEnum.H4}>NO. 001</UiTypography>
        </UiElementLayout>
        <UiTypography typographyType={TypographyTypeEnum.H1}>Bulbasaur</UiTypography>

        <UiElementLayout>
          <UiElementLayout></UiElementLayout>
          <UiTypography>Razor Wind</UiTypography>
        </UiElementLayout>

        <UiElementLayout>
          <UiButton>Get Pet</UiButton>
          <UiButton type={ButtonTypeEnum.SECONDARY}>Details</UiButton>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default PokemonCard;
