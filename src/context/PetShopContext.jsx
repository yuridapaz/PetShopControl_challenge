import { useState, useEffect, createContext } from 'react';
import { firestore } from '../firebase_setup/firebase';
import { collection, getDocs } from '@firebase/firestore';

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

  return <PetShopContext.Provider value={{ petShopData }}>{children}</PetShopContext.Provider>;
};

export default PetShopProvider;
