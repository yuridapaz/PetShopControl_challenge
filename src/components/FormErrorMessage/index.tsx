import { formErrorMessageVariants } from './constant';
import { FormErrorMessageProps } from './type';

const FormErrorMessage = ({ size, errorMessage, className }: FormErrorMessageProps) => {
  return (
    <span className={formErrorMessageVariants({ size, className })}>
      {errorMessage ? errorMessage : 'Preencher campo'}
    </span>
  );
};

export default FormErrorMessage;
