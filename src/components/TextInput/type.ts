import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { textInputVariants } from './constant';

export type TextInputProps = VariantProps<typeof textInputVariants> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'className' | 'id' | 'value' | 'onChange'> & {
    register?: any;
    'data-testid'?: string;
  };
