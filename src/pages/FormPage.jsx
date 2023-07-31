import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { SelectInput } from '../components/SelectInput';
import { FaPaw } from 'react-icons/fa';

export const FormPage = () => {
  return (
    <div className='container flex h-full flex-1 flex-col items-center  p-4 '>
      <div className='mb-6 mt-2 flex self-center'>
        {/* Heading */}
        <i className='mr-3 text-2xl'>
          <FaPaw className='rotate-12' />
        </i>
        <h1 className='text-xl'>Formulário de Cadastro</h1>
      </div>
      {/* Form */}
      <form className='flex h-full w-full max-w-4xl flex-1 flex-col gap-4  '>
        {/* Name - Text Input */}
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'> Nome: </label>
          <TextInput id={'name'} />
        </div>
        {/* Tipo / Raça - Select */}
        <div className='flex w-full flex-col gap-4'>
          <div className='flex w-full flex-col gap-1'>
            <label htmlFor='tipo'>Tipo:</label>
            <SelectInput
              defaultValue={'Escolher'}
              id={'tipo'}
              values={['Cachorro', 'Gato', 'Outro']}
            />
          </div>
          <div className='flex w-full flex-col gap-1'>
            <label htmlFor='raca'>Raça:</label>
            <SelectInput defaultValue={'Escolher'} id={'raca'} values={['1', '2', '3']} />
          </div>
        </div>
        {/* Tamanho / Cor / Idade - Select  */}
        <div className='flex w-full gap-4'>
          <div className='flex w-full flex-col gap-1'>
            <label htmlFor='cor'>Cor:</label>
            <SelectInput
              defaultValue={'Escolher'}
              id={'cor'}
              values={['cor 1 ', 'cor 2', 'cor 3']}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='idade'>Idade:</label>
            {/* <SelectInput defaultValue={'Idade'} id={'idade'} values={['1', '2', '3']} /> */}
            <input
              type='number'
              name='idade'
              max={20}
              min={0}
              id='idade'
              className='w-32 rounded-sm border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50'
            />
          </div>
        </div>
        {/* Dono - Text Input / Firebase database select input */}
        <div className='flex w-full flex-col gap-1'>
          <label htmlFor='tamanho'>Tamanho:</label>
          <SelectInput
            defaultValue={'Escolher'}
            id={'tamanho'}
            values={['Micro', 'Pequeno', 'Médio', 'Grande', 'Gigante']}
          />
        </div>

        <Button type='submit' className={'mt-auto w-full max-w-xs self-center'}>
          Enviar
        </Button>
      </form>
    </div>
  );
};
