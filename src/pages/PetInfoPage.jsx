import { AiOutlineLeft } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PetShopContext } from '../context/PetShopContext';
import { useContext } from 'react';

const PetInfoPage = () => {
  const { id } = useParams();
  const { findPet } = useContext(PetShopContext);
  const currentPet = findPet(id);
  const navigate = useNavigate();

  return (
    <div className='mt-2 p-1'>
      {/* Top nav */}

      <div className='mb-2 flex rounded-xl bg-gray-100 p-2'>
        <Link onClick={() => navigate(-1)}>
          <button className='rounded-xl border-2 border-gray-300/50 bg-zinc-100 p-3 text-sm transition-all ease-in hover:border-gray-500/50'>
            <AiOutlineLeft />
          </button>
        </Link>
        <p className='m-auto text-lg'>Informações</p>
      </div>
      {/* Info Card  */}
      <div className='mb-2 flex flex-col gap-4 rounded-xl bg-gray-100 p-2'>
        <div className='flex w-full gap-4 '>
          {/* Foto e Nome */}
          <div className='h-28 w-28'>
            <img
              src='/src/assets/images/Todd.jpeg'
              alt=''
              className='h-full w-full rounded-xl object-cover'
            />
          </div>
          <div className='flex flex-1 flex-col justify-center gap-2'>
            <h1 className='text-3xl'> {currentPet.nome} </h1>
            <p className='text-sm text-gray-500'> {currentPet.raca} </p>
          </div>
        </div>
        {/* Informações card */}
        <div className='flex gap-6'>
          <div className='w-full rounded-xl bg-green-300/50 px-3 py-2 text-lg  leading-6'>
            <span className='text-xs text-green-800/60'> Gênero </span>
            <p className='text-green-800'> {currentPet.genero} </p>
          </div>
          <div className='w-full rounded-xl bg-orange-300/50 px-3 py-2 text-lg  leading-6'>
            <span className='text-xs text-orange-800/60'> Idade </span>
            <p className='text-orange-800'>
              {`${currentPet.idade} ano${currentPet.idade > 1 ? 's' : ''}`}
            </p>
          </div>
          <div className='w-full rounded-xl bg-cyan-300/50 px-3 py-2 text-lg  leading-6'>
            <span className='text-xs text-cyan-800/60'> Peso </span>
            <p className='text-cyan-800'> {currentPet.peso} kg </p>
          </div>
        </div>
        {/* observações */}
        <div className='rounded-xl border-2 border-gray-300/50 p-2'>
          <span className='text-sm text-gray-500'> Observações: </span>
          <p className='text-md pr-4  leading-4 text-gray-700'> - Não gosta de tomar banho </p>
        </div>
      </div>

      {/* Services List Card  */}
      {/* <div className='flex flex-col gap-4 rounded-xl bg-gray-100 p-2'>
        <div>
          <p className=''> Serviços: </p>
        </div>
      </div> */}
    </div>
  );
};

export default PetInfoPage;
