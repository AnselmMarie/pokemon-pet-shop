import { ReactElement } from 'react';

import { UiHeader, UiPokemonList } from '@pokemon-pet-shop/features';
import { UiContainer, UiElementLayout } from '@pokemon-pet-shop/ui';

import styles from './homepage.module.css';

const Homepage = (): ReactElement => {
  return (
    <UiElementLayout>
      <UiHeader />
      <UiContainer className={styles.contentWrapper}>
        <UiPokemonList />
      </UiContainer>
      <UiElementLayout>footer</UiElementLayout>
    </UiElementLayout>
  );
};

export default Homepage;
