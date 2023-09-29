import { selectInputVariants } from './constant';
import { SelectInputProps } from './type';

const SelectInput = ({
  className,
  size,
  fullWidth,
  values,
  id,
  register,
  error,
  filled,
  disabled,
  onChange,
  baseValue,
}: SelectInputProps) => (
  <select
    id={id}
    className={selectInputVariants({
      size,
      fullWidth,
      className,
      error,
      filled,
    })}
    {...register}
    disabled={disabled}
    onChange={onChange}
  >
    {baseValue ? <option defaultValue={baseValue} hidden /> : ''}

    {values.map((value, i) => {
      return (
        <option
          value={value
            .replace(/[\u0300-\u036f]/g, '')
            .trim()
            .replace(/\s/g, '-')}
          key={i}
        >
          {value}
        </option>
      );
    })}
  </select>
);

export default SelectInput;
