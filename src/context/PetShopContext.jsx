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
        sortData = await getDocs(query(ref, orderBy('nome', 'desc')));
        break;
      case 'Tipo':
        sortData = await getDocs(
          query(ref, orderBy('tipo', 'asc'), orderBy('nome', 'asc'))
        );
        break;
      case 'Porte':
        sortData = await getDocs(
          query(
            ref,
            orderBy('tipo', 'asc'),
            orderBy('tamanho', 'asc'),
            orderBy('nome', 'asc')
          )
        );
        break;

      default:
        sortData = await getDocs(query(ref, orderBy('nome', 'asc')));
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
      nome: data.nome,
      tipo: data.tipo,
      raca: data.raca,
      genero: data.genero,
      peso: data.peso,
      tamanho: data.tamanho,
      nascimento: data.nascimento,
      observacoes: data.observacoes,
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
