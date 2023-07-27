const SelectInput = ({ labelName, defaultValue, values, hideLabel }) => {
  return (
    <div
      className={`last: flex w-full flex-col gap-0.5 @3xl:max-w-[150px]    ${
        hideLabel ? 'w-auto self-stretch  ' : ''
      }`}
    >
      <label
        htmlFor='tipo'
        className={`ml-0.5 text-xs text-gray-900 dark:text-zinc-50 ${
          hideLabel ? 'hidden @3xl:block ' : ''
        } `}
      >
        {labelName}
      </label>
      <select
        id='tipo'
        className='h-full w-full rounded-sm border  border-gray-300  bg-gray-50 p-0.5 pr-0  text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50
          dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 '
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
