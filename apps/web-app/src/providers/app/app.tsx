// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement, StrictMode } from 'react';

import { UiCartModal } from '@pokemon-pet-shop/features';
import { UiElementLayout } from '@pokemon-pet-shop/ui';

import Homepage from '../../pages/homepage';

const App = (): ReactElement => {
  return (
    <StrictMode>
      <UiElementLayout>
        <UiElementLayout>
          <Homepage />
        </UiElementLayout>
        <UiCartModal />
      </UiElementLayout>
    </StrictMode>
  );
};

export default App;
