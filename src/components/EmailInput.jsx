import { cva } from 'class-variance-authority';

const emailInputVariants = cva(
  'rounded-md border border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50',
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-base placeholder:text-sm placeholder:capitalize',
        md: 'px-4 py-3 text-base placeholder:text-base placeholder:capitalize',
        lg: 'px-4 py-3 text-xl placeholder:text-lg placeholder:capitalize',
      },
      fullWidth: {
        true: 'w-full',
      },
      error: {
        true: 'border border-red-400 focus:border-red-400 focus:ring-red-400  dark:border-red-500/50',
      },
      filled: {
        true: 'border border-green-500 focus:outline-none dark:border-green-500/50',
      },
    },

    defaultVariants: {
      size: 'sm',
    },
  }
);

const EmailInput = ({
  className,
  variant,
  size,
  fullWidth,
  placeholder,
  id,
  register,
  error,
  filled,
  onChange,
}) => (
  <input
    type="email"
    id={id}
    placeholder={placeholder}
    className={emailInputVariants({
      variant,
      size,
      fullWidth,
      className,
      error,
      filled,
    })}
    {...register}
    onChange={onChange}
  ></input>
);

export default EmailInput;
