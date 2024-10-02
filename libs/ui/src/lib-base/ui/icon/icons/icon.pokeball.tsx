import { ReactElement } from 'react';

import { UiElementLayout } from '../../element.layout';
import pokeBallImage from '../assets/poke.ball.png';

import { IconSvgProps } from './icon.svg.interface';

const IconPokeBall = ({ size, onClick }: IconSvgProps): ReactElement => {
  return (
    <UiElementLayout onClick={onClick}>
      <img width={size} height={size} src={pokeBallImage} alt="Pokeball" />
    </UiElementLayout>
  );
};

export { IconPokeBall };
