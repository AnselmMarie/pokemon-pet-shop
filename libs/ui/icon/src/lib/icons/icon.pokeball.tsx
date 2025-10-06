import { ReactElement } from 'react';

import { UiElementLayout } from '../../element.layout';
import pokeBallImage from '../assets/poke.ball.png';

import { IconImageProps } from './icon.svg.interface';

const IconPokeBall = ({ className, onClick }: IconImageProps): ReactElement => {
  return (
    <UiElementLayout onClick={onClick}>
      <img className={className} src={pokeBallImage} alt="Pokeball" />
    </UiElementLayout>
  );
};

export { IconPokeBall };
