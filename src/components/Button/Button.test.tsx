import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Button from '.';
import userEvent from '@testing-library/user-event';

describe('button component', () => {
  test('should render a Button component with children text', () => {
    render(<Button>Test Button</Button>);
    const buttonWithText = screen.getByText('Test Button');
    expect(buttonWithText).toBeInTheDocument();
  });

  test('should have classname of font-semibold with component props bold', () => {
    render(<Button bold>Class Test Button</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl.classList).toContain('font-semibold');
  });

  test('should have classname of .bg-red-500 when used with "delete" variant prop', () => {
    render(<Button variant={'delete'}>Class Test Button</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl.classList).toContain('bg-red-500');
  });
});
