import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

export interface SelectInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof selectInputVariants> {
  // lookup:
  // size: 'sm' | 'md' | 'lg' | undefined | null;
  size: any;
  values: Array<string>;
  register: any;
  // lookup:
  // defaultValue: boolean | undefined | null;
  defaultValue: any;
}

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
  defaultValue,
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
    {defaultValue ? <option defaultValue={defaultValue} hidden /> : ''}

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
