const PetCard = ({ petData }: any) => {
  return (
    <li className=" grid w-full cursor-pointer grid-cols-2 items-center justify-between rounded-sm p-1 ring-gray-400 ring-offset-1  hover:ring-1 @sm:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4 dark:ring-zinc-100/20 dark:ring-offset-gray-800">
      <div className="flex items-center gap-2 ">
        <div className="h-10 w-10 shrink-0">
          <img
            src="src/assets/images/Todd.jpeg"
            alt=""
            className="inline-block h-full w-full rounded-full object-cover"
          />
        </div>
        <p className="dark:text-gray-100 md:ml-2 md:text-lg"> {petData.name}</p>
      </div>

      <div className="text-end @xl:text-start">
        <p className="text-sm text-gray-500 dark:text-gray-300 md:text-base">{petData.type}</p>
      </div>

      <div className="hidden @xl:inline-flex">
        <p className="text-sm text-gray-500 dark:text-gray-300 md:text-base">{petData.race}</p>
      </div>

      <div className="hidden @3xl:inline-flex">
        <p className="text-sm text-gray-500 dark:text-gray-300 md:text-base">{petData.size}</p>
      </div>
    </li>
  );
};

export default PetCard;
