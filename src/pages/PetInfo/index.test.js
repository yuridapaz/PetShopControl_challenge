import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { PetShopContext } from '../../context/PetShopContext';
import { MemoryRouter } from 'react-router-dom';
import PetInfoPage from './index';
import { useState } from 'react';
import ModalComponent from '../../components/Modal';
import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';
import Skeleton from 'react-loading-skeleton';

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...originalModule,
    //
    useNavigate: () => jest.fn(),
    useParams: jest.fn().mockReturnValue({ id: 'kBSEvsHWdINF4OYJs2Nu' }),
  };
});

const mockPet = {
  imageURL:
    'https://firebasestorage.googleapis.com/v0/b/pet-shop-management-challenge.appspot.com/o/images%2FYURI%20PAZ%20SIMONIN1696355089548?alt=media&token=e25eafb6-2c28-4e72-9e31-7e126b6cc54d',
  type: 'Cachorro',
  notes: [],
  gender: 'Macho',
  services: [
    {
      hour: '13:54:00',
      cost: 84,
      serviceId: '1699030440000kBSEvsHWdINF4OYJs2Nu',
      type: 'Tosa',
      date: '03/11/2023',
      petId: 'kBSEvsHWdINF4OYJs2Nu',
    },
    {
      date: '03/11/2023',
      hour: '17:02:00',
      type: 'Vacina',
      serviceId: '1699041720000kBSEvsHWdINF4OYJs2Nu',
      petId: 'kBSEvsHWdINF4OYJs2Nu',
      cost: 20,
    },
  ],
  race: 'Sem-Raça-Definida-(SRD)',
  name: 'YURI PAZ SIMONIN',
  birthdate: 671587200000,
  weight: 20,
  size: 'Pequeno',
  id: 'kBSEvsHWdINF4OYJs2Nu',
};

describe('Pet Info Page', () => {
  test('should render the page properly', async () => {
    const MockContext = {
      getPet: jest.fn().mockResolvedValueOnce(() => mockPet),
      deleteService: jest.fn(),
      addService: jest.fn(),
    };

    const { debug } = render(
      <MemoryRouter>
        <PetShopContext.Provider value={MockContext}>
          <PetInfoPage />
        </PetShopContext.Provider>
      </MemoryRouter>,
    );

    const petName = await screen.findByText(mockPet.name);
    expect(petName).toBeInTheDocument();

    debug();
  });
});
