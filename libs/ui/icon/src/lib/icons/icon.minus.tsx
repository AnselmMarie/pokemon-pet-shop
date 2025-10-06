import { ReactElement } from 'react';

import { IconSvgProps } from './icon.svg.interface';

const IconMinus = ({ size, fill, stroke, onClick }: IconSvgProps): ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 24 24"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
    </svg>
  );
};

export { IconMinus };
