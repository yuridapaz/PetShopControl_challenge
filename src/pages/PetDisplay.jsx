import { TextInput } from '../components/TextInput';
import { SelectInput } from '../components/SelectInput';
import PetCard from '../components/PetCard';
import { PetShopContext } from '../context/PetShopContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const PetDisplay = () => {
  const { petsData } = useContext(PetShopContext);

  return (
    <div className='p-4'>
      {/* Search & Sort */}
      <div className='flex flex-col gap-3 border-b border-slate-300 pb-1'>
        <div className='flex w-full gap-3'>
          <TextInput placeholder={'Pesquisar'} fullWidth />
          <SelectInput id={'ordenar'} values={['A-Z', 'Z-A', 'Tipo', 'Porte']} />
        </div>
        <div className='flex w-full gap-3'>
          {/* <div className='flex w-full flex-col gap-1'>
            <label htmlFor='tipo' className=' text-sm'>
              Tipo:
            </label>
            <SelectInput id={'tipo'} values={['Nenhum', 'Cachorro', 'Gato', 'Outro']} />
          </div> */}
          {/* <div className='flex w-full flex-col'>
          <label htmlFor='tipo' className=' text-xs'>
            Raça:
          </label>
          <SelectInput id={'tipo'} values={['Nenhum', 'Cachorro', 'Gato', 'Outro']} />
        </div>
        <div className='flex w-full flex-col'>
          <label htmlFor='tipo' className=' text-xs'>
            Cor:
          </label>
          <SelectInput id={'tipo'} values={['Nenhum', 'Cachorro', 'Gato', 'Outro']} />
        </div> */}
        </div>
      </div>
      {/* Display Cards Grid */}
      <div className='grid w-full max-w-screen-2xl grid-cols-1 justify-items-center gap-3 pt-3 @lg:grid-cols-2 @3xl:grid-cols-3 @3xl:p-0 @3xl:pt-6 @6xl:grid-cols-4 @7xl:grid-cols-5'>
        {petsData?.map((petData) => {
          return (
            <Link key={petData.id} to={`/pets/${petData.id}`} className='w-full max-w-md'>
              {/* Precisa modificar className do PetCard */}
              <PetCard petInfo={petData} key={petData.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PetDisplay;
