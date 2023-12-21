import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

import { buttonVariants } from './constant';

export type ButtonProps = VariantProps<typeof buttonVariants> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled' | 'onClick' | 'children' | 'className'> & {
    'data-testid'?: string;
  };
