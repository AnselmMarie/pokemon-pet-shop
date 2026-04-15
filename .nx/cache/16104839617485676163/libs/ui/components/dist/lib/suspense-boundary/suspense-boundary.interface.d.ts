import { ReactNode } from 'react';
export interface SuspenseBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    errorFallback?: ReactNode;
    onError?: (error: Error, stackTrace: string) => void;
    onReset?: () => void;
}
//# sourceMappingURL=suspense-boundary.interface.d.ts.map