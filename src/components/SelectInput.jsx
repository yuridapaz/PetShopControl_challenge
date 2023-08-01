import { cva } from 'class-variance-authority';

const selectInputVariants = cva(
  'rounded-md border border-gray-300 bg-gray-50 text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50',
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
        true: 'border-1 border-red-400 focus:outline-none',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

<<<<<<< Updated upstream
export const SelectInput = ({
  className,
  variant,
  size,
  fullWidth,
  values,
  id,
  register,
  error,
}) => (
  <select
    id={id}
    className={selectInputVariants({ variant, size, fullWidth, className, error })}
    {...register}
  >
    <option selected disabled hidden></option>
=======
<<<<<<< Updated upstream
export const SelectInput = ({ className, variant, size, fullWidth, values, defaultValue, id }) => (
  <select id={id} className={selectInputVariants({ variant, size, fullWidth, className })}>
    <option defaultValue> {defaultValue} </option>
=======
export const SelectInput = ({ className, size, fullWidth, values, id, register, error }) => (
  <select
    id={id}
    className={selectInputVariants({ size, fullWidth, className, error })}
    {...register}
  >
    <option selected disabled hidden></option>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
