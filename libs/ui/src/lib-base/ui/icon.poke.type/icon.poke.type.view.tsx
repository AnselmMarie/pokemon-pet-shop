import { memo, ReactElement, useMemo } from 'react';

import { ReactSVG } from 'react-svg';

import { IconPokeTypeEnum } from './icon.poke.type.enum';
import { IconPokeTypeProps } from './icon.poke.type.interface';
import { iconPokeSvgMap } from './icon.poke.type.util';

const IconPokeType = ({
  type = IconPokeTypeEnum.GRASS,
  size = '',
  className = null,
}: IconPokeTypeProps): ReactElement => {
  const getIcon = useMemo(() => {
    return iconPokeSvgMap[`${type}Icon`];
  }, [type]);

  return (
    <ReactSVG
      src={getIcon}
      title={`${type} Icon`}
      beforeInjection={(svg) => {
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
      }}
      className={className}
    />
  );
};

export default memo(IconPokeType);
