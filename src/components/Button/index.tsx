import { buttonVariants } from './constant';
import { ButtonProps } from './type';

const Button = ({ className, variant, size, bold, children, disabled, onClick }: ButtonProps) => (
  <button disabled={disabled} onClick={onClick} className={buttonVariants({ variant, size, bold, className })}>
    {children}
  </button>
);

export default Button;
