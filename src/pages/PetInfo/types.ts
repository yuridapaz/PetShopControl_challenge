import { Dispatch, SetStateAction } from 'react';

import { ServiceDataType } from '../../context/type';

// Index
export type PetInfoParams = {
  id: string | undefined;
};

// ServiceCard
export type ServiceCardProps = {
  service: ServiceDataType;
  setService: Dispatch<SetStateAction<ServiceDataType | undefined>>;
  setModal: Dispatch<SetStateAction<boolean>>;
  'data-testid'?: string;
};

// ServiceForm
export type ServiceFormProps = {
  petId: string | undefined;
  setModal: Dispatch<SetStateAction<boolean>>;
  appendService: (service: ServiceDataType) => void;
  addService: (service: ServiceDataType, petId: string) => void;
};

export type ServiceFormInputs = {
  type: string;
  cost: number;
  date: Date;
};
