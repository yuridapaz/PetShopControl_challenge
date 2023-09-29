import { VariantProps } from 'class-variance-authority';
import { SelectHTMLAttributes } from 'react';

import { selectInputVariants } from './constant';

export type SelectInputProps = Pick<
  SelectHTMLAttributes<HTMLSelectElement>,
  'id' | 'className' | 'value' | 'disabled' | 'onChange' | 'defaultValue'
> &
  VariantProps<typeof selectInputVariants> & {
    register?: any;
    values: string[];
    baseValue?: string;
  };
