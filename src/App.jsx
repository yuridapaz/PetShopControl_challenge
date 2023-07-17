import Sidebar from './components/Sidebar';
import PetCard from './components/PetCard';

function App() {
  return (
    <div className='relative min-h-screen md:flex'>
      <Sidebar />

      {/* Content Pages */}
      <div className='flex  min-h-[calc(100vh-64px)] w-full items-start justify-center bg-slate-300  @container'>
        <div className='grid w-full max-w-7xl grid-cols-1 gap-3 p-3 @lg:grid-cols-2 @3xl:grid-cols-3 @6xl:grid-cols-4'>
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
