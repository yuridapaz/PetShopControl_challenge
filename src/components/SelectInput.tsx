import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

const selectInputVariants = cva(
  'rounded-md border border-gray-300 bg-gray-50 text-gray-900  disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50',
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-base',
        md: 'px-4 py-3 text-base',
        lg: 'px-4 py-3 text-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
      error: {
        true: 'border border-red-400 focus:border-red-400 focus:ring-red-400  dark:border-red-500/50',
      },
      filled: {
        true: 'border border-green-500 focus:border-green-500 focus:ring-green-500 dark:border-green-500/50',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

type SelectInputProps = Pick<
  SelectHTMLAttributes<HTMLSelectElement>,
  'id' | 'className' | 'value' | 'disabled' | 'onChange' | 'defaultValue'
> &
  VariantProps<typeof selectInputVariants> & {
    register: any;
    values: string[];
    baseValue?: string;
  };

const SelectInput = ({
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
  baseValue,
}: SelectInputProps) => (
  <select
    id={id}
    className={selectInputVariants({
      size,
      fullWidth,
      className,
      error,
      filled,
    })}
    {...register}
    disabled={disabled}
    onChange={onChange}
  >
    {baseValue ? <option defaultValue={baseValue} hidden /> : ''}

    {values.map((value, i) => {
      return (
        <option
          value={value
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

export default SelectInput;
