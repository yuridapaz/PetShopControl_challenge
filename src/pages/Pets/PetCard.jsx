const PetCard = ({ petInfo }) => {
  return (
    <li className="my-0.5 grid w-full cursor-pointer grid-cols-2 items-center justify-between rounded-sm px-0.5 py-1.5 ring-gray-400 ring-offset-1  hover:bg-slate-300/20 hover:ring-1 @sm:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4 dark:ring-zinc-100 dark:ring-offset-gray-800 dark:hover:bg-gray-600">
      <div className="flex items-center gap-2 ">
        <div className="h-10 w-10 shrink-0">
          <img
            src="src/assets/images/Todd.jpeg"
            alt=""
            className="inline-block h-full w-full rounded-full object-cover"
          />
        </div>
        <p className=""> {petInfo.nome}</p>
      </div>

      <div className="text-end @xl:text-start">
        <p className="text-sm text-gray-500">{petInfo.raca}</p>
      </div>

      <div className="hidden @xl:inline-flex">
        <p className="text-sm text-gray-500">{petInfo.raca}</p>
      </div>

      <div className="hidden @3xl:inline-flex">
        <p className="text-sm text-gray-500">{petInfo.raca}</p>
      </div>
    </li>
  );
};

export default PetCard;
