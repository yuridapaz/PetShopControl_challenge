const PetCard = ({ petInfo }) => {
  return (
    <li className="my-1 grid w-full cursor-pointer grid-cols-2 items-center justify-between rounded-lg p-1 ring-black/50 ring-offset-1 hover:ring-1 dark:ring-zinc-100 dark:ring-offset-gray-800 sm:grid-cols-3 md:grid-cols-4">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 shrink-0">
          <img
            src="src/assets/images/Todd.jpeg"
            alt=""
            className="inline-block h-full w-full rounded-full object-cover"
          />
        </div>
        <p className=""> {petInfo.nome}</p>
      </div>

      <div className="">
        <p className="text-gray-500">
          {petInfo.raca} Tipo: {petInfo.tipo}{' '}
        </p>
      </div>

      {/* <div className="relative flex cursor-pointer items-center overflow-hidden rounded-sm ring-black/50 ring-offset-1 @container  hover:ring-1  dark:ring-zinc-100 dark:ring-offset-gray-800">
        <img
          src="src/assets/images/Todd.jpeg"
          alt=""
          className=" absolute -left-6 h-20 w-20 rounded-full object-cover ring-1 ring-black/50 ring-offset-2 @[264px]:-left-2 @[264px]:h-16 @[264px]:w-16 dark:ring-white dark:ring-offset-gray-800 "
        />

        <div className="flex w-full flex-col items-start rounded-lg bg-gray-100 px-1 py-1 pl-16 dark:bg-gray-800  ">
          <div className="">

            <h1 className="text-sm"> {petInfo.nome} </h1>
          </div>
          <div className="flex  gap-4 font-bold @xs:w-full @xs:flex-row  @xs:gap-4">
            <p className="text-xxs">
              Tipo:

              <span className="font-normal"> {petInfo.tipo} </span>
            </p>
            <p className="text-xxs ">
              Raça:

              <span className=" font-normal"> {petInfo.raca} </span>
            </p>
          </div>
        </div>
      </div> */}
    </li>
  );
};

export default PetCard;
