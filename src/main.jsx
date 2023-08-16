import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage/index';
import DisplayPage from './pages/DisplayPage/index';
import PetInfoPage from './pages/InfoPage/index';
import ServiceFormPage from './pages/ServiceFormPage';
import FormPage from './pages/FormPage/index';
import RegisterConfirmationPage from './pages/RegisterConfirmationPage';
import PaginaTeste from './pages/PaginaTeste';
import PetShopProvider from './context/PetShopContext.jsx';

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
        element: <DisplayPage />,
      },
      {
        path: 'pets/:id',
        element: <PetInfoPage />,
      },
      {
        path: 'pets/:id/servico',
        element: <ServiceFormPage />,
      },
      {
        path: 'cadastroPet',
        element: <FormPage />,
      },
      {
        path: 'cadastroConcluido',
        element: <RegisterConfirmationPage />,
      },
      {
        path: 'paginateste',
        element: <PaginaTeste />,
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
