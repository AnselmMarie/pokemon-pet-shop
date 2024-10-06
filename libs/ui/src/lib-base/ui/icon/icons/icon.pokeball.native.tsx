import { ReactElement } from 'react';

import { TouchableHighlight } from 'react-native';

import { UiImage } from '../../image';
import pokeBallImage from '../assets/poke.ball.png';

import { IconImageProps } from './icon.svg.interface';

const IconPokeBall = ({ className, onClick }: IconImageProps): ReactElement => {
  return (
    <TouchableHighlight onPress={onClick}>
      <UiImage src={pokeBallImage} className={className} />
    </TouchableHighlight>
  );
};

export { IconPokeBall };
