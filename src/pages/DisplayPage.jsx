import SelectInput from '../components/SelectInput';

const DisplayPage = () => {
  return (
    <div className='w-full @container'>
      {/* Input's  */}
      <div className='flex flex-col gap-4 p-4 @3xl:flex-row @3xl:border @3xl:border-slate-50'>
        {/* Text Input + Order Filter */}
        <div className='flex gap-2 @3xl:w-full @3xl:gap-4'>
          <div className='h-full w-full'>
            <input
              type='text'
              placeholder='Pesquisar...'
              className='h-full w-full rounded-sm  border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 dark:placeholder-zinc-100 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            />
          </div>

          <SelectInput
            defaultValue={'Ordenar'}
            labelName={'Ordenar'}
            values={['A-Z', 'Z-A', 'Pequeno-Grande', 'Grande-Pequeno']}
            hideLabel
          />
        </div>
        {/* Select's  */}
        <div className='flex w-full gap-2 @3xl:gap-4'>
          <SelectInput
            defaultValue={'Tipo'}
            labelName={'Tipo'}
            values={['Cachorro', 'Gato', 'Pássaro']}
          />
          <SelectInput
            defaultValue={'Raça'}
            labelName={'Raça'}
            values={['Schnauzer', 'SRD', 'Outro']}
          />
          <SelectInput
            defaultValue={'Porte'}
            labelName={'Porte'}
            values={['Micro', 'Pequeno', 'Médio', 'Grande']}
          />
        </div>
      </div>
      {/* Display Cards Grid */}
      <div></div>
    </div>
  );
};

export default DisplayPage;
