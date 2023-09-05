import { useForm } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';

import { Button, TextInput } from '../components';
import EmailInput from '../components/EmailInput';
import FormErrorMessage from '../components/FormErrorMessage';

const RegisterPetOwnerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="container flex h-full flex-1 flex-col items-center p-4 ">
      {/* heading */}
      <div className="mb-6 mt-2 flex self-center">
        <h1 className="text-xl">Formulário de Cadastro</h1>
        <i className="ml-3 text-2xl">
          <AiOutlineUser className="" />
        </i>
      </div>
      {/* form */}
      <form
        className="flex h-full w-full max-w-4xl flex-1 flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* nome */}
        <div className="relative flex flex-col gap-0.5">
          <label htmlFor="name"> Nome: </label>
          <TextInput
            id={'nome'}
            register={{
              ...register('nome', {
                required: 'Escolher nome',
                minLength: {
                  value: 3,
                  message: 'Mínimo de três caracteres',
                },
              }),
            }}
            error={errors.nome && true}
          />
          {errors.nome && <FormErrorMessage errorMessage={errors.nome.message} />}
        </div>
        {/* email */}
        <div className="relative flex flex-col gap-0.5">
          <label htmlFor="email"> E-mail: </label>
          <EmailInput
            id={'email'}
            register={{
              ...register('email', {
                required: 'Escolher e-mail',
              }),
            }}
            error={errors.email && true}
          />
          {errors.email && <FormErrorMessage errorMessage={errors.email.message} />}
        </div>
        {/* telefone */}

        {/* idade */}
        {/* endereço */}
        {/*  */}
        <Button
          type="submit"
          className={'mt-auto w-full max-w-xs self-center'}
          size={'md'}
        >
          Cadastrar dono !
        </Button>
      </form>
    </div>
  );
};

export default RegisterPetOwnerPage;
