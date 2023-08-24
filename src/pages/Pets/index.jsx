/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SelectInput, TextInput } from "../../components";
import { PetShopContext } from "../../context/PetShopContext";
import PetCard from "./PetCard";

const PetsPage = () => {
  const { data, getData } = useContext(PetShopContext);
  const [tipo, setTipo] = useState("Nenhum");
  const [raca, setRaca] = useState("Nenhum");
  const [nome, setNome] = useState("");

  useEffect(() => {
    getData();
  }, []);

  // Filter by 'tipo'
  const filterByTipo = (data, tipo) => {
    if (tipo === "Nenhum" || tipo === "") return data;
    return data.tipo === tipo;
  };
  // Filter by 'Raca'
  const filterByRaca = (data, raca) => {
    if (raca === "Nenhum" || raca === "") return data;
    return data.raca === raca;
  };

  const filterByNome = (data, nome) => {
    return data.nome.toLowerCase().includes(nome.toLowerCase());
  };

  const filteredData = data.filter((data) => {
    return filterByTipo(data, tipo) && filterByRaca(data, raca) && filterByNome(data, nome);
  });

  return (
    <div className="p-2 flex flex-col gap-3 w-full md:p-4 lg:p-6  md:gap-4 lg:gap-6">
      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
        <div>
          <TextInput
            placeholder={"Pesquisar"}
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
              id={"tipo"}
              values={["Nenhum", "Cachorro", "Gato", "Outro"]}
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="tipo" className="text-xs">
              Raça:
            </label>
            <SelectInput id={"tipo"} values={["1"]} onChange={(e) => setRaca(e.target.value)} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="ordenar" className="text-xs">
              Ordenar:
            </label>
            <SelectInput
              id={"ordenar"}
              values={["A-Z", "Z-A", "Tipo", "Porte"]}
              onChange={(e) => getData(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Display Cards Grid */}

      <ul className="w-full @container bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
        <div className="w-full my-3 py-2 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 items-center justify-between border-b border-t border-gray-300">
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
