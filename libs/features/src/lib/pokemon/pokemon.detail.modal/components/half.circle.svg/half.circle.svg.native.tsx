import { ImageBackground } from 'react-native';

import { styles } from './half.circle.svg.module.native';

const halfCircleSvg = () => {
  return (
    <ImageBackground
      source={require('../../assets/half.circle.png')}
      resizeMode="cover"
      style={styles.contentCurve}
    />
  );
};

export default halfCircleSvg;
