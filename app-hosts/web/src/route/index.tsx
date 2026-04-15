import { lazy } from 'react';
import {
  createRootRoute,
  createRouter,
  createRoute,
  Navigate,
  Outlet,
} from '@tanstack/react-router';
import { SuspenseBoundary } from '@pokemon-pet-shop/ui-components';

const HomepageModule = lazy(() => import('webHomepage/Module'));
const NotFoundModule = lazy(() => import('webNotFound/Module'));

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homepageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <SuspenseBoundary fallback={<div>Loading Homepage...</div>}>
      <HomepageModule />
    </SuspenseBoundary>
  ),
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/not-found',
  component: () => (
    <SuspenseBoundary fallback={<div>Loading...</div>}>
      <NotFoundModule />
    </SuspenseBoundary>
  ),
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <Navigate to="/not-found" />,
});

const routeTree = rootRoute.addChildren([homepageRoute, notFoundRoute, catchAllRoute]);
export const router = createRouter({ routeTree });
