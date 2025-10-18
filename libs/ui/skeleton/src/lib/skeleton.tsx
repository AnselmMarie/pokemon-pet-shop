import { ReactElement } from 'react';

import ReactSkeleton from 'react-loading-skeleton';

// import { THEME_RADIUS_8, THEME_SPACING_15 } from '../../styles/ts/variables';

import { SkeletonProps } from './skeleton.interface';

export const Skeleton = ({
  count = 1,
  width,
  height = 15,
  circle = false,
}: SkeletonProps): ReactElement => {
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
      {arr.map((_, i: number): ReactElement => {
        return (
          <ReactSkeleton
            key={i}
            width={width}
            height={height}
            // style={{ marginBottom: count === 1 ? 0 : THEME_SPACING_15 }}
            // borderRadius={THEME_RADIUS_8}
            circle={circle}
          />
        );
      })}
    </>
  );
};
