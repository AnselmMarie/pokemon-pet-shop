import { render } from '@testing-library/react';

import UiSkeleton from './skeleton.view';

describe('Template', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
