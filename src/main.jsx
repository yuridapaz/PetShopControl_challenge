import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import PetShopProvider from './context/PetShopContext.jsx';
import {
  ErrorPage,
  PetInfoPage,
  PetsPage,
  RegisterConfirmationPage,
  RegisterPetPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to='/pets' />,
      },
      {
        path: '/pets',
        element: <PetsPage />,
      },
      {
        path: 'pets/:id',
        element: <PetInfoPage />,
      },
      // {
      //   path: 'pets/:id/servico',
      //   element: <ServiceFormPage />,
      // },
      {
        path: 'register',
        element: <RegisterPetPage />,
      },
      {
        path: 'cadastroConcluido',
        element: <RegisterConfirmationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PetShopProvider>
    <RouterProvider router={router} />
  </PetShopProvider>
  // </React.StrictMode>
);
