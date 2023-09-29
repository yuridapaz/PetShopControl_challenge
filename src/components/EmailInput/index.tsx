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
  ></input>
);

export default EmailInput;
