import { memo, ReactElement, useMemo } from 'react';

import { capitalizeContent } from '@utils/textTransform';

import { Skeleton } from '@ui/skeleton';

// import { IconPokeTypeProps } from './icon.poke.type.interface';
import { IconPokeSvgMap } from './icon-poke-type.util.native';

// classNameIcon = null,
const Icon = ({
  type = 'grass',
  size = 32,
  isLoading = false,
}: any): ReactElement => {
  const IconComponent = useMemo(() => {
    return IconPokeSvgMap[`Icon${capitalizeContent(type)}`];
  }, [type]);

  if (isLoading) {
    return <Skeleton width={size} height={size} circle />;
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
