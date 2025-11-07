import { ReactElement } from 'react';

import { Box } from '@ui/box';

export const serverError = ({ messages = [] }): ReactElement => {
  return (
    <Box>
      {messages.map((el, i: number): ReactElement => {
        return <Box key={i}>testing</Box>;
      })}
    </Box>
  );
};
