import { render } from '@testing-library/react';

import Coco from './coco';

describe('Coco', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Coco />);
    expect(baseElement).toBeTruthy();
  });
});
