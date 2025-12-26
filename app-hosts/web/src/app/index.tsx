import * as React from 'react';

import { RouterProvider } from '../route/route-provider';

import '../styles.css';

const Header = React.lazy(() => import('webHeader/Module'));
const Footer = React.lazy(() => import('webFooter/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <React.Suspense fallback="Loading Header">
        <Header />
      </React.Suspense>
      <RouterProvider />
      <React.Suspense fallback="Loading Footer">
        <Footer />
      </React.Suspense>
    </React.Suspense>
  );
}

export default App;
