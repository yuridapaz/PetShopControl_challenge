import { Outlet } from 'react-router-dom';
import Navigation from './Layout/Navigation';
import { FormPage } from './pages/FormPage';
import PetDisplay from './pages/PetDisplay';
import PetInfoPage from './pages/PetInfoPage';

function App() {
  return (
    <div className='relative flex min-h-screen w-full flex-col bg-slate-200  dark:bg-gray-900  dark:text-zinc-50 md:flex md:flex-row'>
      <Navigation />
      <Outlet />
      {/* <FormPage /> */}
      {/* <PetDisplay /> */}
      {/* <PetInfoPage /> */}
    </div>
  );
}

export default App;
