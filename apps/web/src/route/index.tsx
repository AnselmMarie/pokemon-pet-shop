import { lazy, Suspense } from 'react';
import {
  createRootRoute,
  createRouter,
  createRoute,
  Navigate,
  Outlet,
} from '@tanstack/react-router';

const HomepageModule = lazy(() => import('homepage/Module'));
const NotFoundModule = lazy(() => import('not-found/Module'));

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

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/not-found',
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundModule />
    </Suspense>
  ),
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <Navigate to="/not-found" />,
});

const routeTree = rootRoute.addChildren([homepageRoute, notFoundRoute, catchAllRoute]);
export const router = createRouter({ routeTree });
