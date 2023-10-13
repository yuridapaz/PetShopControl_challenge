import { numberInputVariants } from './constant';
import { NumberInputProps } from './type';

const NumberInput = ({
  className,
  size,
  fullWidth,
  id,
  register,
  error,
  filled,
  min,
  max,
  step,
  'data-testid': dataTestId,
}: NumberInputProps) => (
  <input
    type="number"
    min={min}
    max={max}
    step={step}
    id={id}
    className={numberInputVariants({
      size,
      fullWidth,
      className,
      error,
      filled,
    })}
    {...register}
    data-testid={dataTestId}
  ></input>
);
export default NumberInput;
