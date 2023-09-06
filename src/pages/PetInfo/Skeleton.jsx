import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonPetInfoPage = () => {
  return (
    <>
      {/* Info Card  */}
      <SkeletonTheme baseColor="#ffffff2e" highlightColor="#81818120">
        <div className="mb-3 flex flex-col gap-4 rounded-xl bg-gray-100 p-2  pb-4 dark:bg-gray-800">
          <div className="flex w-full gap-4 ">
            {/* Foto e Nome */}
            <div className="h-28 w-28">
              {/* <img
                src="/src/assets/images/Todd.jpeg"
                alt=""
                className="h-full w-full rounded-xl object-cover"
              /> */}
              <Skeleton height={'100%'} borderRadius={16} />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2">
              <h1 className="text-2xl">
                <Skeleton width={'50%'} />
              </h1>
              <p className=" text-sm text-gray-500">
                <Skeleton width={'30%'} />
              </p>
            </div>
          </div>

          {/* Informações card */}
          <div className="flex gap-4">
            <div className="w-1/3 rounded-xl bg-green-300/50 px-3 py-2 text-lg leading-6 dark:bg-green-300/90 ">
              <span className="text-xs text-green-800/60 dark:text-green-800/90">
                Gênero
              </span>
              <p className="text-green-800">
                <Skeleton />
              </p>
            </div>
            <div className=" w-1/3  rounded-xl bg-orange-300/50 px-3 py-2 text-lg leading-6 dark:bg-orange-300/90">
              <span className="text-xs text-orange-800/60 dark:text-orange-800/90">
                Idade
              </span>
              <p className="whitespace-nowrap text-orange-800 dark:text-orange-900">
                <Skeleton />
              </p>
            </div>
            <div className="w-1/3 rounded-xl bg-cyan-300/50 px-3 py-2 text-lg  leading-6 dark:bg-cyan-300/90">
              <span className="text-xs text-cyan-800/60 dark:text-cyan-800/90">Peso</span>
              <p className="text-cyan-800 dark:text-cyan-900">
                <Skeleton />
              </p>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default SkeletonPetInfoPage;
