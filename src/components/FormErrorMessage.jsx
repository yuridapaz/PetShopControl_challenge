import { cva } from 'class-variance-authority';

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

const FormErrorMessage = ({ size, errorMessage }) => {
  return (
    <span className={formErrorMessageVariants({ size })}>
      {errorMessage ? errorMessage : 'Preencher campo'}
    </span>
  );
};

export default FormErrorMessage;
