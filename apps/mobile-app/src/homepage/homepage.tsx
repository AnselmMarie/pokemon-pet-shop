import { ReactElement } from 'react';

import { UiFooter, UiPokemonList } from '@pokemon-pet-shop/features';
import { UiContainer, UiElementLayout } from '@pokemon-pet-shop/ui';

import { styles } from './homepage.module';

export const Homepage = (): ReactElement => {
  return (
    <UiElementLayout>
      <UiContainer className={styles.contentWrapper}>
        <UiPokemonList />
      </UiContainer>
      <UiFooter />
    </UiElementLayout>
  );
};

export default Homepage;
