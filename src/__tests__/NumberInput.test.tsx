import '@testing-library/jest-dom';

import { NumberInput } from '../components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('number input component', () => {
  test('should render number input correctly', () => {
    render(<NumberInput data-testid="number-input" />);
    const numberInputEl = screen.getByTestId('number-input');
    expect(numberInputEl.classList).toContain('text-base');
  });

  test('should change input number value', () => {
    render(<NumberInput data-testid="number-input" />);
    const numberInputEl = screen.getByTestId('number-input');
    expect(numberInputEl).toHaveValue(null);
    fireEvent.change(numberInputEl, { target: { value: '12' } });
    expect(numberInputEl).toHaveValue(12);
  });
});
