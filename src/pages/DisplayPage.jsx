import SelectInput from '../components/SelectInput';

const DisplayPage = ({ children }) => {
  return (
    <div className='mt-2 flex w-full flex-col items-start @container'>
      {/* Inputs section */}
      <div className='flex w-full max-w-md flex-col items-center self-center '>
        {/* Search input */}
        <div className='mt-2 flex w-full'>
          <input
            type='text'
            placeholder='Pesquisar ...'
            className='block w-full flex-1 rounded-sm border border-gray-300 bg-gray-50 p-1.5  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 dark:placeholder-zinc-100 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          />

          <select
            name='Sort'
            id=''
            className='ml-2 block rounded-sm border border-gray-300 bg-gray-50 p-2  text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          >
            <option value='A-Z'>A-Z</option>
          </select>
        </div>
        {/* Select Inputs Div */}
        <div className='mt-3 flex w-full justify-between'>
          {/* Filter select input  */}
          <div>
            <label
              htmlFor='tipo'
              className='mb-1 ml-1 block text-xs font-medium text-gray-900 dark:text-zinc-50 '
            >
              Escolher tipo
            </label>
            <select
              id='tipo'
              className='block w-full rounded-sm border border-gray-300 bg-gray-50 p-0.5 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            >
              <option defaultValue>Pet</option>
              <option value='cachorro'>Cachorro</option>
              <option value='gato'>Gato</option>
              <option value='passaro'>Pássaro</option>
              <option value='outro'>Outro</option>
            </select>
          </div>
          {/* Filter select input  */}
          <div>
            <label
              htmlFor='raca'
              className='mb-1 ml-1 block text-xs font-medium text-gray-900 dark:text-zinc-50'
            >
              Escolher raça
            </label>
            <select
              id='raca'
              className='block w-full rounded-sm border border-gray-300 bg-gray-50 p-0.5 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            >
              <option defaultValue>Raça</option>
              <option value='schnauzer'>Schnauzer</option>
              <option value='schnauzer'>Schnauzer</option>
              <option value='schnauzer'>Schnauzer</option>
              <option value='schnauzer'>Schnauzer</option>
              <option value='schnauzer'>Schnauzer</option>
            </select>
          </div>
          {/* Filter select input  */}
          <div>
            <label
              htmlFor='porte'
              className='mb-1 ml-1 block text-xs font-medium text-gray-900 dark:text-zinc-50'
            >
              Escolher porte
            </label>
            <select
              id='porte'
              className='block w-full rounded-sm border border-gray-300 bg-gray-50 p-0.5 pr-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            >
              <option defaultValue>Porte</option>
              <option value='micro'>Micro</option>
              <option value='pequeno'>Pequeno</option>
              <option value='medio'>Médio</option>
              <option value='grande'>Grande</option>
            </select>
          </div>
        </div>
      </div>

      <SelectInput
        defaultValue={'Escolher'}
        labelName={'Testando Select Input'}
        values={['Yuri', 'Todd', 'Paola', 'Gillian']}
      />

      {/* Grid Container */}

      <div className='grid w-full max-w-screen-2xl grid-cols-1  justify-items-center gap-3 p-4 pt-6 @lg:grid-cols-2 @3xl:grid-cols-3 @6xl:grid-cols-4 @7xl:grid-cols-5'>
        {children}
      </div>
    </div>
  );
};

export default DisplayPage;
