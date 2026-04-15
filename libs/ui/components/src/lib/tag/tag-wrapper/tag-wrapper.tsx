import { type PropsWithChildren, type ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-primitives';

import type { TagProps } from './tag-wrapper.interface';

export const TagWrapper = ({
  tagAlign = 'center',
  children,
}: PropsWithChildren<TagProps>): ReactElement => {
  return <Box className={`flex gap-md justify-${tagAlign}`}>{children}</Box>;
};
