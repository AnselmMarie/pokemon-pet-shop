import { memo, ReactElement, useMemo } from 'react';

import { capitalizeContent } from '@pokemon-pet-shop/util-text-transform';

import { Skeleton } from '@pokemon-pet-shop/ui-skeleton';

import { IconPokeSvgMap } from './icon-poke-type.util.native';
import { IconPokeTypeProps } from './icon-poke-type.interface';

const Icon = ({
  type = 'grass',
  size = 32,
  isLoading = false,
}: IconPokeTypeProps): ReactElement => {
  const IconComponent = useMemo(() => {
    return IconPokeSvgMap[`Icon${capitalizeContent(type)}`];
  }, [type]);

  if (isLoading) {
    return <Skeleton width={size} height={size} circle />;
  }

  return (
    <IconComponent
      size={String(size)}
      // fill={color}
      // className={classNameIcon}
      // onClick={iconClick}
      // strokeLinejoin="miter" // override other SVG props
    />
  );
};

export default memo(Icon);
