import Sidebar from './components/Sidebar';
import PetCard from './components/PetCard';
import { useEffect, useState } from 'react';
import { firestore } from './firebase_setup/firebase';
import { collection, getDocs } from '@firebase/firestore';
import DisplayPage from './pages/DisplayPage';

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
  }, []);

  return (
    <div className='relative min-h-screen bg-gray-100 font-sans dark:bg-gray-900  dark:text-zinc-50 md:flex '>
      <Sidebar />
      <DisplayPage>
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </DisplayPage>
    </div>
  );
}

export default App;
