import Sidebar from './components/Sidebar';
import PetCard from './components/PetCard';

function App() {
  return (
    <div className='relative min-h-screen font-sans md:flex'>
      <Sidebar />

      {/* Content Pages */}
      <div className='flex min-h-[calc(100vh-64px)] w-full items-start justify-center bg-gray-100  @container'>
        <div className='grid w-full max-w-screen-2xl grid-cols-1 justify-items-center gap-x-4 gap-y-2 p-4 pt-6 @lg:grid-cols-2 @3xl:grid-cols-3 @6xl:grid-cols-4 @7xl:grid-cols-5'>
          <PetCard />
          <PetCard />
          <PetCard />

          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </div>
  );
}

export default App;
