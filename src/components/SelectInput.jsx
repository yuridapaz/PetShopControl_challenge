const SelectInput = ({ labelName, defaultValue, values }) => {
  const valor = 'batatá doce ê';
  console.log(valor.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
  console.log('first');
  return (
    <div>
      <label
        htmlFor='tipo'
        className='mb-1 ml-1 block text-xs font-medium text-gray-900 dark:text-zinc-50 '
      >
        {labelName}
      </label>
      <select
        id='tipo'
        className='block w-full rounded-sm border border-gray-300 bg-gray-50 p-0.5 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        <option defaultValue> {defaultValue} </option>
        {values.map((value, i) => {
          return (
            <option
              value={value
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .trim()
                .replace(/\s/g, '-')}
              key={i}
            >
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
