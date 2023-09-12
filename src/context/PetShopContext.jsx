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

import { firestore } from '../firebase_setup/firebase';

export const PetShopContext = createContext([]);

const PetShopProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const ref = collection(firestore, 'pets_data');

  // Fetch / Sort data
  const getData = async (sortBy) => {
    let sortData;
    switch (sortBy) {
      case 'Z-A':
        sortData = await getDocs(query(ref, orderBy('name', 'desc')));
        break;
      case 'Tipo':
        sortData = await getDocs(
          query(ref, orderBy('type', 'asc'), orderBy('name', 'asc'))
        );
        break;
      case 'Porte':
        sortData = await getDocs(
          query(
            ref,
            orderBy('type', 'asc'),
            orderBy('size', 'asc'),
            orderBy('name', 'asc')
          )
        );
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
  const getPet = async (petID) => {
    const docRef = doc(firestore, 'pets_data', petID);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id };
  };

  // Add pet
  const createPet = async (data) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };

  // Update petData
  const updatePetInfo = async (data, petId) => {
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
  const deletePet = async (docID) => {
    await deleteDoc(doc(firestore, 'pets_data', docID))
      .then(() => {
        console.log('Entire Document has been deleted successfully.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add service
  const addService = async (serviceData, petId) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      servicos: arrayUnion(serviceData),
    });
  };
  // Delete service
  const deleteService = async (serviceData, petId) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      servicos: arrayRemove(serviceData),
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
