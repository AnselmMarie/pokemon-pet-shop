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
  displayInDetail = false,
}: PokemonAbilityNameProps): ReactElement => {
  const { newStyles } = useRenderStyles(styles);

  const isAtkLineShownCircleClass = useMemo(() => {
    return showAtkLine ? newStyles?.atkCircleWithAtkLine : '';
  }, [showAtkLine, newStyles]);

  const isAtkLineShownWrapperClass = useMemo(() => {
    return showAtkLine ? newStyles?.atkWrapperWithAtkLine : '';
  }, [showAtkLine, newStyles]);

  const formatName = useMemo(() => {
    const splitName = abilityData?.ability?.name.split('-');

    const capitalizeName = splitName.map((el) => {
      return el?.replace(/^\w/, (el) => {
        return el.toUpperCase();
      });
    });

    return capitalizeName.join(' ');
  }, [abilityData?.ability?.name]);

  return (
    <UiElementLayout
      className={classNamesUtil(
        newStyles.atkWrapper,
        displayInDetail ? newStyles.atkWrapperDetailModal : '',
        isAtkLineShownWrapperClass
      )}
    >
      {showAtkLine ? (
        <UiHideInMobile>
          <UiElementLayout
            className={classNamesUtil(
              newStyles.atkLine,
              displayInDetail ? newStyles.atkLineDetailModal : '',
              newStyles?.[`${getThemeClass}AtkLine`]
            )}
          />
        </UiHideInMobile>
      ) : null}
      <UiElementLayout
        className={classNamesUtil(
          newStyles.atkCircle,
          displayInDetail ? newStyles.atkCircleDetailModal : '',
          isAtkLineShownCircleClass,
          newStyles?.[`${getThemeClass}AtkCircle`]
        )}
      >
        <UiIconPokeType
          type={typeData?.types?.[0]?.type?.name}
          size={displayInDetail ? '18' : '10'}
        />
      </UiElementLayout>
      <UiTypography
        className={classNamesUtil(
          newStyles.atkText,
          displayInDetail ? newStyles.atkTextDetailModal : '',
          newStyles?.[`${getThemeClass}ContentCardText`]
        )}
        typographyType={TypographyTypeEnum.SPAN}
      >
        {formatName}
      </UiTypography>
    </UiElementLayout>
  );
};

export default memo(PokemonAbilityName);
