export type ContextProps = {
  children: string | JSX.Element | JSX.Element[];
};

export type DataContextType = {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  getData: (sortBy?: string) => void;
  getPet: (petID: string) => void;
  createPet: (data: any) => void;
  updatePetInfo: (data: any, petId: string) => void;
  deletePet: (docID: string) => void;
  addService: (serviceData: ServiceDataType, petId: string) => void;
  deleteService: (serviceData: ServiceDataType, petId: string) => void;
};

export type DataType = {
  name: string;
  type: 'Cachorro' | 'Gato' | 'Pássaro' | 'Outro';
  race: string;
  gender: 'Macho' | 'Fêmea';
  weight: number;
  size: 'Micro' | 'Pequeno' | 'Médio' | 'Grande' | 'Gigante';
  birthdate: number;
  notes: string[];
  services: ServiceDataType[];
  id: string;
};

export type ServiceDataType = {
  type: string;
  cost: number;
  date: string;
  hour: string;
  serviceId: string;
  petId: string;
};
