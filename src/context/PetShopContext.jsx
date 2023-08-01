import { useState, useEffect, createContext } from 'react';
import { firestore } from '../firebase_setup/firebase';
import { collection, getDocs, addDoc } from '@firebase/firestore';

export const PetShopContext = createContext([]);

const PetShopProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [petShopData, setPetShopData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const ref = collection(firestore, 'pets_data');
      const data = await getDocs(ref);
      const finalData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPetShopData(finalData);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Create add function
  const createPet = async (data) => {
    await addDoc(collection(firestore, 'pets_data'), data);
  };
  // Create edit function
  // Create delete function

  return (
    <PetShopContext.Provider value={{ petShopData, createPet }}>{children}</PetShopContext.Provider>
  );
};

export default PetShopProvider;
