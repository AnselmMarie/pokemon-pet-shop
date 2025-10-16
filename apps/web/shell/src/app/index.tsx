import * as React from 'react';

import { RouterProvider } from '../route/route-provider';

import '../styles.css';

const HeaderModule = React.lazy(() => import('header/Module'));
const FooterModule = React.lazy(() => import('footer/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <React.Suspense fallback="Loading Header">
        <HeaderModule />
      </React.Suspense>
      <RouterProvider />
      <React.Suspense fallback="Loading Footer">
        <FooterModule />
      </React.Suspense>
    </React.Suspense>
  );
}

export default App;
