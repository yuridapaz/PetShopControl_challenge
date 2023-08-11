/* eslint-disable react-hooks/exhaustive-deps */
import { TextInput } from '../components/TextInput';
import { SelectInput } from '../components/SelectInput';
import PetCard from '../components/PetCard';
import { PetShopContext } from '../context/PetShopContext';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dogRaceList from '../utils/dogRaceList';

const PetDisplay = () => {
  const { data, getData, sortData } = useContext(PetShopContext);
  const [tipo, setTipo] = useState('Nenhum');
  const [raca, setRaca] = useState('Nenhum');

  useEffect(() => {
    // getData();
    sortData('');
  }, []);

  // Filter by 'tipo'
  const filterByTipo = (data, tipo) => {
    if (tipo === 'Nenhum' || tipo === '') return data;
    return data.tipo === tipo;
  };
  // Filter by 'Raca'
  const filterByRaca = (data, raca) => {
    if (raca === 'Nenhum' || raca === '') return data;
    return data.raca === raca;
  };

  const filteredData = data.filter((data) => {
    return filterByTipo(data, tipo) && filterByRaca(data, raca);
  });

  return (
    <div className='p-4'>
      {/* Search & Sort */}
      <div className='flex flex-col gap-3 border-b border-slate-300 pb-1'>
        <div className='flex w-full gap-3'>
          <TextInput placeholder={'Pesquisar'} fullWidth />
          <SelectInput id={'ordenar'} values={['A-Z', 'Z-A', 'Tipo', 'Porte']} />
        </div>
        {/* Select filter */}
        <div className='flex  gap-3'>
          <div className='flex w-1/3 flex-col '>
            <label htmlFor='tipo' className=' text-xs'>
              Tipo:
            </label>
            <SelectInput
              id={'tipo'}
              values={['Nenhum', 'Cachorro', 'Gato', 'Outro']}
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>
          {/*  */}
          <div className='flex w-1/3 flex-col'>
            <label htmlFor='tipo' className=' text-xs'>
              Raça:
            </label>
            <SelectInput
              id={'tipo'}
              values={['1']}
              onChange={(e) => setRaca(e.target.value)}
              // disabled={raceList.length != 0 || tipo === 'Nenhum'}
            />
          </div>
        </div>
      </div>
      {/* Display Cards Grid */}
      <div className='grid w-full max-w-screen-2xl grid-cols-1 justify-items-center gap-3 pt-3 @lg:grid-cols-2 @3xl:grid-cols-3 @3xl:p-0 @3xl:pt-6 @6xl:grid-cols-4 @7xl:grid-cols-5'>
        {filteredData.map((petData) => {
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
