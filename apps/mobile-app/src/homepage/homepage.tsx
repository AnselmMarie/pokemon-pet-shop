import { ReactElement } from 'react';

import { UiPokemonList } from '@pokemon-pet-shop/features';
import { UiContainer, UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';

import { styles } from './homepage.module';

export const Homepage = (): ReactElement => {
  return (
    <UiElementLayout>
      <UiContainer className={styles.contentWrapper}>
        <UiPokemonList />
      </UiContainer>
      <UiTypography>footer</UiTypography>
    </UiElementLayout>
  );
};

export default Homepage;
