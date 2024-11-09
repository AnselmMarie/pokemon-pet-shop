import { ReactElement } from 'react';

import { TouchableOpacity } from 'react-native';

import { UiImage } from '../../image';
import pokeBallImage from '../assets/poke.ball.png';

import { IconImageProps } from './icon.svg.interface';

const IconPokeBall = ({ className, onClick }: IconImageProps): ReactElement => {
  return (
    <TouchableOpacity onPress={onClick}>
      <UiImage src={pokeBallImage} className={className} />
    </TouchableOpacity>
  );
};

export { IconPokeBall };
