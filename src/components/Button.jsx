import { cva } from 'class-variance-authority';

const buttonVariants = cva('rounded-md transition-all ', {
  variants: {
    variant: {
      primary:
        'bg-sky-400 hover:bg-sky-400/90 dark:bg-sky-400/90 dark:hover:bg-sky-300/90 text-slate-50 disabled:bg-gray-400 disabled:cursor-not-allowed',
      secondary: 'bg-gray-300 hover:bg-gray-300/90 dark:bg-gray-300 dark:bg-gray-300/90 ',
      plain: 'bg-white border border-black ',
      delete:
        'bg-red-500 text-white hover:bg-red-500/90 dark:bg-red-500/90 dark:hover:bg-red-400/90',
    },
    size: {
      sm: 'text-sm px-3 py-2',
      md: 'text-md px-4 py-3',
      lg: 'text-xl px-4 py-3',
    },
    bold: {
      true: 'font-semibold',
    },
  },
  compoundVariants: [{ variant: '', size: '', class: '' }],
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

export const Button = ({ className, variant, size, bold, children, disabled, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={buttonVariants({ variant, size, bold, className })}
  >
    {children}
  </button>
);
