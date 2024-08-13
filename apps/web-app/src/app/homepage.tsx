import { UiCard } from '@pokemon-pet-shop/ui';

import styles from './app.module.css';
import Header from './header';

const Homepage = () => {
  return (
    <div>
      <Header />
      <UiCard />
      <div>footer</div>
    </div>
  );
};

export default Homepage;
