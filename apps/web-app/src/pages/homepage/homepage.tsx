import { ReactElement } from 'react';

import { UiFooter, UiHeader, UiPokemonList } from '@pokemon-pet-shop/features';
import { UiContainer, UiElementLayout } from '@pokemon-pet-shop/ui';

import styles from './homepage.module.css';

const Homepage = (): ReactElement => {
  return (
    <UiElementLayout>
      <UiHeader />
      <UiContainer className={styles.contentWrapper}>
        <UiPokemonList />
      </UiContainer>
      <UiFooter />
    </UiElementLayout>
  );
};

export default Homepage;
