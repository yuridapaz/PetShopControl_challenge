const Navbar = () => {
  return (
    <div className='flex w-1/5 flex-col border border-r-slate-400 bg-slate-300 px-6'>
      <div className='flex w-full flex-col items-center justify-between gap-2 border-b border-b-slate-400 py-4'>
        <div className='flex w-16 items-center'>
          <img src='/src/assets/images/user-image.png' alt='' />
        </div>

        <h2 className='text-center'>Yuri da Paz Simonin</h2>
        <button className='rounded-lg bg-slate-500 px-8 py-2 text-xs font-semibold text-white transition-all hover:bg-slate-400'>
          Logout
        </button>
      </div>
      <div>
        <ul className='flex flex-col items-start gap-4  pt-10 '>
          <li className='underlineHover text-2xl font-bold text-slate-800 hover:cursor-pointer  hover:text-slate-600 '>
            Dashboard
          </li>
          <li className='underlineHover text-2xl font-bold text-slate-800 hover:cursor-pointer  hover:text-slate-600 '>
            Pet List
          </li>
          <li className='underlineHover text-2xl font-bold text-slate-800 hover:cursor-pointer  hover:text-slate-600 '>
            Users
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
