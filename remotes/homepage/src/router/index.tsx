import {
  createRouter,
  createRootRoute,
  createRoute,
  Navigate,
} from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';

import { HomePage, NotFoundPage } from '../pages';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/not-found',
  component: NotFoundPage,
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <Navigate to="/not-found" />,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  notFoundRoute,
  catchAllRoute,
]);

export const router = createRouter({ routeTree });

export type Router = typeof router;
