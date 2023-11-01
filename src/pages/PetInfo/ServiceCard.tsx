import React from 'react';

import { Button } from '../../components';
import { ServiceCardProps } from './types';

const ServiceCard = ({ service, setModal, setService, 'data-testid': dataTestId }: ServiceCardProps) => {
  const [active, setActive] = React.useState<boolean>(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const handleDeleteServiceAlert = () => {
    setService(service);
    setModal(true);
  };

  return (
    <div
      className={`group w-full rounded-lg  bg-slate-100 transition-all hover:outline hover:outline-offset-0 hover:outline-slate-400  dark:bg-gray-800 ${
        active ? 'is-active' : ''
      } `}
      data-testid={dataTestId}
    >
      <div
        className="flex items-center px-3 py-2 hover:cursor-pointer"
        onClick={toggleAccordion}
        data-testid={`${dataTestId}.header`}
      >
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300" data-testid={`${dataTestId}.header-date`}>
          {service?.date}
        </p>
        <p className="ml-4 text-sm font-bold" data-testid={`${dataTestId}.header-serviceType`}>
          {active ? '' : service?.type}
        </p>
        <p
          className="ml-auto transition-all group-[.is-active]:rotate-180"
          data-testid={`${dataTestId}.header-displayIcon`}
        >
          {active ? '--' : '+'}
        </p>
      </div>
      <div
        className="flex h-0 justify-between overflow-hidden rounded-b-lg bg-slate-300 px-7 py-0 group-[.is-active]:h-full "
        data-testid={`${dataTestId}.container`}
      >
        <div>
          <div className="my-2 flex flex-col">
            <span className="text-xs font-bold"> Serviço: </span>
            <p data-testid={`${dataTestId}.container-serviceType`}>{service?.type}</p>
          </div>
          <div className="my-2 flex flex-col">
            <span className="text-xs font-bold"> Valor: </span>
            <p data-testid={`${dataTestId}.container-servicePrice`}>R$ {service?.cost.toFixed(2)}</p>
          </div>
        </div>
        <div>
          <div className="my-2 flex flex-col">
            <span className="text-end text-xs font-bold"> Data: </span>
            <p className="text-end" data-testid={`${dataTestId}.container-serviceDate`}>
              {service?.date}
            </p>
          </div>
          <div className="my-2 mt-3 flex flex-col ">
            <Button
              variant={'delete'}
              className={'mt-auto w-28'}
              onClick={handleDeleteServiceAlert}
              data-testid={`${dataTestId}.container-deleteButton`}
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
