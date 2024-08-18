import { memo, ReactElement, useMemo } from 'react';

import {
  bugIcon,
  darkIcon,
  dragonIcon,
  electricIcon,
  fairyIcon,
  fightingIcon,
  fireIcon,
  flyingIcon,
  ghostIcon,
  grassIcon,
  groundIcon,
  iceIcon,
  normalIcon,
  poisonIcon,
  psychicIcon,
  rockIcon,
  steelIcon,
  waterIcon,
} from '@pokemon-pet-shop/assets';
import { ReactSVG } from 'react-svg';

import { IconPokeTypeEnum } from './icon.poke.type.enum';
import { IconPokeTypeProps } from './icon.poke.type.interface';

const iconPokeSvgMap = {
  bugIcon,
  darkIcon,
  dragonIcon,
  electricIcon,
  fairyIcon,
  fightingIcon,
  fireIcon,
  flyingIcon,
  ghostIcon,
  grassIcon,
  groundIcon,
  iceIcon,
  normalIcon,
  poisonIcon,
  psychicIcon,
  rockIcon,
  steelIcon,
  waterIcon,
};

const IconPokeType = ({
  type = IconPokeTypeEnum.GRASS,
  width = '',
  height = '',
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
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
      }}
      className={className}
    />
  );
};

export default memo(IconPokeType);
