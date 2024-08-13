import { ReactElement } from 'react';

import { UiElementLayout } from '../element-layout';
import { UiTypography, TypographyTypeEnum } from '../typography';

// import { ElementLayoutTypeEnum } from './card.enum';
import { CardProps } from './card.interface';

const Card = ({ classNameCardWrapper = '' }: CardProps): ReactElement => {
  return (
    <UiElementLayout className={classNameCardWrapper}>
      <UiElementLayout className="hp"></UiElementLayout>
      <div className="image" />
      <UiElementLayout>
        <UiElementLayout>
          <UiElementLayout>
            <UiTypography typographyType={TypographyTypeEnum.H4}>Basic Pokemon</UiTypography>
            <UiTypography typographyType={TypographyTypeEnum.H4}>NO. 001</UiTypography>
          </UiElementLayout>
          <UiTypography typographyType={TypographyTypeEnum.H1}>Bulbasaur</UiTypography>
        </UiElementLayout>

        <UiElementLayout>
          <UiElementLayout></UiElementLayout>
          <UiTypography>Razor Wind</UiTypography>
        </UiElementLayout>

        <UiElementLayout>
          <UiTypography>Get Pet</UiTypography>
          <UiTypography>Details</UiTypography>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default Card;
