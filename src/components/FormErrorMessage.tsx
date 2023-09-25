import { type VariantProps, cva } from 'class-variance-authority';

export interface FormErrorMessageProps extends VariantProps<typeof formErrorMessageVariants> {
  errorMessage: string;
}

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

const FormErrorMessage = ({ size, errorMessage }: FormErrorMessageProps) => {
  return <span className={formErrorMessageVariants({ size })}>{errorMessage ? errorMessage : 'Preencher campo'}</span>;
};

export default FormErrorMessage;
