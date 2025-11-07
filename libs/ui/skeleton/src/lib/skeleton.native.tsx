import { ReactElement } from 'react';
import ReactNativeSkeleton from 'react-native-reanimated-skeleton';

import { Box } from '@ui/box';

// import { THEME_RADIUS_PILL, THEME_SPACING_15 } from '../../styles/ts/variables';

import { SkeletonProps } from './skeleton.interface';

export const SkeletonView = ({
  count = 1,
  width,
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
    <Box>
      {arr.map((el: any, i: number): ReactElement => {
        return (
          <ReactNativeSkeleton
            key={i}
            layout={[
              {
                key: 'someId',
                width,
                height,
                // borderRadius: THEME_RADIUS_PILL,
                // marginBottom: count === 1 ? 0 : THEME_SPACING_15,
              },
            ]}
            isLoading
          />
        );
      })}
    </Box>
  );
};
