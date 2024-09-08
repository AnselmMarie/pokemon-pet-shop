import { ReactElement } from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconMinus = ({ size, fill }: IconSvgProps): ReactElement => {
  return (
    <Svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M5 12l14 0" />
    </Svg>
  );
};

export { IconMinus };
