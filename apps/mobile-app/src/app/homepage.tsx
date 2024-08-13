import { UiElementLayout, UiTypography } from '@pokemon-pet-shop/ui';
import { View, Text } from 'react-native';

export const Homepage = () => {
  return (
    <UiElementLayout>
      <UiElementLayout>
        {/* <View className="logo" />
        <View></View>
        <View className="shoppingIcon" /> */}
      </UiElementLayout>

      <UiElementLayout>
        <UiElementLayout></UiElementLayout>
        {/* <Image className="image" /> */}
        <UiElementLayout>
          <UiElementLayout>
            <UiElementLayout>
              <UiTypography>Basic Pokemon</UiTypography>
              <UiTypography>NO. 001</UiTypography>
            </UiElementLayout>
            <UiTypography>Bulbasaur</UiTypography>
          </UiElementLayout>

          <UiElementLayout>
            <UiElementLayout></UiElementLayout>
            <UiElementLayout>
              <UiTypography>Razor Wind</UiTypography>
            </UiElementLayout>
          </UiElementLayout>

          <UiElementLayout>
            <UiElementLayout>
              <UiTypography>Get Pet</UiTypography>
            </UiElementLayout>
            <UiElementLayout>
              <UiTypography>Details</UiTypography>
            </UiElementLayout>
          </UiElementLayout>
        </UiElementLayout>
      </UiElementLayout>

      <UiElementLayout>
        <UiTypography>footer</UiTypography>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default Homepage;
