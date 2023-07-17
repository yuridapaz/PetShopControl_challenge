import { useState } from 'react';
import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      {/* Mobile Icon */}
      <div className=' flex items-center justify-between bg-slate-400 md:hidden '>
        <a href='' className='block p-4 font-bold text-white'>
          Pet Control
        </a>
        <button className='p-4 focus:bg-slate-700' onClick={toggleSideBar}>
          <Bars3Icon className='h-8 w-8  text-white' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`absolute inset-y-0 left-0 z-10 flex  w-8/12 md:w-64 ${
          openSideBar ? '' : '-translate-x-full'
        } transform flex-col border-r-2 border-slate-400 bg-slate-300 p-4 transition duration-200 ease-in-out md:relative md:translate-x-0`}
      >
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
    </>
  );
};

export default Sidebar;
