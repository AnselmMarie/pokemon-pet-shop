import { ReactElement } from 'react';

import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon-svg.interface';

export const IconPhoto = ({ size, fill, stroke, onClick }: IconSvgProps): ReactElement => {
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
        <Path d="M15 8h.01" />
        <Path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
        <Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
        <Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
      </Svg>
    </TouchableOpacity>
  );
};
