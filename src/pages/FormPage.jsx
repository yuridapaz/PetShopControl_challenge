import { Button } from '../components/Button';
import { SelectInput } from '../components/SelectInput';

export const FormPage = () => {
  return (
    <div className='container mt-10 flex flex-col items-center justify-center p-4'>
      <div className=''>
        {/* Heading */}
        <i className='mr-0'>Icon Here</i>
        <h1 className='text-3xl'>Formulário de Cadastro</h1>
      </div>
      {/* Form */}
      <form className=''>
        <div>
          {/* Name - Text Input */}
          {/* Tipo / Raça - Select */}
          {/* Tamanho / Cor / Idade - Select  */}
          {/* Dono - Text Input / Firebase database select input */}
        </div>
      </form>
    </div>
  );
};
