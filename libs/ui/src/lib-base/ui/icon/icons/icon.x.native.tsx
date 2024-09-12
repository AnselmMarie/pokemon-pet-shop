import { ReactElement } from 'react';

import { TouchableHighlight } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconX = ({ size, fill, onClick }: IconSvgProps): ReactElement => {
  return (
    <TouchableHighlight onPress={onClick}>
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
        <Path d="M18 6l-12 12" />
        <Path d="M6 6l12 12" />
      </Svg>
    </TouchableHighlight>
  );
};

export { IconX };
