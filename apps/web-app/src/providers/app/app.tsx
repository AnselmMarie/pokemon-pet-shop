// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement, StrictMode } from 'react';

import { UiElementLayout, UiModal } from '@pokemon-pet-shop/ui';

import Homepage from '../../pages/homepage';

const App = (): ReactElement => {
  return (
    <StrictMode>
      <UiElementLayout>
        <UiElementLayout>
          <Homepage />
        </UiElementLayout>
        <UiModal />
      </UiElementLayout>
    </StrictMode>
  );
};

export default App;
