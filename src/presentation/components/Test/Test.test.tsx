import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Test } from './Test';

describe('Test', () => {
  it('renders the App component', () => {
    const { container } = render(<Test />);

    expect(container.firstChild).toMatchSnapshot();
    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
