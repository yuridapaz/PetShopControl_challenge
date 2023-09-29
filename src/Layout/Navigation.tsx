import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <div className="p-2">
        <div className="flex items-center justify-between rounded-xl bg-gray-100 shadow-md ring-2 ring-gray-400 ring-offset-2  ring-offset-slate-300 dark:bg-gray-700 md:hidden ">
          <a href="" className="block p-3 font-light  text-zinc-950 dark:text-zinc-50 ">
            Pet Control
          </a>
          <button className="rounded-xl p-0 hover:bg-gray-500 dark:hover:bg-slate-700" onClick={toggleSideBar}>
            <Bars3Icon className="h-14 w-14 p-3 hover:text-white  dark:text-gray-50" />
          </button>
        </div>
      </div>
      <div
        className={`${
          openSideBar ? '' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-10 flex h-screen w-9/12 shrink-0 transition duration-200 ease-in-out sm:w-1/2 md:relative md:w-72 md:translate-x-0 md:py-4 lg:w-80 lg:py-6 `}
      >
        <div
          className={` flex w-full flex-col rounded-e-2xl border-r-2  border-r-gray-400 bg-gray-100 p-6 shadow-lg dark:border-gray-600 dark:bg-gray-800 md:rounded-xl md:border-none`}
        >
          <div className="flex w-full flex-col items-center justify-between gap-2 border-b border-b-gray-400 py-4 dark:border-b-gray-600">
            <div className="flex h-12 w-12 items-center">
              <img src="/src/assets/images/user-image.png" alt="" />
            </div>
            <h2 className="mt-2 text-center">Yuri da Paz Simonin</h2>
          </div>
          <div>
            <ul className="flex flex-col items-start gap-4  pt-10 ">
              <Link to={'/'} onClick={toggleSideBar}>
                <li className="underlineHover text-xl font-bold text-zinc-950 hover:cursor-pointer hover:text-zinc-800  dark:text-zinc-50  dark:hover:text-zinc-300">
                  Dashboard / Home
                </li>
              </Link>
              <Link to={'/pets'} onClick={toggleSideBar}>
                <li className="underlineHover text-xl font-bold text-zinc-950 hover:cursor-pointer  hover:text-zinc-800  dark:text-zinc-50 dark:hover:text-zinc-300">
                  Pet List
                </li>
              </Link>
              <Link to={'/register-pet'} onClick={toggleSideBar}>
                <li className="underlineHover text-xl font-bold text-zinc-950 hover:cursor-pointer  hover:text-zinc-800  dark:text-zinc-50 dark:hover:text-zinc-300">
                  Cadastrar Pet
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-auto flex justify-center">
            <button className="flex items-center rounded-md bg-gray-400 px-6 py-2 text-xs  font-semibold text-white transition-all hover:bg-gray-500 dark:bg-gray-50 dark:text-zinc-900 dark:hover:bg-gray-200">
              <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5 text-zinc-200 dark:text-zinc-900" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
