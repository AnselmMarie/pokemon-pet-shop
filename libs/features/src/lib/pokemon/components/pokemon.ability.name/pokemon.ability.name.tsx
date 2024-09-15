import { memo, ReactElement, useMemo } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
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
  showAtkLine = true,
}: PokemonAbilityNameProps): ReactElement => {
  const { newStyles } = useRenderStyles(styles);
  const isAtkLineShownCircleClass = useMemo(() => {
    return showAtkLine ? newStyles?.atkCircleWithAtkLine : '';
  }, [showAtkLine, newStyles]);

  const isAtkLineShownWrapperClass = useMemo(() => {
    return showAtkLine ? newStyles?.atkWrapperWithAtkLine : '';
  }, [showAtkLine, newStyles]);

  return (
    <UiElementLayout className={classNamesUtil(newStyles.atkWrapper, isAtkLineShownWrapperClass)}>
      {showAtkLine ? (
        <UiHideInMobile>
          <UiElementLayout
            className={classNamesUtil(newStyles.atkLine, newStyles?.[`${getThemeClass}AtkLine`])}
          />
        </UiHideInMobile>
      ) : null}
      <UiElementLayout
        className={classNamesUtil(
          newStyles.atkCircle,
          isAtkLineShownCircleClass,
          newStyles?.[`${getThemeClass}AtkCircle`]
        )}
      >
        <UiIconPokeType type={typeData?.types?.[0]?.type?.name} size="10" />
      </UiElementLayout>
      <UiTypography
        className={classNamesUtil(
          newStyles.atkText,
          newStyles?.[`${getThemeClass}ContentCardText`]
        )}
        typographyType={TypographyTypeEnum.SPAN}
      >
        {abilityData?.ability?.name}
      </UiTypography>
    </UiElementLayout>
  );
};

export default memo(PokemonAbilityName);
