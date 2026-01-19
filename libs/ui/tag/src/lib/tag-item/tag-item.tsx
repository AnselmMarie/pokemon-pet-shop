import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-box';
import { Typography } from '@pokemon-pet-shop/ui-typography';

import { capitalizeName } from '@pokemon-pet-shop/util-text-transform';

import type { TagProps } from './tag-item.interface';
import { pokeTagTypeMap } from './pokemon-tag-type-map.util';

export const TagItem = ({
  name = '',
  pokeTypeClass = '',
}: PropsWithChildren<TagProps>): ReactElement => {
  return (
    <Box
      className={`rounded-pill py-xs px-md ${
        pokeTagTypeMap.get(pokeTypeClass)?.[`${pokeTypeClass}Bg` as keyof object] ?? ''
      }`}
    >
      <Typography
        className={`${
          pokeTagTypeMap.get(pokeTypeClass)?.[`${pokeTypeClass}Text` as keyof object] ?? ''
        }`}
      >
        {capitalizeName(name)}
      </Typography>
    </Box>
  );
};
