import { emailInputVariants } from './constant';
import { EmailInputProps } from './type';

const EmailInput = ({
  className,
  size,
  fullWidth,
  placeholder,
  id,
  register,
  error,
  filled,
  onChange,
  'data-testid': dataTestId,
}: EmailInputProps) => (
  <input
    type="email"
    id={id}
    placeholder={placeholder}
    className={emailInputVariants({
      size,
      fullWidth,
      className,
      error,
      filled,
    })}
    {...register}
    onChange={onChange}
    data-testid={dataTestId}
  ></input>
);

export default EmailInput;
