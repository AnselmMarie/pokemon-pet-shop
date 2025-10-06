import { createRouter, Outlet } from '@tanstack/react-router';
import { createRootRoute, createRoute } from '@tanstack/react-router';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homepageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Homepage Page</div>,
});

const routeTree = rootRoute.addChildren([homepageRoute]);

export const router = createRouter({ routeTree });
