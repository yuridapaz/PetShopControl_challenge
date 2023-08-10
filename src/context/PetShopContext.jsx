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

  // Get data
  const getData = async () => {
    const data = await getDocs(ref);
    const finalData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(finalData);
  };

  // Sort by
  const sortData = async () => {
    const sortData = await getDocs(query(ref, orderBy('nome', 'asc')));
    const finalData = sortData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(finalData);
  };

  // // Filter by 'tipo'
  // const filterBy = () => {
  //   const filteredData = data.filter((data) => data.tipo.toLowerCase() == 'cachorro');
  //   console.log(filteredData);
  //   setData(filteredData);
  // };

  const getPet = async (petID) => {
    const docRef = doc(firestore, 'pets_data', petID);
    const docSnap = await getDoc(docRef);
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
  const deleteService = async () => {};

  return (
    <PetShopContext.Provider
      value={{ data, setData, getData, createPet, getPet, addService, sortData }}
    >
      {children}
    </PetShopContext.Provider>
  );
};

export default PetShopProvider;
