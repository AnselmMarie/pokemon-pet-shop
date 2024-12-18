import { ReactElement } from 'react';

import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconMenu = ({ size, fill, stroke, onClick }: IconSvgProps): ReactElement => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Svg
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Path d="M4 6l16 0" />
        <Path d="M4 12l16 0" />
        <Path d="M4 18l16 0" />
      </Svg>
    </TouchableOpacity>
  );
};

export { IconMenu };
