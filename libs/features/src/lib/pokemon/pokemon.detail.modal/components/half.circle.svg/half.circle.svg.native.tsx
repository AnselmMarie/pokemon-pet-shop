import { Svg, Path } from 'react-native-svg';

const halfCircleSvg = () => {
  return (
    <Svg width="550" height="60" viewBox="0 0 550 60" fill="none">
      <Path
        d="M0 60H550C505.528 24.7899 399.153 0 275 0C150.847 0 44.4722 24.7899 0 60Z"
        fill="white"
      />
    </Svg>
  );
};

export default halfCircleSvg;
