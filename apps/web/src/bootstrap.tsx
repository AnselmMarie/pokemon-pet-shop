import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';

import { globalStore } from 'store/theme';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </StrictMode>
);
