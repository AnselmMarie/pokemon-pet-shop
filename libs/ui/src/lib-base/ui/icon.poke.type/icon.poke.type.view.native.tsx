import { memo, ReactElement, useMemo } from 'react';

import { capitalizeContentUtil } from '@pokemon-pet-shop/utils';

import { UiSkeleton } from '../skeleton';

import { IconPokeTypeEnum } from './icon.poke.type.enum';
import { IconPokeTypeProps } from './icon.poke.type.interface';
import { IconPokeSvgMap } from './icon.poke.type.util.native';

const Icon = ({
  type = IconPokeTypeEnum.GRASS,
  size = '32',
  isLoading = false,
  // classNameIcon = null,
}: IconPokeTypeProps): ReactElement => {
  const IconComponent = useMemo(() => {
    return IconPokeSvgMap[`Icon${capitalizeContentUtil(type)}`];
  }, [type]);

  if (isLoading) {
    return <UiSkeleton width={size} height={size} circle />;
  }

  return (
    <IconComponent
      size={size}
      // fill={color}
      // className={classNameIcon}
      // onClick={iconClick}
      // strokeLinejoin="miter" // override other SVG props
    />
  );
};

export default memo(Icon);
