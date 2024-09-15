import * as ReactDOM from 'react-dom/client';

import { UiApp } from './providers/app';

import '@pokemon-pet-shop/ui/styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<UiApp />);
