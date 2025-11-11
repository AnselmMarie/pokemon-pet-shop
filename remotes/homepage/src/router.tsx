import { createRouter, Outlet } from '@tanstack/react-router';
import { createRootRoute, createRoute } from '@tanstack/react-router';

import { PokemonList } from '@features/pokemon';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homepageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <PokemonList />,
});

const routeTree = rootRoute.addChildren([homepageRoute]);

export const router = createRouter({ routeTree });
