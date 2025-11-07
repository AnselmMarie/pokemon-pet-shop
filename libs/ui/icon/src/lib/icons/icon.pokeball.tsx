import { ReactElement } from 'react';

import { Box } from '@ui/box';

import pokeBallImage from '../assets/poke.ball.png';

import { IconImageProps } from './icon.svg.interface';

const IconPokeBall = ({ className, onClick }: IconImageProps): ReactElement => {
  return (
    <Box onClick={onClick}>
      <img className={className} src={pokeBallImage} alt="Pokeball" />
    </Box>
  );
};

export { IconPokeBall };
