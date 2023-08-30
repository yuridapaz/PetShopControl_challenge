/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';

import { Button } from '../../components';

const ServiceCard = ({ servico, setModal, setService }) => {
  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const handleDeleteServiceAlert = () => {
    setService(servico);
    setModal(true);
  };

  return (
    <div
      className={`group w-full rounded-lg  bg-slate-100 transition-all hover:outline hover:outline-offset-0 hover:outline-slate-400  dark:bg-gray-800 ${
        active ? 'is-active' : ''
      } `}
    >
      <div
        className="flex items-center px-3 py-2 hover:cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          {servico.data}
        </p>
        <p className="ml-4 text-sm group-[.is-active]:font-bold">
          {active ? '' : servico.tipo}
        </p>
        <p className="ml-auto transition-all group-[.is-active]:rotate-180">
          {active ? '--' : '+'}
        </p>
      </div>
      <div className="flex h-0 justify-between overflow-hidden rounded-b-lg bg-slate-300  px-7 py-0 group-[.is-active]:h-full">
        <div>
          <div className="my-2 flex flex-col">
            <span className="text-xs font-bold"> Serviço: </span>
            <p className=""> {servico.tipo} </p>
          </div>
          <div className="my-2 flex flex-col">
            <span className="text-xs font-bold"> Valor: </span>
            <p className=""> R$ {servico.valor.toFixed(2)} </p>
          </div>
        </div>
        <div className="">
          <div className="my-2 flex flex-col">
            <span className="text-end text-xs font-bold"> Data: </span>
            <p className="text-end"> {servico.data} </p>
          </div>
          <div className="my-2 mt-3 flex flex-col ">
            <Button
              variant={'delete'}
              className={'mt-auto w-28'}
              onClick={handleDeleteServiceAlert}
            >
              Deletar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
