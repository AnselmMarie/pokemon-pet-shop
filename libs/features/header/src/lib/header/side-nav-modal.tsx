import { lazy, Suspense } from 'react';

const SideCartModal = lazy(() => import('webModalSideCart/Module'));

export const SideNavModal = () => {
  return (
    <Suspense fallback={null}>
      <SideCartModal />
    </Suspense>
  );
};
