import { buttonVariants } from './constant';
import { ButtonProps } from './type';

const Button = ({
  className,
  variant,
  size,
  bold,
  children,
  disabled,
  onClick,
  'data-testid': dataTestId,
}: ButtonProps) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={buttonVariants({ variant, size, bold, className })}
    data-testid={dataTestId}
  >
    {children}
  </button>
);

export default Button;
