import { formErrorMessageVariants } from './constant';
import { FormErrorMessageProps } from './type';

const FormErrorMessage = ({ size, errorMessage }: FormErrorMessageProps) => {
  return <span className={formErrorMessageVariants({ size })}>{errorMessage ? errorMessage : 'Preencher campo'}</span>;
};

export default FormErrorMessage;
