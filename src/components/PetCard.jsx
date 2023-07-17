const PetCard = () => {
  return (
    <div className=' @container'>
      <div className=' relative my-2 ml-8  flex cursor-pointer  items-center rounded-md bg-slate-50'>
        <div className='absolute -left-8 w-16 overflow-hidden rounded-md bg-slate-200 p-0'>
          <img src='src/assets/images/dogIcon.png' alt='' className='object-cover' />
        </div>
        <div className=' flex w-full flex-col items-center px-6 py-1 pl-14'>
          <div className=''>
            <h1 className='text-sm '>Todd da Paz Simonin</h1>
          </div>
          <div className='flex flex-col justify-center font-bold @xs:w-full @xs:flex-row @xs:justify-center @xs:gap-4'>
            <p className='text-xs'>
              Tipo:
              <span className='font-normal'> Cachorro </span>
            </p>
            <p className='text-xs '>
              Raça:
              <span className=' font-normal'> Schnauzer</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
