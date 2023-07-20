import { useState } from 'react';
import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Navigation = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      {/* Mobile Icon */}
      <div className=' flex items-center justify-between bg-gray-300 shadow-md dark:bg-gray-700  md:hidden'>
        <a href='' className=' block p-3 font-light text-zinc-950 dark:text-zinc-50'>
          Pet Control
        </a>
        <button className='p-3 hover:bg-gray-500 dark:hover:bg-slate-700' onClick={toggleSideBar}>
          <Bars3Icon className='h-8 w-8  text-zinc-950  active:text-zinc-50 dark:text-gray-50' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={` absolute inset-y-0 left-0 z-10 flex w-8/12 sm:w-60 ${
          openSideBar ? '' : '-translate-x-full'
        } transform flex-col border-r-2 border-gray-400 bg-gray-100 p-4 transition duration-200 ease-in-out dark:border-gray-600 dark:bg-gray-900 md:relative md:translate-x-0`}
      >
        <div className='flex w-full flex-col items-center justify-between gap-2 border-b border-b-gray-400 py-4 dark:border-b-gray-600'>
          <div className='flex h-12 w-12 items-center'>
            <img src='/src/assets/images/user-image.png' alt='' />
          </div>
          <h2 className='mt-2 text-center'>Yuri da Paz Simonin</h2>
        </div>
        <div>
          <ul className='flex flex-col items-start gap-4  pt-10 '>
            <li className='underlineHover text-xl font-bold text-zinc-950 hover:cursor-pointer hover:text-zinc-800  dark:text-zinc-50  dark:hover:text-zinc-300'>
              Dashboard
            </li>
            <li className='underlineHover text-xl font-bold text-zinc-950 hover:cursor-pointer  hover:text-zinc-800  dark:text-zinc-50 dark:hover:text-zinc-300'>
              Pet List
            </li>
            <li className='underlineHover text-xl font-bold text-zinc-950 hover:cursor-pointer  hover:text-zinc-800  dark:text-zinc-50 dark:hover:text-zinc-300'>
              Users
            </li>
          </ul>
        </div>
        <div className='mt-auto flex justify-center'>
          <button className='flex items-center rounded-md bg-gray-400 px-6 py-2 text-xs  font-semibold text-white transition-all hover:bg-gray-500 dark:bg-gray-50 dark:text-zinc-900 dark:hover:bg-gray-200'>
            <ArrowRightOnRectangleIcon className='mr-2 h-5 w-5 text-zinc-200 dark:text-zinc-900' />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
