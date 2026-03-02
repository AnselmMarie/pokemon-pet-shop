import { ReactElement } from 'react';

import ReactSkeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// import { THEME_RADIUS_8, THEME_SPACING_15 } from '../../styles/ts/variables';

import { SkeletonWebProps } from './skeleton.interface';

export const Skeleton = ({
  count = 1,
  width,
  height = 15,
  circle = false,
  borderRadius,
  baseColor,
  highlightColor,
}: SkeletonWebProps): ReactElement => {
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
            borderRadius={borderRadius}
            width={width}
            height={height}
            // style={{ marginBottom: count === 1 ? 0 : THEME_SPACING_15 }}
            // borderRadius={THEME_RADIUS_8}
            circle={circle}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        );
      })}
    </>
  );
};
