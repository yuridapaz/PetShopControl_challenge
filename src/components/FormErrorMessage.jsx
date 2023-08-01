import { cva } from 'class-variance-authority';

const formErrorMessageVariants = cva('text-red-500 absolute right-3 -bottom-4', {
  variants: {
    size: {
      sm: 'text-xs text-end',
      md: 'text-sm text-end',
      lg: 'text-md text-end',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const FormErrorMessage = ({ size }) => {
  return <span className={formErrorMessageVariants({ size })}>This field is required</span>;
};

export default FormErrorMessage;
