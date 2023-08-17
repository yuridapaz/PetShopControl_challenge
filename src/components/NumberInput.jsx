import { cva } from 'class-variance-authority';

const numberInputVariants = cva(
  'rounded-md border border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50',
  {
    variants: {
      size: {
        sm: 'text-sm px-3 py-2 placeholder:text-sm placeholder:capitalize',
        md: 'text-md px-4 py-3 placeholder:text-md placeholder:capitalize',
        lg: 'text-xl px-4 py-3 placeholder:text-lg placeholder:capitalize',
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

const NumberInput = ({
  className,
  size,
  fullWidth,
  id,
  register,
  error,
  filled,
  min,
  max,
  step,
}) => (
  <input
    type='number'
    min={min}
    max={max}
    step={step}
    id={id}
    className={numberInputVariants({ size, fullWidth, className, error, filled })}
    {...register}
  ></input>
);
export default NumberInput;
