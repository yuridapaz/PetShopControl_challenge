export type ContextProps = {
  children: string | JSX.Element | JSX.Element[];
};

export type DataContextType = {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  getData: (sortBy?: string) => Promise<void>;
  getPet: (petID: string) => Promise<DataType>;
  createPet: (data: DataType) => Promise<void>;
  uploadPetImage: (data: string, image: any) => Promise<void>;
  updatePetInfo: (data: DataType, petId: string) => Promise<void>;
  deletePet: (docID: string) => Promise<void>;
  addService: (serviceData: ServiceDataType, petId: string) => Promise<void>;
  deleteService: (serviceData: ServiceDataType, petId: string) => Promise<void>;
};

export type uploadPetImageType = DataContextType['uploadPetImage'];

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
  image?: any;
  imageURL: string;
};

export type ServiceDataType = {
  type: string;
  cost: number;
  date: string;
  hour: string;
  serviceId: string;
  petId: string;
};
