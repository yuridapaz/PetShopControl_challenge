import React from 'react';
import { useForm } from 'react-hook-form';
import { FaPaw } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button, FormErrorMessage, NumberInput, SelectInput, TextInput } from '../../components';
import { PetShopContext } from '../../context/PetShopContext';
import { DataContextType } from '../../context/type';
import { getPetRaceList, getPetTypeList } from '../../utils/constants';
import { formatNotes } from '../../utils/helpers';
import { RegisterFormInputs } from './types';

const RegisterPetPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({ mode: 'all' });
  const { createPet, uploadPetImage } = React.useContext(PetShopContext) as DataContextType;
  const navigate = useNavigate();
  const [petTypeInput, setPetTypeInput] = React.useState<string>('');
  const petTypeList = getPetTypeList();
  const petRaceList = getPetRaceList(petTypeInput);
  const [imageUpload, setImageUpload] = React.useState<any>(null);

  const onSubmit = async (formData: RegisterFormInputs) => {
    const data = {
      name: formData.name,
      type: formData.type,
      race: formData.race,
      gender: formData.gender,
      weight: formData.weight,
      size: formData.size,
      birthdate: formData.birthdate.getTime(),
      notes: [...formatNotes(formData.notes)],
      services: [],
      imageURL: await uploadPetImage(formData.name, imageUpload),
    };

    createPet(data);
    navigate('/cadastroconcluido');
  };

  return (
    <div className="container flex h-full flex-1 flex-col items-center p-4">
      <div className="mb-4 mt-2 flex self-center">
        <i className="mr-3 text-2xl">
          <FaPaw className="rotate-12" />
        </i>
        <h1 className="text-xl">Formulário de Cadastro</h1>
      </div>
      <form
        className="flex h-full max-h-[calc(100vh-6rem)] min-h-[calc(100vh-6rem)] w-full max-w-4xl flex-1 flex-col gap-3 overflow-auto border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative flex flex-col gap-0.5 md:gap-1.5">
          <label htmlFor="name"> Nome: </label>
          <TextInput
            id={'name'}
            register={{
              ...register('name', {
                required: 'Escolher nome',
                minLength: {
                  value: 3,
                  message: 'Mínimo de três caracteres',
                },
              }),
            }}
            error={errors.name && true}
          />
          {errors.name && <FormErrorMessage errorMessage={errors.name.message} />}
        </div>

        <div className="flex w-full flex-col gap-3">
          <div className="relative flex w-full flex-col gap-0.5 md:gap-1.5">
            <label htmlFor="type">Tipo:</label>
            <SelectInput
              id={'type'}
              values={[...petTypeList, 'Outro']}
              register={{
                ...register('type', {
                  required: 'Escolher tipo',
                }),
              }}
              error={errors.type && true}
              onChange={(e) => {
                setPetTypeInput(e.target.value);
              }}
            />
            {errors.type && <FormErrorMessage errorMessage={errors.type.message} />}
          </div>

          <div className="relative flex w-full flex-col gap-0.5 md:gap-1.5">
            <label htmlFor="race">Raça:</label>
            <SelectInput
              id={'race'}
              values={petRaceList}
              register={{
                ...register('race', {
                  required: 'Escolher raça',
                }),
              }}
              error={errors.race && true}
              disabled={['Outro', 'Nenhum', '', undefined, null].includes(petTypeInput)}
            />
            {errors.race && <FormErrorMessage errorMessage={errors.race.message} />}
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="relative flex w-full flex-col gap-0.5 md:gap-1.5">
            <label htmlFor="gender">Gênero:</label>
            <SelectInput
              id={'gender'}
              values={['Macho', 'Fêmea']}
              register={{
                ...register('gender', { required: 'Escolher gênero' }),
              }}
              error={errors.gender && true}
            />
            {errors.gender && <FormErrorMessage errorMessage={errors.gender.message} />}
          </div>
          <div className="relative flex flex-col gap-0.5 md:gap-1.5">
            <label htmlFor="weight" className="text-center">
              Peso:
            </label>
            <NumberInput
              max={50}
              min={0.1}
              step={0.1}
              id={'weight'}
              className={'w-32 text-center'}
              register={{
                ...register('weight', {
                  required: 'Escolher peso',
                  valueAsNumber: true,
                }),
              }}
              error={errors.weight && true}
            />
            {errors.weight && <FormErrorMessage errorMessage={errors.weight.message} />}
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="relative flex w-full flex-col gap-0.5 md:gap-1.5">
            <label htmlFor="size">Tamanho:</label>
            <SelectInput
              id={'size'}
              values={['Micro', 'Pequeno', 'Médio', 'Grande', 'Gigante']}
              register={{
                ...register('size', { required: 'Escolher tamanho' }),
              }}
              error={errors.size && true}
            />
            {errors.size && <FormErrorMessage errorMessage={errors.size.message} />}
          </div>
          <div className="relative flex flex-col gap-0.5 md:gap-1.5">
            <label htmlFor="birthdate" className="text-center">
              Nascimento:
            </label>
            <input
              type="date"
              max={new Date().toISOString().slice(0, -8).split('T')[0]}
              id="birthdate"
              className={`w-36 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 ${
                errors.birthdate && 'border border-red-400 focus:outline-none dark:border-red-500/50'
              }
              `}
              {...register('birthdate', { required: true, valueAsDate: true })}
            />
            {errors.birthdate && <FormErrorMessage errorMessage={'Escolher data'} />}
          </div>
        </div>
        <div className="flex w-full flex-col gap-0.5 md:gap-1.5">
          <label htmlFor="notes"> Observações </label>
          <textarea
            id="notes"
            rows={4}
            style={{ resize: 'none' }}
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50"
            {...register('notes')}
          ></textarea>
        </div>
        <div className="flex w-full flex-col gap-0.5 md:gap-1.5">
          <label htmlFor="image"> Imagem: </label>
          <input
            type="file"
            id="image"
            className="file:red-500 w-full cursor-pointer rounded-md bg-white file:bg-green-400"
            onChange={(e: any) => {
              setImageUpload(e.target.files[0]);
            }}
          />
        </div>

        <Button type="submit" className={`mt-auto w-full max-w-xs self-center`}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default RegisterPetPage;
