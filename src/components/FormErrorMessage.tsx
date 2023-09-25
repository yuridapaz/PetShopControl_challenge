import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const formErrorMessageVariants = cva('absolute -bottom-4 right-3 text-red-500', {
  variants: {
    size: {
      sm: 'text-end text-xs',
      md: 'text-end text-sm',
      lg: 'text-end text-base',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type FormErrorMessageProps = VariantProps<typeof formErrorMessageVariants> & {
  errorMessage?: string;
  className?: string;
};

const FormErrorMessage = ({ size, errorMessage }: FormErrorMessageProps) => {
  return <span className={formErrorMessageVariants({ size })}>{errorMessage ? errorMessage : 'Preencher campo'}</span>;
};

export default FormErrorMessage;
