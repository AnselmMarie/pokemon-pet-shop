import { ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-primitives';

export const serverError = ({ messages = [] }): ReactElement => {
  return (
    <Box>
      {messages.map((el, i: number): ReactElement => {
        return <Box key={i}>testing</Box>;
      })}
    </Box>
  );
};
