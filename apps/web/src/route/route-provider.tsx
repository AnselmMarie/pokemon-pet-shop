import { RouterProvider as TanstackRouterProvider } from '@tanstack/react-router';

import { router } from '.';

export const RouterProvider = () => {
  return <TanstackRouterProvider router={router} />;
};
