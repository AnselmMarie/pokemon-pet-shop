import { ErrorInfo, ReactElement } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';

import { Button } from '../button';

import { ErrorBoundaryProps } from './error-boundary.interface';

const DefaultFallback = ({ resetErrorBoundary }: { resetErrorBoundary: () => void }) => {
  return (
    <Box className="flex flex-col items-center justify-center p-lg gap-md">
      <Typography variant="h2" className="text-lg font-bold">
        Something went wrong
      </Typography>
      <Typography className="text-md text-center">
        An unexpected error occurred. Please try again.
      </Typography>
      <Button text="Try Again" onClick={resetErrorBoundary} />
    </Box>
  );
};

export const ErrorBoundary = ({
  children,
  fallback,
  onError,
  onReset,
}: ErrorBoundaryProps): ReactElement => {
  const handleError = onError
    ? (error: unknown, info: ErrorInfo) => {
        const err = error instanceof Error ? error : new Error(String(error));
        onError(err, info.componentStack ?? '');
      }
    : undefined;

  return (
    <ReactErrorBoundary
      fallbackRender={({ resetErrorBoundary }) =>
        fallback ? <>{fallback}</> : <DefaultFallback resetErrorBoundary={resetErrorBoundary} />
      }
      onError={handleError}
      onReset={onReset}
    >
      {children}
    </ReactErrorBoundary>
  );
};
