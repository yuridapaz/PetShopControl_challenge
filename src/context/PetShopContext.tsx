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
import React from 'react';

import { firestore } from '../firebase_setup/firebase';
import { ContextProps, DataContextType, DataType, ServiceDataType } from './type';

export const PetShopContext = React.createContext<DataContextType | null>(null);

const PetShopProvider = ({ children }: ContextProps) => {
  const [data, setData] = React.useState<DataType[]>([]);
  const ref = collection(firestore, 'pets_data');

  const getData = async (sortBy?: string) => {
    // REVIEW:
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

  // REVIEW:
  const getPet = async (petID: string) => {
    const docRef = doc(firestore, 'pets_data', petID);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id };
  };

  const createPet = async (data: DataType) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };

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

  const deletePet = async (docID: string) => {
    await deleteDoc(doc(firestore, 'pets_data', docID))
      .then(() => {
        console.log('Entire Document has been deleted successfully.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addService = async (serviceData: ServiceDataType, petId: string) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      services: arrayUnion(serviceData),
    });
  };

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
