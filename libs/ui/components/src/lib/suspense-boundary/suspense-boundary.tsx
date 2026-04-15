import { Suspense, ReactElement } from 'react';

import { ErrorBoundary } from '../error-boundary';

import { SuspenseBoundaryProps } from './suspense-boundary.interface';

export const SuspenseBoundary = ({
  children,
  fallback = null,
  errorFallback,
  onError,
  onReset,
}: SuspenseBoundaryProps): ReactElement => {
  return (
    <ErrorBoundary fallback={errorFallback} onError={onError} onReset={onReset}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
