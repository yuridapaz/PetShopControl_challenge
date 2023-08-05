import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { SelectInput } from '../components/SelectInput';
import { FaPaw } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import FormErrorMessage from '../components/FormErrorMessage';
import { useContext } from 'react';
import { PetShopContext } from '../context/PetShopContext';

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm({ mode: 'onChange' });

  const { createPet } = useContext(PetShopContext);

  const onSubmit = (formData) => {
    const data = {
      nome: formData.nome,
      tipo: formData.tipo,
      raca: formData.raca,
      cor: formData.cor,
      idade: formData.idade,
      tamanho: formData.tamanho,
    };
    createPet(data);

    alert('Adicionado!');
  };

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
      <form
        className='flex h-full w-full max-w-4xl flex-1 flex-col gap-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name - Text Input */}
        <div className='relative flex flex-col gap-0.5'>
          <label htmlFor='name'> Nome: </label>
          <TextInput
            id={'nome'}
            register={{ ...register('nome', { minLength: 3 }) }}
            error={errors.nome && true}
            filled={touchedFields.nome && !errors.nome && true}
          />
          {errors.nome && <FormErrorMessage />}
        </div>
        {/* Tipo / Raça - Select */}
        <div className='flex w-full flex-col gap-5'>
          <div className='relative flex w-full flex-col gap-0.5'>
            <label htmlFor='tipo'>Tipo:</label>
            <SelectInput
              id={'tipo'}
              values={['Cachorro', 'Gato', 'Outro']}
              register={{ ...register('tipo', { required: true }) }}
              error={errors.tipo && true}
            />
            {errors.tipo && <FormErrorMessage />}
          </div>
          <div className='relative flex w-full flex-col gap-0.5'>
            <label htmlFor='raca'>Raça:</label>
            <SelectInput
              id={'raca'}
              values={['1', '2', '3']}
              register={{ ...register('raca', { required: true }) }}
              error={errors.raca && true}
            />
            {errors.raca && <FormErrorMessage />}
          </div>
        </div>
        {/* Tamanho / Cor / Idade - Select  */}
        <div className='flex w-full gap-6'>
          <div className='relative flex w-full flex-col gap-0.5'>
            <label htmlFor='cor'>Cor:</label>
            <SelectInput
              id={'cor'}
              values={['cor 1 ', 'cor 2', 'cor 3']}
              register={{ ...register('cor', { required: true }) }}
              error={errors.cor && true}
            />
            {errors.cor && <FormErrorMessage />}
          </div>
          <div className='relative flex flex-col gap-0.5'>
            <label htmlFor='idade'>Idade:</label>
            <input
              type='number'
              name='idade'
              max={20}
              min={1}
              id='idade'
              className={`w-32 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 ${
                errors.idade && 'border-1 border-red-400 focus:outline-none'
              }`}
              {...register('idade', { required: true })}
            />
            {errors.idade && <FormErrorMessage />}
          </div>
        </div>
        {/* Gênero e Peso */}
        <div className='flex w-full gap-6'>
          <div className='relative flex w-full flex-col gap-0.5'>
            <label htmlFor='genero'>Gênero:</label>
            <SelectInput
              id={'genero'}
              values={['genero 1 ', 'genero 2', 'genero 3']}
              register={{ ...register('genero', { required: true }) }}
              error={errors.genero && true}
            />
            {errors.genero && <FormErrorMessage />}
          </div>
          <div className='relative flex flex-col gap-0.5'>
            <label htmlFor='peso'>Peso:</label>
            <input
              type='number'
              name='peso'
              max={50}
              min={0.1}
              step={0.1}
              id='peso'
              className={`w-32 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 ${
                errors.peso && 'border-1 border-red-400 focus:outline-none'
              }`}
              {...register('peso', { required: true })}
            />
            {errors.peso && <FormErrorMessage />}
          </div>
        </div>
        {/* Dono - Text Input / Firebase database select input */}
        <div className='flex w-full gap-6'>
          <div className='relative flex w-full flex-col gap-0.5'>
            <label htmlFor='tamanho'>Tamanho:</label>
            <SelectInput
              id={'tamanho'}
              values={['Micro', 'Pequeno', 'Médio', 'Grande', 'Gigante']}
              register={{ ...register('tamanho', { required: true }) }}
              error={errors.tamanho && true}
            />
            {errors.tamanho && <FormErrorMessage />}
          </div>
          <div className='relative flex flex-col gap-0.5'>
            <label htmlFor='nascimento'>Nascimento:</label>
            <input
              type='date'
              name='nascimento'
              id='nascimento'
              className={`w-32 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 ${
                errors.nascimento && 'border-1 border-red-400 focus:outline-none'
              }`}
              {...register('nascimento', { required: true })}
            />
            {errors.nascimento && <FormErrorMessage />}
          </div>
        </div>

        <Button type='submit' className={'mt-auto w-full max-w-xs self-center'}>
          Enviar
        </Button>
      </form>
    </div>
  );
};
