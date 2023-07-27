import React from 'react';
import { cva } from 'class-variance-authority';

const buttonVariants = cva('', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
    },
    size: {
      small: '',
      medium: '',
    },
  },
  compoundVariants: [{ variant: '', size: '', class: '' }],
  defaultVariants: {
    variant: '',
    size: '',
  },
});

export const Button = ({ className, variant, size, children }) => (
  <button className={buttonVariants({ variant, size, className })}>{children}</button>
);
