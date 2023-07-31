import Navigation from './Layout/Navigation';
import { useEffect, useState } from 'react';
import { firestore } from './firebase_setup/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { FormPage } from './pages/FormPage';

function App() {
  const [data, setData] = useState([]);
  const ref = collection(firestore, 'test_data');

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(ref);
      const finalData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(finalData);
      setData(finalData);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='relative min-h-screen w-full bg-gray-100 font-sans dark:bg-gray-900  dark:text-zinc-50 md:flex '>
      <Navigation />
      <FormPage />
    </div>
  );
}

export default App;
