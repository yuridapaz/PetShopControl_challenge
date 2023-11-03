import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ServiceForm from './ServiceForm';
import PetShopProvider from '../../context/PetShopContext';
import userEvent from '@testing-library/user-event';

describe('Service Form Test', () => {
  test('should render the form inputs', () => {
    render(
      <PetShopProvider>
        <ServiceForm />
      </PetShopProvider>,
    );
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

  test('should display an span with message for empty inputs', async () => {
    const mockSave = jest.fn();

    render(
      <PetShopProvider>
        <ServiceForm appendService={mockSave} />
      </PetShopProvider>,
    );

    const selectInput = screen.getByRole('combobox');
    const priceInput = screen.getByRole('spinbutton');
    const dateInput = screen.getByLabelText(/data:/i);

    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(mockSave).not.toBeCalled();

    expect(await screen.findByText('Escolher tipo')).toBeInTheDocument();
    expect(selectInput.classList).toContain('border-red-400');

    expect(await screen.findByText('Escolher valor')).toBeInTheDocument();
    expect(priceInput.classList).toContain('dark:border-red-500/50');

    expect(await screen.findByText('Escolher data')).toBeInTheDocument();
    expect(dateInput.classList).toContain('dark:border-red-500/50');
  });

  test('should call form', async () => {
    const appendServiceMock = jest.fn((data) => console.log(data));
    const addServiceMock = jest.fn();

    render(
      <PetShopProvider>
        <ServiceForm appendService={appendServiceMock} addService={addServiceMock} />
      </PetShopProvider>,
    );

    await userEvent.selectOptions(screen.getByRole('combobox'), 'Tosa');
    console.log(screen.getByRole('combobox').value);

    await userEvent.type(screen.getByRole('spinbutton'), '84');
    console.log(screen.getByRole('spinbutton').value);

    await userEvent.type(screen.getByLabelText(/data:/i), new Date().toISOString().slice(0, -8));
    console.log(screen.getByLabelText(/data:/i).value);

    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(appendServiceMock).toBeCalledTimes(1);
    expect(addServiceMock).toBeCalledTimes(1);
  });
});
