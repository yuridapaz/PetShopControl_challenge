import { Outlet } from 'react-router-dom';

import Navigation from './Layout/Navigation';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-300 dark:bg-slate-900  dark:text-zinc-50 md:flex md:flex-row">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
