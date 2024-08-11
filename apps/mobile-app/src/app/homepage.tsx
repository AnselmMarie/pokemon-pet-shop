import { ElementLayout, Typography } from '@pokemon-pet-shop/ui';
import { View, Text } from 'react-native';

export const Homepage = () => {
  return (
    <View>
      <ElementLayout>
        {/* <View className="logo" />
        <View></View>
        <View className="shoppingIcon" /> */}
      </ElementLayout>

      <ElementLayout>
        <View></View>
        {/* <Image className="image" /> */}
        <View>
          <View>
            <View>
              <Typography>Basic Pokemon</Typography>
              <Typography>NO. 001</Typography>
            </View>
            <Typography>Bulbasaur</Typography>
          </View>

          <View>
            <View></View>
            <View>
              <Typography>Razor Wind</Typography>
            </View>
          </View>

          <View>
            <View>
              <Typography>Get Pet</Typography>
            </View>
            <View>
              <Typography>Details</Typography>
            </View>
          </View>
        </View>
      </ElementLayout>

      <View>
        <Text>footer</Text>
      </View>
    </View>
  );
};

export default Homepage;
