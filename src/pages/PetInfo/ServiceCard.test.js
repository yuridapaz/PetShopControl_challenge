import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';
import userEvent from '@testing-library/user-event';

const mockService = {
  hour: '19:09:00',
  cost: 80,
  serviceId: '1694902140000yKIYjSGVJv19hepjVVbC',
  date: '16/09/2023',
  petId: 'yKIYjSGVJv19hepjVVbC',
  type: 'Tosa',
};

describe('Service Card Component', () => {
  test('should render properly', async () => {
    const { debug } = render(<ServiceCard service={mockService} data-testid="serviceCard" />);

    const headerDate = screen.getByTestId('serviceCard.header-date');
    const serviceType = screen.getByTestId('serviceCard.container-serviceType');
    const servicePrice = screen.getByTestId('serviceCard.container-servicePrice');

    expect(headerDate).toHaveTextContent('16/09/2023');
    expect(serviceType).toHaveTextContent('Tosa');
    expect(servicePrice).toHaveTextContent(80);
  });

  test('should open the carousel after user click on header', async () => {
    const { debug } = render(<ServiceCard service={mockService} data-testid="serviceCard" />);

    const serviceCard = screen.getByTestId('serviceCard');
    const header = screen.getByTestId('serviceCard.header');

    expect(header).toHaveTextContent('Tosa');
    expect(serviceCard).not.toHaveClass('is-active');
    await userEvent.click(header);
    expect(serviceCard).toHaveClass('is-active');
    expect(header).not.toHaveTextContent('Tosa');
  });
});
