import '@testing-library/jest-dom';

import SelectInput from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe('select input component', () => {
  test('should render select input values correctly', () => {
    render(<SelectInput values={['Dog', 'Cat', 'Bird', 'Other']} data-testid="select-input" />);
    const selectInputEl = screen.getByTestId('select-input');
    expect(selectInputEl).toHaveValue('');
  });

  test('should render select input', () => {
    render(<SelectInput values={['Dog', 'Cat', 'Bird', 'Other']} data-testid="select-input" />);
    const selectInputEl = screen.getByTestId('select-input');

    expect(selectInputEl).toHaveValue('');
    expect(selectInputEl).toHaveDisplayValue('');

    fireEvent.change(selectInputEl, { target: { value: 'Cat' } });
    expect(selectInputEl).toHaveValue('Cat');
    expect(selectInputEl).toHaveDisplayValue('Cat');

    fireEvent.change(selectInputEl, { target: { value: 'Dog' } });
    expect(selectInputEl).not.toHaveValue('Cat');
    expect(selectInputEl).toHaveValue('Dog');
    expect(selectInputEl).toHaveDisplayValue('Dog');
  });

  test('should check if onChange function was trigged', () => {
    const handleChange = jest.fn();
    render(<SelectInput values={['Dog', 'Cat', 'Bird', 'Other']} data-testid="select-input" onChange={handleChange} />);
    const selectInputEl = screen.getByTestId('select-input');

    fireEvent.change(selectInputEl, { target: { value: 'Cat' } });
    expect(selectInputEl).toHaveValue('Cat');
    expect(selectInputEl).toHaveDisplayValue('Cat');

    expect(handleChange).toBeCalledTimes(1);

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'Cat',
        }),
      }),
    );
  });
});
