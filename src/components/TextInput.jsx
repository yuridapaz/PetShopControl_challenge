import { cva } from 'class-variance-authority';

const textInputVariants = cva(
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
        true: 'border-1 border-red-400 focus:outline-none',
      },
    },

    defaultVariants: {
      size: 'sm',
    },
  }
);

export const TextInput = ({
  className,
  variant,
  size,
  fullWidth,
  placeholder,
  id,
  register,
  error,
}) => (
  <input
    type='text'
    id={id}
    placeholder={placeholder}
    className={textInputVariants({ variant, size, fullWidth, className, error })}
    {...register}
  ></input>
);
