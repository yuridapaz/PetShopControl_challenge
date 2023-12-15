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
  'data-testid': dataTestId,
}: TextInputProps) => {
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
      data-testid={dataTestId}
    />
  );
};

export default TextInput;
