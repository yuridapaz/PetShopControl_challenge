const Navbar = () => {
  return (
    <div className='w-1/5 px-6 flex flex-col border-r border-cyan-950 bg-slate-100'>
      <div className='flex flex-col items-center w-full justify-between py-4 gap-2 border-b border-b-cyan-900'>
        <div className='w-16 flex items-center'>
          <img src='/src/assets/images/user-image.png' alt='' />
        </div>

        <h2 className='text-center'>Yuri da Paz Simonin</h2>
        <button className='bg-slate-500 py-1 px-8 rounded-md text-white text-xs'>Logout</button>
      </div>
      <div>
        <ul className='flex flex-col gap-2 pt-10 items-start '>
          <li className='w-full py-1 p-2 text-lg text-cyan-950 font-bold hover:cursor-pointer  hover:text-cyan-900 '>
            Dashboard
          </li>
          <li className='w-full py-1 p-2 text-lg text-cyan-950 font-bold hover:cursor-pointer  hover:text-cyan-900 '>
            Pet List
          </li>
          <li className='w-full py-1 p-2 text-lg text-cyan-950 font-bold hover:cursor-pointer  hover:text-cyan-900 '>
            Users
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
