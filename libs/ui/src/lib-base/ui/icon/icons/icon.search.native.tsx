import { ReactElement } from 'react';

import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconSearch = ({ size, fill, stroke, onClick }: IconSvgProps): ReactElement => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Svg
        width={size}
        height={size}
        fill={fill}
        viewBox="0 0 24 24"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <Path d="M21 21l-6 -6" />
      </Svg>
    </TouchableOpacity>
  );
};

export { IconSearch };
