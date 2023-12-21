import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { numberInputVariants } from './constant';

export type NumberInputProps = VariantProps<typeof numberInputVariants> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'min' | 'max' | 'step' | 'id' | 'className'> & {
    register?: any;
    'data-testid'?: string;
  };
