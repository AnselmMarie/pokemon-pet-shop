import { ReactElement, useMemo } from 'react';
import { ReactSVG } from 'react-svg';

import { Skeleton } from '@pokemon-pet-shop/ui-skeleton';

import { iconPokeSvgMap } from './icon-poke-type.util';
import { IconPokeTypeProps } from './icon-poke-type.interface';

export const IconPokeType = ({
  type = 'grass',
  size,
  className = '',
  isLoading = false,
}: IconPokeTypeProps): ReactElement => {
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
      beforeInjection={(svg: Element) => {
        svg.setAttribute('width', String(size));
        svg.setAttribute('height', String(size));
      }}
      className={`${className} [&>div]:flex [&>div]:justify-center [&>div]:items-center`}
    />
  );
};
