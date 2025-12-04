import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';

import { capitalizeName } from '@utils/textTransform';

import type { TagProps } from './tagItem.interface';
import { pokeTagTypeMap } from './pokemon.tag.type.map.util';

export const TagItem = ({
  name = '',
  pokeTypeClass,
}: PropsWithChildren<TagProps>): ReactElement => {
  return (
    <Box
      className={`rounded-pill py-xs px-md ${
        pokeTagTypeMap.get(pokeTypeClass)?.[
          `${pokeTypeClass}Bg` as keyof object
        ] ?? ''
      }`}
    >
      <Typography
        className={`${
          pokeTagTypeMap.get(pokeTypeClass)?.[
            `${pokeTypeClass}Text` as keyof object
          ] ?? ''
        }`}
      >
        {capitalizeName(name)}
      </Typography>
    </Box>
  );
};
