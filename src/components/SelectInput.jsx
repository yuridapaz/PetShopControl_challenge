import { cva } from 'class-variance-authority';

const selectInputVariants = cva(
  'rounded-sm border border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50',
  {
    variants: {
      size: {
        sm: 'text-sm px-3 py-2',
        md: 'text-md px-4 py-3',
        lg: 'text-xl px-4 py-3',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export const SelectInput = ({ className, variant, size, fullWidth, values, defaultValue, id }) => (
  <select id={id} className={selectInputVariants({ variant, size, fullWidth, className })}>
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
);
