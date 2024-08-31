import { ReactElement } from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconSvgProps } from './icon.svg.interface';

const IconSteel = ({ size, fill = 'none' }: IconSvgProps): ReactElement => {
  return (
    <Svg width={size} height={size} fill={fill} viewBox="0 0 512 512">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.0511107 254.527C-0.0170046 254.411 -0.0170388 254.267 0.0510196 254.15L128.795 34.1843C128.862 34.0702 128.985 34 129.117 34H384.294C384.427 34 384.55 34.0708 384.617 34.1859L511.949 254.152C512.016 254.267 512.016 254.41 511.949 254.525L384.617 474.244C384.55 474.359 384.427 474.43 384.294 474.43H129.117C128.985 474.43 128.862 474.36 128.795 474.246L0.0511107 254.527ZM374.617 254.215C374.617 319.703 321.528 372.792 256.04 372.792C190.552 372.792 137.463 319.703 137.463 254.215C137.463 188.726 190.552 135.638 256.04 135.638C321.528 135.638 374.617 188.726 374.617 254.215Z"
        fill="white"
      />
    </Svg>
  );
};

export { IconSteel };
