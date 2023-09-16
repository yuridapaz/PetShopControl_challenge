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

interface IData {
  name: string;
  type: string;
  race: string;
  gender: string;
  weight: number;
  size: string;
  birthdate: number;
  notes: string[];
  services: any[];
}

interface IServiceData {
  type: string;
  cost: number;
  date: string;
  hour: string;
  serviceId: string;
  petId: string;
}

export type DataContextType = {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  getData: (sortBy: string) => void;
  getPet: (petID: string) => void;
  createPet: (data: any) => void;
  updatePetInfo: (data: any, petId: string) => void;
  deletePet: (docID: string) => void;
  addService: (serviceData: IServiceData, petId: string) => void;
  deleteService: (serviceData: IServiceData, petId: string) => void;
};

// const PetShopContext = createContext([]);
export const PetShopContext = React.createContext<DataContextType | []>([]);

const PetShopProvider = ({ children }: Props) => {
  const [data, setData] = React.useState<IData[]>([]);
  const ref = collection(firestore, 'pets_data');

  // Fetch / Sort data
  const getData = async (sortBy: string) => {
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
    const finalData = sortData.docs.map((doc) => ({
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
  const createPet = async (data: IData) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };

  // Update petData
  const updatePetInfo = async (data: IData, petId: string) => {
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
  const addService = async (serviceData: IServiceData, petId: string) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      services: arrayUnion(serviceData),
    });
  };

  // Delete service
  const deleteService = async (serviceData: IServiceData, petId: string) => {
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
