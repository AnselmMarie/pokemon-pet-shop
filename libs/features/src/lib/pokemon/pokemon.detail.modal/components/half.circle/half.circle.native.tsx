import { ImageBackground } from 'react-native';

import { styles } from './half.circle.module.native';

const HalfCircle = () => {
  return (
    <ImageBackground
      source={require('../../assets/half.circle.png')}
      resizeMode="cover"
      style={styles.contentCurve}
    />
  );
};

export default HalfCircle;
