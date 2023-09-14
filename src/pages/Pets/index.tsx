/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SelectInput, TextInput } from '../../components';
import { PetShopContext } from '../../context/PetShopContext';
import { getPetRaceList, getPetTypeList } from '../../utils/constants';
import PetCard from './PetCard';

const PetsPage = () => {
  const { data, getData } = useContext(PetShopContext);
  const [typeInput, setTypeInput] = useState('');
  const [raceInput, setRaceInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const petTypeList = getPetTypeList();
  const petRaceList = getPetRaceList(typeInput);

  useEffect(() => {
    getData();
  }, []);

  //lookup: 'any'
  const filterBySelectInput = (data: any, filterInput: string, dataKey: string) => {
    if (filterInput === 'Nenhum' || filterInput === '') return data;
    return data[`${dataKey}`] === filterInput;
  };
  //lookup: 'any'
  const filteredData = data.filter((data: any) => {
    return (
      filterBySelectInput(data, typeInput, 'type') &&
      filterBySelectInput(data, raceInput, 'race') &&
      data.name.toLowerCase().includes(nameInput.toLowerCase())
    );
  });

  return (
    <div className="flex max-h-[calc(100vh-5rem)] w-full flex-col gap-3 p-2 @container md:max-h-screen md:gap-4 md:p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
        <div>
          <TextInput placeholder={'Pesquisar'} fullWidth onChange={(e: any) => setNameInput(e.target.value)} />
        </div>
        <div className="flex w-full gap-3">
          <div className="flex w-full flex-col gap-1 md:gap-2">
            <label htmlFor="type" className="text-sm md:text-base">
              Tipo:
            </label>
            <SelectInput
              id={'type'}
              values={['Nenhum', ...petTypeList, 'Outro']}
              onChange={(e: any) => {
                if (e.target.value === 'Nenhum') setRaceInput('Nenhum');
                setTypeInput(e.target.value);
              }}
              fullWidth
            />
          </div>
          <div className="flex w-full flex-col gap-1 md:gap-2">
            <label htmlFor="type" className="text-sm md:text-base">
              Raça:
            </label>
            <SelectInput
              id={'race'}
              values={['Nenhum', ...petRaceList]}
              onChange={(e: any) => setRaceInput(e.target.value)}
              fullWidth
              disabled={['Outro', 'Nenhum', ''].includes(typeInput)}
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <label htmlFor="ordenar" className="text-sm md:text-base">
              Ordenar:
            </label>
            <SelectInput
              id={'ordenar'}
              values={['A-Z', 'Z-A', 'Tipo', 'Porte']}
              onChange={(e: any) => getData(e.target.value)}
            />
          </div>
        </div>
      </div>
      <ul className="w-full overflow-auto rounded-xl bg-gray-100 p-4 @container dark:bg-gray-800 md:max-h-screen md:overflow-auto">
        <div className="my-3 grid w-full grid-cols-2 items-center justify-between border-y border-gray-300 py-2 @sm:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4">
          <span className=""> Nome </span>
          <span className="text-end @xl:text-start"> Tipo </span>
          <span className="hidden @xl:inline-flex"> Raça </span>
          <span className="hidden @3xl:inline-flex"> Tamanho </span>
        </div>
        {/* //lookup: */}
        {filteredData.map((petData: any) => {
          return (
            <Link key={petData.id} to={`/pets/${petData.id}`}>
              <PetCard petData={petData} />
            </Link>
          );
        })}
        {filteredData.length < 1 && <p className="p-4 text-center">Nenhum resultado encontrado.</p>}
      </ul>
    </div>
  );
};

export default PetsPage;
