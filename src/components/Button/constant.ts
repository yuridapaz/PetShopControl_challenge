import { cva } from 'class-variance-authority';

export const buttonVariants = cva('rounded-md transition-all', {
  variants: {
    variant: {
      primary:
        'bg-sky-400 text-slate-50 hover:bg-sky-400/90 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-sky-400/90 dark:hover:bg-sky-300/90',
      secondary: 'bg-gray-300 hover:bg-gray-300/90 dark:bg-gray-300 dark:hover:bg-gray-300/90 ',
      plain: 'border border-black bg-white ',
      delete: 'bg-red-500 text-white hover:bg-red-500/90 dark:bg-red-500/90 dark:hover:bg-red-400/90',
    },
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-4 py-3 text-xl',
    },
    bold: {
      true: 'font-semibold',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});
