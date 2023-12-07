import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
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

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Pet Info Page', () => {
  const setStateMock = jest.fn();
  beforeEach(() => {
    const useStateMock = (useState) => [useState, setStateMock];
    React.useState.mockImplementation(useStateMock);
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [
        {
          gender: 'Macho',
          notes: [],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/pet-shop-management-challenge.appspot.com/o/images%2FYURI%20PAZ%20SIMONIN1696355089548?alt=media&token=e25eafb6-2c28-4e72-9e31-7e126b6cc54d',
          race: 'Sem-Raça-Definida-(SRD)',
          weight: 20,
          name: 'YURI PAZ SIMONIN',
          size: 'Pequeno',
          services: [
            {
              date: '03/11/2023',
              type: 'Tosa',
              hour: '13:54:00',
              serviceId: '1699030440000kBSEvsHWdINF4OYJs2Nu',
              cost: 84,
              petId: 'kBSEvsHWdINF4OYJs2Nu',
            },
            {
              date: '03/11/2023',
              type: 'Vacina',
              hour: '17:02:00',
              petId: 'kBSEvsHWdINF4OYJs2Nu',
              cost: 20,
              serviceId: '1699041720000kBSEvsHWdINF4OYJs2Nu',
            },
          ],
          birthdate: 671587200000,
          type: 'Cachorro',
          id: 'kBSEvsHWdINF4OYJs2Nu',
        },
        () => null,
      ])
      .mockImplementationOnce(() => [
        {
          date: '03/11/2023',
          type: 'Tosa',
          hour: '13:54:00',
          serviceId: '1699030440000kBSEvsHWdINF4OYJs2Nu',
          cost: 84,
          petId: 'kBSEvsHWdINF4OYJs2Nu',
        },
        () => null,
      ])
      .mockImplementationOnce(() => [false, () => null])
      .mockImplementationOnce(() => [false, () => null]);
  });

  test('should render the page properly', async () => {
    // const mockPet = {
    //   gender: 'Macho',
    //   notes: [],
    //   imageURL:
    //     'https://firebasestorage.googleapis.com/v0/b/pet-shop-management-challenge.appspot.com/o/images%2FYURI%20PAZ%20SIMONIN1696355089548?alt=media&token=e25eafb6-2c28-4e72-9e31-7e126b6cc54d',
    //   race: 'Sem-Raça-Definida-(SRD)',
    //   weight: 20,
    //   name: 'YURI PAZ SIMONIN',
    //   size: 'Pequeno',
    //   services: [
    //     {
    //       date: '03/11/2023',
    //       type: 'Tosa',
    //       hour: '13:54:00',
    //       serviceId: '1699030440000kBSEvsHWdINF4OYJs2Nu',
    //       cost: 84,
    //       petId: 'kBSEvsHWdINF4OYJs2Nu',
    //     },
    //     {
    //       date: '03/11/2023',
    //       type: 'Vacina',
    //       hour: '17:02:00',
    //       petId: 'kBSEvsHWdINF4OYJs2Nu',
    //       cost: 20,
    //       serviceId: '1699041720000kBSEvsHWdINF4OYJs2Nu',
    //     },
    //   ],
    //   birthdate: 671587200000,
    //   type: 'Cachorro',
    //   id: 'kBSEvsHWdINF4OYJs2Nu',
    // };

    const MockContext = {
      getPet: jest.fn(),
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

    debug();
  });
});
