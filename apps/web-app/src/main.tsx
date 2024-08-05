import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Homepage from './homepage/homepage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  </StrictMode>
);
