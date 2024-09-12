import { ReactElement } from 'react';

import { TouchableHighlight } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconMoon = ({ size, fill, onClick }: IconSvgProps): ReactElement => {
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
        <Path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </Svg>
    </TouchableHighlight>
  );
};

export { IconMoon };
