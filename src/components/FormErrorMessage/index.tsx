import { formErrorMessageVariants } from './constant';
import { FormErrorMessageProps } from './type';

const FormErrorMessage = ({ size, errorMessage, className, 'data-testid': dataTestId }: FormErrorMessageProps) => {
  return (
    <span className={formErrorMessageVariants({ size, className })} data-testid={dataTestId}>
      {errorMessage ? errorMessage : 'Preencher campo'}
    </span>
  );
};

export default FormErrorMessage;
