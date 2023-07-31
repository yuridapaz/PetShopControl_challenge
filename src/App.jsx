import Navigation from './Layout/Navigation';
import { useEffect, useState } from 'react';
import { firestore } from './firebase_setup/firebase';
import { collection, getDocs, addDoc } from '@firebase/firestore';
import { FormPage } from './pages/FormPage';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const ref = collection(firestore, 'pets_data');

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(ref);
      const finalData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(finalData);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='relative flex min-h-screen w-full flex-col bg-gray-100  dark:bg-gray-900  dark:text-zinc-50 md:flex md:flex-row'>
      <Navigation />
      <FormPage />
    </div>
  );
}

export default App;
