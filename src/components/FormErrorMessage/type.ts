import { VariantProps } from 'class-variance-authority';

import { formErrorMessageVariants } from './constant';

export type FormErrorMessageProps = VariantProps<typeof formErrorMessageVariants> & {
  errorMessage?: string;
  className?: string;
};
