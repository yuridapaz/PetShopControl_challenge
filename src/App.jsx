import Sidebar from './components/Sidebar';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function App() {
  return (
    <div className='flex h-screen bg-slate-200'>
      {/* Mobile Icon */}
      {/* Sidebar */}
      {/* <Sidebar /> */}
      <div className='absolute inset-y-0 left-0 flex h-full w-64 -translate-x-full transform flex-col border-r-2 border-slate-400 bg-slate-300 p-4 transition duration-200 ease-in-out'>
        <div className='flex w-full flex-col items-center justify-between gap-2 border-b border-b-slate-400 py-4'>
          <div className='flex h-12 w-12 items-center'>
            <img src='/src/assets/images/user-image.png' alt='' />
          </div>
          <h2 className='mt-2 text-center'>Yuri da Paz Simonin</h2>
        </div>
        <div>
          <ul className='flex flex-col items-start gap-4  pt-10 '>
            <li className='underlineHover text-2xl font-bold text-slate-800 hover:cursor-pointer  hover:text-slate-700 '>
              Dashboard
            </li>
            <li className='underlineHover text-2xl font-bold text-slate-800 hover:cursor-pointer  hover:text-slate-700 '>
              Pet List
            </li>
            <li className='underlineHover text-2xl font-bold text-slate-800 hover:cursor-pointer  hover:text-slate-700 '>
              Users
            </li>
          </ul>
        </div>
        <div className='mt-auto flex justify-center'>
          <button className='flex items-center rounded-lg bg-slate-600 px-4 py-1  text-xs font-semibold text-white transition-all hover:bg-slate-500'>
            <ArrowRightOnRectangleIcon className='mr-2 h-5 w-5 text-slate-200' /> Logout
          </button>
        </div>
      </div>

      {/* Content Pages */}
      <div className='flex-1 bg-slate-300 p-4'>oi</div>
    </div>
  );
}

export default App;
