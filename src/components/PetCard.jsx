const PetCard = () => {
  return (
    <div className='w-full max-w-md  shadow-md @container '>
      <div className='relative flex cursor-pointer items-center overflow-hidden rounded-sm ring-black/50 ring-offset-1 @container  hover:ring-1'>
        <img
          src='src/assets/images/Todd.jpeg'
          alt=''
          className=' absolute -left-6 h-20 w-20 rounded-full object-cover ring-1 ring-black/50 ring-offset-1 @[264px]:-left-2 @[264px]:h-16 @[264px]:w-16'
        />
        <div className='flex w-full flex-col items-start rounded-sm bg-slate-300 px-1 py-1 pl-16 '>
          <div className=''>
            <h1 className='text-sm'>Todd da Paz Simonin</h1>
          </div>
          <div className='flex  gap-4 font-bold @xs:w-full @xs:flex-row  @xs:gap-4'>
            <p className='text-xxs'>
              Tipo:
              <span className='font-normal'> Cachorro </span>
            </p>
            <p className='text-xxs '>
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
