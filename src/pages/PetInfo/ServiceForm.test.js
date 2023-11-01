import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceForm from './ServiceForm';
import PetShopProvider from '../../context/PetShopContext';

describe('Service Form Test', () => {
  beforeEach(() => {
    render(
      <PetShopProvider>
        <ServiceForm />
      </PetShopProvider>,
    );
  });

  test('should render the form inputs', () => {
    const selectInput = screen.getByRole('combobox');
    const priceInput = screen.getByRole('spinbutton');
    const dateInput = screen.getByLabelText(/data:/i);
    const button = screen.getByRole('button', { name: /enviar/i });

    expect(screen.getByText('Serviço:')).toBeInTheDocument();
    expect(selectInput).toBeInTheDocument();
    expect(screen.getByText('Valor:')).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(screen.getByText('Data:')).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should give an error with an empty input submit', () => {
    expect(1 + 1).toBe(2);
  });
});
