import { ReactElement } from 'react';

import { TouchableHighlight } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconShoppingCart = ({ size, fill, onClick }: IconSvgProps): ReactElement => {
  return (
    <TouchableHighlight onPress={onClick}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
        <Path d="M9 11v-5a3 3 0 0 1 6 0v5" />
      </Svg>
    </TouchableHighlight>
  );
};

export { IconShoppingCart };
