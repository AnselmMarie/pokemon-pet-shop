import { ReactElement } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';

import { THEME_RADIUS_8, THEME_RADIUS_CIRCLE, THEME_SPACING_15 } from '../../styles/ts/variables';
import { UiElementLayout } from '../element.layout';

import { styles } from './shkeleon.module.native';
import { SkeletonProps } from './skeleton.interface';

const Skeleton = ({
  count = 1,
  width = '100%',
  height = 15,
  circle = false,
}: SkeletonProps): ReactElement => {
  const { newStyles } = useRenderStyles(styles);
  const borderRadiusStyle = circle ? THEME_RADIUS_CIRCLE : THEME_RADIUS_8;
  let newCount;

  if (circle) {
    newCount = 1;
  } else if (count >= 5) {
    newCount = 5;
  } else {
    newCount = count;
  }

  const arr = Array(newCount).fill({});

  return (
    <>
      {arr.map((el: any, i: number): ReactElement => {
        return (
          <UiElementLayout key={i} className={{ marginBottom: count > 1 ? THEME_SPACING_15 : '' }}>
            <UiElementLayout
              className={{
                width: count > 1 && i === arr.length - 1 ? '50%' : width,
                height,
                backgroundColor: newStyles.skeletonBg,
                borderRadius: borderRadiusStyle,
              }}
            />
          </UiElementLayout>
        );
      })}
    </>
  );
};

export default Skeleton;
