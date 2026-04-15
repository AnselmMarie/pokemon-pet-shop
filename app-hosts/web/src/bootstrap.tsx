import * as ReactDOM from 'react-dom/client';

import App from './app';
import { AppProvider } from './providers/app-provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
