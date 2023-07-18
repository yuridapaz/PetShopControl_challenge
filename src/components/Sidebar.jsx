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
      <div className=' flex items-center justify-between bg-slate-300 shadow-md md:hidden'>
        <a href='' className=' block p-3 font-bold text-gray-950 '>
          Pet Control
        </a>
        <button className='p-3 hover:bg-gray-500' onClick={toggleSideBar}>
          <Bars3Icon className='h-8 w-8  text-gray-950  active:text-gray-50' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={` absolute inset-y-0 left-0 z-10 flex w-8/12 sm:w-60 ${
          openSideBar ? '' : '-translate-x-full'
        } transform flex-col border-r-2 border-gray-400 bg-gray-100 p-4 transition duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <div className='flex w-full flex-col items-center justify-between gap-2 border-b border-b-gray-400 py-4'>
          <div className='flex h-12 w-12 items-center'>
            <img src='/src/assets/images/user-image.png' alt='' />
          </div>
          <h2 className='mt-2 text-center'>Yuri da Paz Simonin</h2>
        </div>
        <div>
          <ul className='flex flex-col items-start gap-4  pt-10 '>
            <li className='underlineHover text-xl font-bold text-gray-950 hover:cursor-pointer  hover:text-gray-800 '>
              Dashboard
            </li>
            <li className='underlineHover text-xl font-bold text-gray-950 hover:cursor-pointer  hover:text-gray-800 '>
              Pet List
            </li>
            <li className='underlineHover text-xl font-bold text-gray-950 hover:cursor-pointer  hover:text-gray-800 '>
              Users
            </li>
          </ul>
        </div>
        <div className='mt-auto flex justify-center'>
          <button className='flex items-center rounded-md bg-gray-400 px-6 py-2  text-xs font-semibold text-white transition-all hover:bg-gray-500'>
            <ArrowRightOnRectangleIcon className='mr-2 h-5 w-5 text-gray-200' /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
