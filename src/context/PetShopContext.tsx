import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from '@firebase/firestore';
import { createContext, useState } from 'react';
import React from 'react';

import { firestore } from '../firebase_setup/firebase';

type Props = {
  children: string | JSX.Element | JSX.Element[];
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

// export const PetShopContext = React.createContext<DataContextType>({
//   data: [],
//   setData: () => {},
//   getData: () => {},
//   getPet: () => {},
//   createPet: () => {},
//   updatePetInfo: () => {},
//   deletePet: () => {},
//   addService: () => {},
//   deleteService: () => {},
// });
export const PetShopContext = React.createContext<DataContextType | null>(null);

const PetShopProvider = ({ children }: Props) => {
  const [data, setData] = React.useState<DataType[]>([]);
  const ref = collection(firestore, 'pets_data');

  // Fetch / Sort data
  const getData = async (sortBy?: string) => {
    //lookup:
    let sortData: any;
    switch (sortBy) {
      case 'Z-A':
        sortData = await getDocs(query(ref, orderBy('name', 'desc')));
        break;
      case 'Tipo':
        sortData = await getDocs(query(ref, orderBy('type', 'asc'), orderBy('name', 'asc')));
        break;
      case 'Porte':
        sortData = await getDocs(query(ref, orderBy('type', 'asc'), orderBy('size', 'asc'), orderBy('name', 'asc')));
        break;

      default:
        sortData = await getDocs(query(ref, orderBy('name', 'asc')));
        break;
    }
    const finalData = sortData.docs.map((doc: { data: () => DataType; id: string }) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(finalData);
  };

  // Fetch pet
  const getPet = async (petID: string) => {
    const docRef = doc(firestore, 'pets_data', petID);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id };
  };

  // Add pet
  const createPet = async (data: DataType) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };

  // Update petData
  const updatePetInfo = async (data: DataType, petId: string) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      name: data.name,
      type: data.type,
      race: data.race,
      gender: data.gender,
      weight: data.weight,
      size: data.size,
      birthdate: data.birthdate,
      notes: data.notes,
    });
  };
  // Delete pet
  const deletePet = async (docID: string) => {
    await deleteDoc(doc(firestore, 'pets_data', docID))
      .then(() => {
        console.log('Entire Document has been deleted successfully.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add service
  const addService = async (serviceData: ServiceDataType, petId: string) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      services: arrayUnion(serviceData),
    });
  };

  // Delete service
  const deleteService = async (serviceData: ServiceDataType, petId: string) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      services: arrayRemove(serviceData),
    });
  };

  return (
    <PetShopContext.Provider
      value={{
        data,
        setData,
        getData,
        createPet,
        updatePetInfo,
        deletePet,
        getPet,
        addService,
        deleteService,
      }}
    >
      {children}
    </PetShopContext.Provider>
  );
};

export default PetShopProvider;
