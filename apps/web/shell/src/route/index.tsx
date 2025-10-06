import { lazy, Suspense } from 'react';
import {
  createRootRoute,
  createRouter,
  createRoute,
  Outlet,
} from '@tanstack/react-router';

const HomepageModule = lazy(() => import('homepage/Module'));

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homepageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <Suspense fallback={<div>Loading Homepage...</div>}>
      <HomepageModule />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([homepageRoute]);
export const router = createRouter({ routeTree });
