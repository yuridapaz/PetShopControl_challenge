import { useState, useEffect, createContext } from 'react';
import { firestore } from '../firebase_setup/firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  doc,
} from '@firebase/firestore';

export const PetShopContext = createContext([]);

const PetShopProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    const ref = collection(firestore, 'pets_data');
    const getData = async () => {
      const data = await getDocs(ref);
      const finalData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPetsData(finalData);
    };
    getData();
  }, []);

  // Find a pet function
  const findPet = (petId) => {
    const pet = petsData.find((pet) => pet.id == petId);
    return pet;
  };

  // Create add function
  const createPet = async (data) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };
  // Create edit function
  const addService = async (serviceData, petId) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      servicos: arrayUnion(serviceData),
    });
  };
  // Create delete function

  return (
    <PetShopContext.Provider value={{ petsData, createPet, findPet, addService }}>
      {children}
    </PetShopContext.Provider>
  );
};

export default PetShopProvider;
