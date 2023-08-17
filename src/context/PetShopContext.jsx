import { useState, createContext } from 'react';
import { firestore } from '../firebase_setup/firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  arrayUnion,
  // arrayRemove,
  doc,
  getDoc,
  orderBy,
  query,
} from '@firebase/firestore';

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
        sortData = await getDocs(query(ref, orderBy('tipo', 'asc'), orderBy('nome', 'asc')));
        break;
      case 'Porte':
        sortData = await getDocs(
          query(ref, orderBy('tipo', 'asc'), orderBy('tamanho', 'asc'), orderBy('nome', 'asc'))
        );
        break;

      default:
        sortData = await getDocs(query(ref, orderBy('nome', 'asc')));
        break;
    }
    const finalData = sortData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(finalData);
  };

  // Fetch pet
  const getPet = async (petID) => {
    const docRef = doc(firestore, 'pets_data', petID);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  // Add pet
  const createPet = async (data) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };
  // Delete pet

  // Add service
  const addService = async (serviceData, petId) => {
    await updateDoc(doc(firestore, 'pets_data', petId), {
      servicos: arrayUnion(serviceData),
    });
  };
  // Delete service
  // const deleteService = async () => {};

  return (
    <PetShopContext.Provider value={{ data, setData, getData, createPet, getPet, addService }}>
      {children}
    </PetShopContext.Provider>
  );
};

export default PetShopProvider;
