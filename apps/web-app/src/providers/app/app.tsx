import { ReactElement, StrictMode } from 'react';

import { UiCartModal, UiNavMobileModal } from '@pokemon-pet-shop/features';
import { UiElementLayout } from '@pokemon-pet-shop/ui';

import Homepage from '../../pages/homepage';

const App = (): ReactElement => {
  return (
    <StrictMode>
      <UiElementLayout>
        <UiElementLayout>
          <Homepage />
        </UiElementLayout>
        <UiCartModal isModalShown={false} />
        <UiNavMobileModal isModalShown={false} />
      </UiElementLayout>
    </StrictMode>
  );
};

export default App;
