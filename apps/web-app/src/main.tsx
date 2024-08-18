import * as ReactDOM from 'react-dom/client';

import { UiApp } from './providers/app';

import './styles/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<UiApp />);
