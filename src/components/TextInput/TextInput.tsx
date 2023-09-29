import { textInputVariants } from './constant';
import { TextInputProps } from './type';

const TextInput = ({
  className,
  size,
  fullWidth,
  placeholder,
  id,
  register,
  error,
  filled,
  onChange,
}: TextInputProps) => (
  <input
    type="text"
    id={id}
    placeholder={placeholder}
    className={textInputVariants({
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

export default TextInput;
