import { ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';

import { SkeletonProps } from './skeleton.interface';

const Skeleton = ({
  count = 1,
  width = '100%',
  height = 15,
  circle = false,
}: SkeletonProps): ReactElement => {
  const borderRadiusStyle = circle ? 100 : 5;
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
        return <UiElementLayout key={i}>loading</UiElementLayout>;
      })}
    </>
  );
};

export default Skeleton;
