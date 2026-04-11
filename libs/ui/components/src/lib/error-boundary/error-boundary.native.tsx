import { ReactElement } from 'react';
import RNErrorBoundary from 'react-native-error-boundary';

import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';

import { Button } from '../button';

import { ErrorBoundaryProps } from './error-boundary.interface';

const DefaultFallback = ({ resetError }: { resetError: () => void }) => {
  return (
    <Box className="flex flex-col items-center justify-center p-lg gap-md">
      <Typography variant="h2" className="text-lg font-bold">
        Something went wrong
      </Typography>
      <Typography className="text-md text-center">
        An unexpected error occurred. Please try again.
      </Typography>
      <Button text="Try Again" onClick={resetError} />
    </Box>
  );
};

export const ErrorBoundary = ({
  children,
  fallback,
  onError,
}: ErrorBoundaryProps): ReactElement => {
  return (
    <RNErrorBoundary
      FallbackComponent={({ resetError }) =>
        fallback ? <>{fallback}</> : <DefaultFallback resetError={resetError} />
      }
      onError={onError}
    >
      {children}
    </RNErrorBoundary>
  );
};
