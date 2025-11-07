import { Header } from '@features/header';
import { useAtom } from 'jotai';

import { themeAtom } from 'store/theme';

import '../styles.css';

export function App() {
  const [theme] = useAtom(themeAtom);

  console.log('header theme:', theme);
  return <Header />;
}

export default App;
