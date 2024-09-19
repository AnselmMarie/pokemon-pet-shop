import { UiElementLayout } from '@pokemon-pet-shop/ui';
import { ReactSVG } from 'react-svg';

import halfCircle from '../../assets/half.circle.svg';

import { styles } from './half.circle.svg.module';

const halfCircleSVG = () => {
  return (
    <UiElementLayout className={styles.contentCurve} />
    // <ReactSVG
    //   src={halfCircle}
    //   // title={`${type} Icon`}
    //   beforeInjection={(svg) => {
    //     // svg.setAttribute('width', '100%');
    //     // svg.setAttribute('height', size);
    //   }}
    //   className={styles.contentCurve}
    // />
  );
};

export default halfCircleSVG;
