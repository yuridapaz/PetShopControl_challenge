import Sidebar from './components/Sidebar';
import PetCard from './components/PetCard';
import DisplayPage from './pages/DisplayPage';

function App() {
  return (
    <div className='relative min-h-screen bg-gray-100 font-sans md:flex'>
      <Sidebar />

      <div className='mt-2 flex w-full flex-col items-start @container'>
        {/* Inputs section */}
        <div className='flex w-full max-w-md flex-col items-center self-center'>
          <div className='flex w-full'>
            <input
              type='text'
              placeholder='Pesquisar ...'
              className='block w-full flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
            />
            {/* dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 */}
            <div className='ml-2 block rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '>
              <select name='Sort' id=''>
                <option value='A-Z'>A-Z</option>
              </select>
            </div>
          </div>
          <div className='flex w-full justify-between'>
            <div className='mt-3'>
              <label
                htmlFor='tipo'
                className='mb-0.5 ml-1 block text-sm font-medium text-gray-900 '
              >
                {/* dark:text-white */}
                Escolher tipo
              </label>
              <select
                id='tipo'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
              >
                {/* dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 */}
                <option selected>Escolher pet</option>
                <option value='cachorro'>Cachorro</option>
                <option value='gato'>Gato</option>
                <option value='passaro'>Pássaro</option>
                <option value='outro'>Outro</option>
              </select>
            </div>
            {/* <div>
              <label
                htmlFor='raca'
                className='mb-0.5 ml-1 block text-sm font-medium text-gray-900 '
              >
                Escolher raça
              </label>
              <select
                id='raca'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 pr-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
              >
                <option selected>Escolher pet</option>
                <option value='cachorro'>Cachorro</option>
                <option value='gato'>Gato</option>
                <option value='passaro'>Pássaro</option>
                <option value='outro'>Outro</option>
              </select>
            </div> */}
            {/* <div>
              <label
                htmlFor='porte'
                className='mb-0.5 ml-1 block text-sm font-medium text-gray-900 '
              >
                Escolher porte
              </label>
              <select
                id='porte'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 pr-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
              >
                <option selected>Escolher pet</option>
                <option value='micro'>Micro</option>
                <option value='pequeno'>Pequeno</option>
                <option value='medio'>Médio</option>
                <option value='grande'>Grande</option>
              </select>
            </div> */}
          </div>
        </div>

        {/* Grid Container */}

        <div className='grid w-full max-w-screen-2xl grid-cols-1  justify-items-center gap-3 p-4 pt-6 @lg:grid-cols-2 @3xl:grid-cols-3 @6xl:grid-cols-4 @7xl:grid-cols-5'>
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
