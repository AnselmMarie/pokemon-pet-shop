import { ReactElement } from 'react';

import Skeleton from 'react-native-reanimated-skeleton';

import { THEME_RADIUS_PILL, THEME_SPACING_15 } from '../../styles/ts/variables';
import { UiElementLayout } from '../element.layout';

import { SkeletonProps } from './skeleton.interface';

const SkeletonView = ({
  count = 1,
  width = '100%',
  height = 15,
  circle = false,
}: SkeletonProps): ReactElement => {
  // const borderRadiusStyle = circle ? THEME_RADIUS_CIRCLE : THEME_RADIUS_8;
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
    <UiElementLayout>
      {arr.map((el: any, i: number): ReactElement => {
        return (
          <Skeleton
            key={i}
            layout={[
              {
                key: 'someId',
                width,
                height,
                borderRadius: THEME_RADIUS_PILL,
                marginBottom: count === 1 ? 0 : THEME_SPACING_15,
              },
            ]}
            isLoading
          />
        );
      })}
    </UiElementLayout>
  );
};

export default SkeletonView;
