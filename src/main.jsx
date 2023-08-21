import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import PetShopProvider from "./context/PetShopContext.jsx";
import "./index.css";
import {
  ErrorPage,
  PetInfoPage,
  PetsPage,
  RegisterConfirmationPage,
  RegisterPetPage,
} from "./pages";
import ServiceFormPage from "./pages/PetInfo/ServiceForm";
import TestePage from "./pages/TestePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/pets" />,
      },
      {
        path: "/pets",
        element: <PetsPage />,
      },
      {
        path: "pets/:id",
        element: <PetInfoPage />,
      },
      {
        path: "pets/:id/servico",
        element: <ServiceFormPage />,
      },
      {
        path: "register",
        element: <RegisterPetPage />,
      },
      {
        path: "cadastroConcluido",
        element: <RegisterConfirmationPage />,
      },
      {
        path: "teste",
        element: <TestePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <PetShopProvider>
    <RouterProvider router={router} />
  </PetShopProvider>
  // </React.StrictMode>
);
