import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import PetShopProvider from './context/PetShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PetShopProvider>
      <App />
    </PetShopProvider>
  </React.StrictMode>
);
