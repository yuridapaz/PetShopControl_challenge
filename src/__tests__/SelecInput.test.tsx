import '@testing-library/jest-dom';

import { SelectInput } from '../components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('select input component', () => {
  test('should render select input values correctly', () => {
    const { debug } = render(<SelectInput values={['Dog', 'Cat', 'Bird', 'Other']} data-testid="select-input" />);
    const selectInputEl = screen.getByTestId('select-input');
    expect(selectInputEl).toHaveValue('');
    debug();
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
});
