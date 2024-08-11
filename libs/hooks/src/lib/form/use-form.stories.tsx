import type { Meta } from '@storybook/react';

import { FormDocView } from './use-form.doc';

const Story: Meta = {
  title: 'Hooks/READY/Form',
};
export default Story;

export const Primary = {
  render: () => <FormDocView />,
  args: {},
};
