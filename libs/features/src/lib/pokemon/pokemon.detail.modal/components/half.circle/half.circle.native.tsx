import { ThemeTypeEnum, useThemeStore } from '@pokemon-pet-shop/store';
import { ImageBackground } from 'react-native';

import { styles } from './half.circle.module.native';

const HalfCircle = () => {
  const { theme } = useThemeStore();
  const imagePath =
    theme === ThemeTypeEnum.LIGHT
      ? require('../../assets/half.circle.png')
      : require('../../assets/half.circle.dark.png');

  return <ImageBackground source={imagePath} resizeMode="cover" style={styles.contentCurve} />;
};

export default HalfCircle;
