// import { render, screen } from '@testing-library/react';
// import { act } from '@testing-library/react-hooks';
// import React from 'react';
// import PetInfoPage from './index';
// import PetShopProvider, { PetShopContext } from '../../context/PetShopContext';
// import { MemoryRouter, Routes, Route } from 'react-router-dom';

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     petData: () =>
//       Promise.resolve({
//         weight: 20,
//         services: [
//           {
//             cost: 84,

//             serviceId: '1699030440000kBSEvsHWdINF4OYJs2Nu',

//             type: 'Tosa',

//             hour: '13:54:00',

//             petId: 'kBSEvsHWdINF4OYJs2Nu',

//             date: '03/11/2023',
//           },
//           {
//             cost: 20,

//             serviceId: '1699041720000kBSEvsHWdINF4OYJs2Nu',

//             hour: '17:02:00',

//             type: 'Vacina',

//             date: '03/11/2023',

//             petId: 'kBSEvsHWdINF4OYJs2Nu',
//           },
//         ],
//         type: 'Cachorro',
//         birthdate: 671587200000,
//         imageURL:
//           'https://firebasestorage.googleapis.com/v0/b/pet-shop-management-challenge.appspot.com/o/images%2FYURI%20PAZ%20SIMONIN1696355089548?alt=media&token=e25eafb6-2c28-4e72-9e31-7e126b6cc54d',
//         notes: [],
//         gender: 'Macho',
//         race: 'Sem-Raça-Definida-(SRD)',
//         size: 'Pequeno',
//         name: 'YURI PAZ SIMONIN',
//         id: 'kBSEvsHWdINF4OYJs2Nu',
//       }),
//   }),
// );

// describe('Pet Info Page', () => {
//   test('should render the components properly', async () => {
//     await act(async () => {
//       render(
//         <PetShopProvider>
//           <MemoryRouter initialEntries={['/kBSEvsHWdINF4OYJs2Nu']}>
//             <PetInfoPage />
//           </MemoryRouter>
//         </PetShopProvider>,
//       );
//     });

//     expect(fetch).toBeCalledTimes(1);
//     expect(screen.getByText('YURI')).toBeInTheDocument();
//   });
// });
