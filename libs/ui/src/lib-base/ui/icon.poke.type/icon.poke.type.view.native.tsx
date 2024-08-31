import { memo, ReactElement, useMemo } from 'react';

import { capitalizeContentUtil } from '@pokemon-pet-shop/utils';

import { IconPokeTypeEnum } from './icon.poke.type.enum';
import { IconPokeTypeProps } from './icon.poke.type.interface';
import { IconPokeSvgMap } from './icon.poke.type.util.native';

const Icon = ({
  type = IconPokeTypeEnum.GRASS,
  size = '32',
  // classNameIcon = null,
}: IconPokeTypeProps): ReactElement => {
  const IconComponent = useMemo(() => {
    return IconPokeSvgMap[`Icon${capitalizeContentUtil(type)}`];
  }, [type]);

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
