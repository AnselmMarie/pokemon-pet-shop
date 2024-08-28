import { UiHeader } from '@pokemon-pet-shop/features';
import { UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';

export const Homepage = () => {
  return (
    <UiElementLayout>
      <UiHeader />
      {/* <UiContainer className={styles.contentWrapper}>
        <UiPokemonList />
      </UiContainer> */}
      <UiTypography>footer</UiTypography>
    </UiElementLayout>
  );
};

export default Homepage;
