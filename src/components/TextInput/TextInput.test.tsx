import '@testing-library/jest-dom';

import { TextInput } from '..';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('text input', () => {
  test('should render a text input', () => {
    render(<TextInput data-testid="text-input" />);
    const textInput = screen.getByTestId('text-input');
    expect(textInput).toHaveValue('');
    expect(textInput).toHaveAttribute('type', 'text');
  });

  test('should render input with delete className prop and red border color', () => {
    render(<TextInput data-testid="text-input" error />);

    const textInput = screen.getByTestId('text-input');
    expect(textInput.classList).toContain('border-red-400');
    expect(textInput.classList).toContain('dark:border-red-500/50');
  });

  test('should render text input with a custom placeholder', () => {
    render(<TextInput data-testid="text-input" placeholder="Text Input Test Placeholder" />);

    const textInput = screen.getByTestId('text-input');
    expect(textInput.getAttribute('placeholder')).toBe('Text Input Test Placeholder');
  });

  test('should change the input value based on changes', () => {
    render(<TextInput data-testid="text-input" />);

    const textInput = screen.getByTestId('text-input');
    expect(textInput).toHaveValue('');

    fireEvent.change(textInput, { target: { value: 'Testing input' } });
    expect(textInput).toHaveValue('Testing input');
    expect(textInput).not.toHaveValue('');

    userEvent.clear(textInput);
    expect(textInput).toHaveValue('');
  });

  test('should check the input based onChange event', async () => {
    const handleChange = jest.fn();
    render(<TextInput data-testid="text-input" onChange={handleChange} />);
    const textInput = screen.getByTestId('text-input');

    expect(textInput).toHaveValue('');
    expect(handleChange).not.toBeCalled();

    await userEvent.type(textInput, 'New Value');

    expect(textInput).toHaveValue('New Value');

    expect(handleChange).toBeCalled(); // first option
    expect(handleChange).toBeCalledTimes(9);

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'New Value',
        }),
      }),
    );
  });
});
