import { ReactElement, useMemo } from 'react';
import { ReactSVG } from 'react-svg';

import { Skeleton } from '@ui/skeleton';

// import { IconPokeTypeProps } from './icon.poke.type.interface';
import { iconPokeSvgMap } from './icon-poke-type.util';

export const IconPokeType = ({
  type = 'grass',
  size,
  className = null,
  isLoading = false,
}: any): ReactElement => {
  const getIcon = useMemo(() => {
    return iconPokeSvgMap[`${type}Icon`];
  }, [type]);

  if (isLoading) {
    return <Skeleton width={size} height={size} circle />;
  }

  return (
    <ReactSVG
      src={getIcon}
      title={`${type} Icon`}
      beforeInjection={(svg: any) => {
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
      }}
      className={`${className} [&>div]:flex [&>div]:justify-center [&>div]:items-center`}
    />
  );
};
