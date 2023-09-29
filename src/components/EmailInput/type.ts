import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { emailInputVariants } from './constant';

export type EmailInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder' | 'className' | 'id' | 'onChange'
> &
  VariantProps<typeof emailInputVariants> & {
    register: any;
  };
