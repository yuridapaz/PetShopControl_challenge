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
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React from 'react';

import { firestore, storage } from '../firebase_setup/firebase';
import { ContextProps, DataContextType, DataType, ServiceDataType } from './type';

export const PetShopContext = React.createContext<DataContextType | null>(null);

const PetShopProvider = ({ children }: ContextProps) => {
  const [data, setData] = React.useState<DataType[]>([]);
  const firestoreRef = collection(firestore, 'pets_data');

  const getData = async (sortBy?: string) => {
    // REVIEW:
    let sortData: any;
    switch (sortBy) {
      case 'Z-A':
        sortData = await getDocs(query(firestoreRef, orderBy('name', 'desc')));
        break;
      case 'Tipo':
        sortData = await getDocs(query(firestoreRef, orderBy('type', 'asc'), orderBy('name', 'asc')));
        break;
      case 'Porte':
        sortData = await getDocs(
          query(firestoreRef, orderBy('type', 'asc'), orderBy('size', 'asc'), orderBy('name', 'asc')),
        );
        break;

      default:
        sortData = await getDocs(query(firestoreRef, orderBy('name', 'asc')));
        break;
    }
    const finalData = sortData.docs.map((doc: { data: () => DataType; id: string }) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(finalData);
  };

  //TODO: Try Catch !
  const getPet = async (petID: string) => {
    const docRef = doc(firestore, 'pets_data', petID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      throw Error;
    }
  };

  const createPet = async (data: DataType) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };

  const uploadPetImage = async (data: any, image: any) => {
    if (image == null) return '';

    const imageRef = ref(storage, `images/${data}` + new Date().getTime());

    return await uploadBytes(imageRef, image).then(async () => {
      return await getDownloadURL(imageRef);
    });
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

  const updatePetImage = () => {
    return;
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
        uploadPetImage,
      }}
    >
      {children}
    </PetShopContext.Provider>
  );
};

export default PetShopProvider;
