import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { SelectInput } from '../components/SelectInput';

export const FormPage = () => {
  return (
    <div className='container mt-2 flex flex-col items-center p-4'>
      <div className='mb-4 flex items-center self-center'>
        {/* Heading */}
        <i className='mr-4'>Icon Here</i>
        <h1 className='text-xl'>Formulário de Cadastro</h1>
      </div>
      {/* Form */}
      <form className='flex w-full max-w-4xl flex-col gap-2 border border-slate-500'>
        {/* Name - Text Input */}
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'> Nome: </label>
          <TextInput id={'name'} />
        </div>
        {/* Tipo / Raça - Select */}
        <div className='flex flex-col gap-1'>
          <label htmlFor='tipo'>Tipo:</label>
          <div className='flex w-full flex-col '>
            <div className='flex  gap-1'>
              <input type='radio' name='tipo' id='gato' />
              <label htmlFor='gato'>Gato</label>
            </div>
            <div className='flex  gap-1'>
              <input type='radio' name='tipo' id='cachorro' />
              <label htmlFor='cachorro'>Cachorro</label>
            </div>
            <div className='flex  gap-1'>
              <input type='radio' name='tipo' id='outro' />
              <label htmlFor='outro'>Outro</label>
            </div>
          </div>
        </div>
        {/* Tamanho / Cor / Idade - Select  */}
        {/* Dono - Text Input / Firebase database select input */}
      </form>
      {/*  */}

      {/*  */}
    </div>
  );
};
