import { ReactSVG } from 'react-svg';

import halfCircle from '../../assets/half.circle.svg';

import { styles } from './half.circle.svg.module';

const halfCircleSVG = () => {
  return (
    <ReactSVG
      src={halfCircle}
      // title={`${type} Icon`}
      beforeInjection={(svg) => {
        // svg.setAttribute('width', '100%');
        // svg.setAttribute('height', size);
      }}
      className={styles.contentCurve}
    />
  );
};

export default halfCircleSVG;
