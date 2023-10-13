import '@testing-library/jest-dom';

import { FormErrorMessage } from '../components';
import { render, screen } from '@testing-library/react';

describe('formErrorMessage component', () => {
  test('should render a component with default message', () => {
    render(<FormErrorMessage />);
    const errorMessage = screen.getByText('Preencher campo');
    expect(errorMessage).toBeInTheDocument();
  });

  test('should render a component with a custom message', () => {
    render(<FormErrorMessage errorMessage="Mensagem diferente" />);
    const errorMessage = screen.getByText('Mensagem diferente');
    expect(errorMessage).toBeInTheDocument();
  });

  test('should render a errorMessage with text medium', () => {
    render(<FormErrorMessage size={'md'} />);
    const errorMessageElement = screen.getByText(/preencher campo/i);
    expect(errorMessageElement.classList).toContain('text-sm');
  });
});
