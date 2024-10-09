import { ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';

const serverError = ({ messages = [] }): ReactElement => {
  return (
    <UiElementLayout>
      {messages.map((el, i: number): ReactElement => {
        return <UiElementLayout key={i}>testing</UiElementLayout>;
      })}
    </UiElementLayout>
  );
};

export default serverError;
