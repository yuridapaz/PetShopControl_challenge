import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import PetShopProvider from './context/PetShopContext.jsx';
import ErrorPage from './pages/ErrorPage';
import PetInfoPage from './pages/PetInfoPage.jsx';
import PetDisplay from './pages/PetDisplay.jsx';
import { FormPage } from './pages/FormPage.jsx';
import RegisterConfirmationPage from './pages/RegisterConfirmationPage.jsx';

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
        element: <PetDisplay />,
      },
      {
        path: 'pets/:id',
        element: <PetInfoPage />,
      },
      {
        path: 'cadastroPet',
        element: <FormPage />,
      },
      {
        path: 'cadastroConcluido',
        element: <RegisterConfirmationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PetShopProvider>
      <RouterProvider router={router} />
    </PetShopProvider>
  </React.StrictMode>
);
