import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPaw } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button, FormErrorMessage, NumberInput, SelectInput, TextInput } from '../../components';
import { PetShopContext } from '../../context/PetShopContext';
import { getPetRaceList, getPetTypeList } from '../../utils/constants';

const RegisterPetPage = () => {
  const navigate = useNavigate();
  const { createPet } = useContext(PetShopContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const [petTypeInput, setPetTypeInput] = useState('');
  const petTypeList = getPetTypeList();
  const petRaceList = getPetRaceList(petTypeInput);

  const onSubmit = (formData) => {
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
    };
    createPet(data);
    navigate('/cadastroconcluido');
  };

  const formatNotes = (notes) => {
    const arr = notes
      .split('\n')
      .map((o) => o.trim())
      .filter(Boolean);
    return arr;
  };

  return (
    <div className="container flex h-full flex-1 flex-col items-center p-4">
      <div className="mb-6 mt-2 flex self-center">
        <i className="mr-3 text-2xl">
          <FaPaw className="rotate-12" />
        </i>
        <h1 className="text-xl">Formulário de Cadastro</h1>
      </div>
      <form className="flex h-full w-full max-w-4xl flex-1 flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="flex w-full flex-col gap-6">
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
              // filled={touchedFields.type && !errors?.type}
              onChange={(e) => {
                setPetTypeInput(e.target.value);
              }}
              defaultValue
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
              defaultValue
              // lookup:
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
              defaultValue
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
              defaultValue
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
              name="birthdate"
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
            name="notes"
            id="notes"
            rows="4"
            style={{ resize: 'none' }}
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50"
            {...register('notes')}
          ></textarea>
        </div>
        <div></div>

        <Button type="submit" className={`mt-auto w-full max-w-xs self-center`}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default RegisterPetPage;
