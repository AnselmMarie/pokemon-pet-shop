import { ReactElement } from 'react';

import { UiPokemonList } from '@pokemon-pet-shop/features';
import { UiContainer, UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';
import { Text } from 'react-native';

import { styles } from './homepage.module';

export const Homepage = (): ReactElement => {
  // return <Text>fadsf</Text>;
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
