import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PetCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#ffffff2e" highlightColor="#81818120">
      <li className="my-0.5 grid w-full cursor-pointer grid-cols-2 items-center justify-between rounded-sm px-0.5 py-1.5 ring-gray-400 ring-offset-1  hover:bg-slate-300/20 hover:ring-1 @sm:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4 dark:ring-zinc-100 dark:ring-offset-gray-800 dark:hover:bg-gray-600">
        <div className="flex items-center gap-2 ">
          <div className="h-10 w-10 shrink-0">
            <Skeleton width={'100%'} height={'100%'} borderRadius={'50%'} />
          </div>
          <p className="w-full">
            <Skeleton width={'50%'} />
          </p>
        </div>

        <div className="text-end @xl:text-start">
          <p className="text-sm text-gray-500">
            <Skeleton width={'50%'} />
          </p>
        </div>

        <div className="hidden @xl:block">
          <p className="text-sm text-gray-500">
            <Skeleton width={'50%'} />
          </p>
        </div>

        <div className="hidden @3xl:block">
          <p className="text-sm text-gray-500">
            <Skeleton width={'50%'} />
          </p>
        </div>
      </li>
    </SkeletonTheme>
  );
};

export default PetCardSkeleton;
