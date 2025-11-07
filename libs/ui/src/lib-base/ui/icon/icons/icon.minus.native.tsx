import { ReactElement } from 'react';

import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconMinus = ({ size, fill, stroke, onClick }: IconSvgProps): ReactElement => {
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
        <Path d="M5 12l14 0" />
      </Svg>
    </TouchableOpacity>
  );
};

export { IconMinus };
