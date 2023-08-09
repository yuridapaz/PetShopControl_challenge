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
} from '@firebase/firestore';

export const PetShopContext = createContext([]);

const PetShopProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [currentPet, setCurrentPet] = useState([]);
  const ref = collection(firestore, 'pets_data');

  const getData = async () => {
    const data = await getDocs(ref);
    const finalData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(finalData);
  };

  const getPet = async (petID) => {
    const docRef = doc(firestore, 'pets_data', petID);
    const docSnap = await getDoc(docRef);
    setCurrentPet(docSnap.data());
    return docSnap.data();
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
    <PetShopContext.Provider value={{ data, getData, createPet, getPet, currentPet, addService }}>
      {children}
    </PetShopContext.Provider>
  );
};

export default PetShopProvider;
