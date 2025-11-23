import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';

import { capitalizeName } from '@utils/textTransform';

// import { TagItemColorEnum } from './tag.item.enum';
import type { TagProps } from './tagItem.interface';

// colorTheme = TagItemColorEnum.GRASS,

export const TagItem = ({
  name = '',
}: PropsWithChildren<TagProps>): ReactElement => {
  return (
    <Box
      className={`rounded-pill py-sm px-md`}
      // className={classNamesUtil(newStyles.tag, newStyles?.[`${colorTheme}Bg`])}
    >
      <Typography>{capitalizeName(name)}</Typography>
    </Box>
  );
};
