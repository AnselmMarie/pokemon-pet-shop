import { memo, ReactElement } from 'react';

import {
  UiElementLayout,
  UiIconPokeType,
  UiTypography,
  TypographyTypeEnum,
  UiHideInMobile,
} from '@pokemon-pet-shop/ui';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { PokemonAbilityNameProps } from './pokemon.ability.name.interface';
import { styles } from './pokemon.ability.name.module';

const PokemonAbilityName = ({
  abilityData,
  typeData,
  getThemeClass = '',
}: PokemonAbilityNameProps): ReactElement => {
  return (
    <UiElementLayout className={styles.atkWrapper}>
      <UiHideInMobile>
        <UiElementLayout
          className={classNamesUtil(styles.atkLine, styles?.[`${getThemeClass}AtkLine`])}
        />
      </UiHideInMobile>
      <UiElementLayout
        className={classNamesUtil(styles.atkCircle, styles?.[`${getThemeClass}AtkCircle`])}
      >
        <UiIconPokeType type={typeData?.types?.[0]?.type?.name} size="10" />
      </UiElementLayout>
      <UiTypography
        className={classNamesUtil(styles.atkText, styles?.[`${getThemeClass}ContentCardText`])}
        typographyType={TypographyTypeEnum.SPAN}
      >
        {abilityData?.ability?.name}
      </UiTypography>
    </UiElementLayout>
  );
};

export default memo(PokemonAbilityName);
