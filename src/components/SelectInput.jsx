import { cva } from 'class-variance-authority';

const selectInputVariants = cva(
  'rounded-md border border-gray-300 bg-gray-50 text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 disabled:cursor-not-allowed',
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
      error: {
        true: 'border-1 border-red-400 focus:outline-none dark:border-red-500/50',
      },
      filled: {
        true: 'border-1 border-green-500 focus:outline-none dark:border-green-500/50',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export const SelectInput = ({
  className,
  size,
  fullWidth,
  values,
  id,
  register,
  error,
  filled,
  disabled,
  onChange,
}) => (
  <select
    id={id}
    className={selectInputVariants({ size, fullWidth, className, error, filled })}
    {...register}
    disabled={disabled}
    onChange={onChange}
  >
    <option defaultValue hidden></option>

    {values.map((value, i) => {
      return (
        <option
          value={value
            // .normalize('NFD')
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
