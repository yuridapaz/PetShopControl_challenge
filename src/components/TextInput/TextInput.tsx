import { useState } from 'react';
import { textInputVariants } from './constant';
import { TextInputProps } from './type';
import React from 'react';

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
  // value,
  'data-testid': dataTestId,
}: TextInputProps) => {
  // const [controlledValue, setControlledValue] = useState(value);
  // const handleChange = (event) => {
  //   setControlledValue(event.target.value);
  //   onChange(event);
  // };

  return (
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
      // value={controlledValue}
      data-testid={dataTestId}
    />
  );
};

export default TextInput;
