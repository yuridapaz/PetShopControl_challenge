import { numberInputVariants } from './constant';
import { NumberInputProps } from './type';

const NumberInput = ({ className, size, fullWidth, id, register, error, filled, min, max, step }: NumberInputProps) => (
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
  ></input>
);
export default NumberInput;
