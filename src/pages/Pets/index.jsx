/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SelectInput, TextInput } from '../../components';
import { PetShopContext } from '../../context/PetShopContext';
import { petTypeFilterKeys, pets } from '../../utils/constants';
import PetCard from './PetCard';

const PetsPage = () => {
  const { data, getData } = useContext(PetShopContext);
  const [typeInput, setTypeInput] = useState('Nenhum');
  const [raceInput, setRaceInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  const petRaceFilterKeys = pets[typeInput]?.racas || [''];

  useEffect(() => {
    getData();
  }, []);

  const filterBySelectInput = (data, filterInput, dataKey) => {
    if (filterInput === 'Nenhum' || filterInput === '') return data;
    return data[`${dataKey}`] === filterInput;
  };

  const filteredData = data.filter((data) => {
    return (
      filterBySelectInput(data, typeInput, 'tipo') &&
      filterBySelectInput(data, raceInput, 'raca') &&
      data.nome.toLowerCase().includes(nameInput.toLowerCase())
    );
  });

  return (
    <div className="flex w-full flex-col gap-3 p-2 md:gap-4 md:p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
        <div>
          <TextInput
            placeholder={'Pesquisar'}
            fullWidth
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="flex w-full gap-3">
          <div className="flex w-full flex-col">
            <label htmlFor="tipo" className="text-xs">
              Tipo:
            </label>
            <SelectInput
              id={'tipo'}
              values={petTypeFilterKeys}
              onChange={(e) => setTypeInput(e.target.value)}
              fullWidth
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="tipo" className="text-xs">
              Raça:
            </label>
            <SelectInput
              id={'tipo'}
              values={petRaceFilterKeys}
              onChange={(e) => setRaceInput(e.target.value)}
              fullWidth
              disabled={typeInput === 'Outro' || typeInput === 'Nenhum'}
            />
          </div>
          <div className="flex flex-col">
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
