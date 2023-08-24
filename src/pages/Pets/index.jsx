/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SelectInput, TextInput } from '../../components';
import { PetShopContext } from '../../context/PetShopContext';
import PetCard from './PetCard';

const PetsPage = () => {
  const { data, getData } = useContext(PetShopContext);
  const [tipo, setTipo] = useState('Nenhum');
  const [raca, setRaca] = useState('Nenhum');
  const [nome, setNome] = useState('');

  useEffect(() => {
    getData();
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

  const filterByNome = (data, nome) => {
    return data.nome.toLowerCase().includes(nome.toLowerCase());
  };

  const filteredData = data.filter((data) => {
    return (
      filterByTipo(data, tipo) && filterByRaca(data, raca) && filterByNome(data, nome)
    );
  });

  return (
    <div className="flex w-full flex-col gap-3 p-2 md:gap-4 md:p-4  lg:gap-6 lg:p-6">
      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
        <div>
          <TextInput
            placeholder={'Pesquisar'}
            fullWidth
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="flex w-full gap-3">
          <div className="flex w-full flex-col">
            <label htmlFor="tipo" className="text-xs">
              Tipo:
            </label>
            <SelectInput
              id={'tipo'}
              values={['Nenhum', 'Cachorro', 'Gato', 'Outro']}
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="tipo" className="text-xs">
              Raça:
            </label>
            <SelectInput
              id={'tipo'}
              values={['1']}
              onChange={(e) => setRaca(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="ordenar" className="text-xs">
              Ordenar:
            </label>
            <SelectInput
              id={'ordenar'}
              values={['A-Z', 'Z-A', 'Tipo', 'Porte']}
              onChange={(e) => getData(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Display Cards Grid */}

      <ul className="w-full rounded-xl bg-gray-100 p-4 @container dark:bg-gray-800">
        <div className="my-3 grid w-full grid-cols-2 items-center justify-between border-y border-gray-300 py-2 sm:grid-cols-3 md:grid-cols-4">
          <span> Nome </span>
          {/* <span> Tipo </span> */}
          <span> Raça </span>
          {/* <span> Tamanho </span> */}
          {/* <span> Idade </span> */}
        </div>
        {filteredData.map((petData) => {
          return (
            <Link key={petData.id} to={`/pets/${petData.id}`}>
              <PetCard petInfo={petData} key={petData.id} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default PetsPage;

// return (
//   <Link key={petData.id} to={`/pets/${petData.id}`} className="w-full max-w-md">
//     {/* Precisa modificar className do PetCard */}
//     <PetCard petInfo={petData} key={petData.id} />
//   </Link>
// );
