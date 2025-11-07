import { Footer } from '@features/footer';
import { useAtom } from 'jotai';

import { themeAtom } from 'store/theme';

import '../styles.css';

export function App() {
  const [theme] = useAtom(themeAtom);

  console.log('footer theme:', theme);
  return <Footer />;
}

export default App;
