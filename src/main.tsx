import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import PetShopProvider from './context/PetShopContext.jsx';
import './index.css';
import EditPetInfo from './pages/EditPetInfo/index.jsx';
import RegisterPetOwnerPage from './pages/RegisterPetOwner/index.jsx';
import { ErrorPage, PetInfoPage, PetsPage, RegisterConfirmationPage, RegisterPetPage } from './pages/index.jsx';
import PetInfoErrorPage from './pages/ErrorPage/PetInfoErrorPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/pets" />,
      },
      {
        path: '/pets',
        element: <PetsPage />,
      },
      {
        path: 'pets/:id',
        element: <PetInfoPage />,
      },
      {
        path: '/pets/petNotFound',
        element: <PetInfoErrorPage />,
      },
      {
        path: 'pets/:id/edit',
        element: <EditPetInfo />,
      },
      {
        path: 'register-pet',
        element: <RegisterPetPage />,
      },
      {
        path: 'register-owner',
        element: <RegisterPetOwnerPage />,
      },
      {
        path: 'cadastroConcluido',
        element: <RegisterConfirmationPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as Element).render(

  // <React.StrictMode>
  <PetShopProvider>
    <RouterProvider router={router} />
  </PetShopProvider>,
  // </React.StrictMode>
);
