import { cva } from 'class-variance-authority';

export const formErrorMessageVariants = cva('absolute -bottom-4 right-3 text-red-500', {
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
