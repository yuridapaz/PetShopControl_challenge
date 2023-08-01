import Navigation from './Layout/Navigation';
import { useEffect, useState } from 'react';
import { FormPage } from './pages/FormPage';

function App() {
  return (
    <div className='relative flex min-h-screen w-full flex-col bg-gray-100  dark:bg-gray-900  dark:text-zinc-50 md:flex md:flex-row'>
      <Navigation />
      <FormPage />
    </div>
  );
}

export default App;
