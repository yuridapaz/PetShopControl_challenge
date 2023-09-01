import { useContext, useEffect, useState } from 'react';
import { get, useForm } from 'react-hook-form';
import { FaPaw } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Button,
  FormErrorMessage,
  NumberInput,
  SelectInput,
  TextInput,
} from '../../components';
import { PetShopContext } from '../../context/PetShopContext';
import { petTypeFilterKeys, pets } from '../../utils/constants';

const EditPetInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { createPet, getPet } = useContext(PetShopContext);

  const [typeInput, setTypeInput] = useState('Nenhum');
  const [raceInput, setRaceInput] = useState('Nenhum');
  const petRaceFilterKeys = pets[typeInput]?.racas;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: async () => {
      const petData = await getPet(id);
      console.log(petData.nascimento);
      petData.nascimento = new Date(petData.nascimento)
        .toISOString()
        .slice(0, -8)
        .split('T')[0];

      setRaceInput(petData.raca);

      return petData;
    },
  });

  const onSubmit = (formData) => {
    const data = {
      nome: formData.nome,
      tipo: formData.tipo,
      raca: formData.raca,
      genero: formData.genero,
      peso: formData.peso,
      tamanho: formData.tamanho,
      nascimento: formData.nascimento.getTime(),
      observacoes: formatObs(formData.observacoes),
      servicos: [],
    };

    console.log(formData.nascimento.getTime());

    for (const key in data) {
      console.log(key, data[key]);
      setValue(key, data[key]);
    }

    // createPet(data);
    // navigate('/cadastroconcluido');
  };

  const formatObs = (obs) => {
    if (obs.length == 0) {
      return [];
    }
    const arr = obs
      .split('\n')
      .map((o) => o.trim())
      .filter(Boolean);

    return arr;
  };

  return (
    <div className="container flex h-full flex-1 flex-col items-center p-4 ">
      <div className="mb-6 mt-2 flex self-center">
        {/* Heading */}
        <i className="mr-3 text-2xl">
          <FaPaw className="rotate-12" />
        </i>
        <h1 className="text-xl">Formulário de Cadastro</h1>
      </div>
      {/* Form */}
      <form
        className="flex h-full w-full max-w-4xl flex-1 flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <div className="flex w-full flex-col gap-5">
          <div className="relative flex w-full flex-col gap-0.5">
            <label htmlFor="tipo">Tipo:</label>
            <SelectInput
              id={'tipo'}
              values={petTypeFilterKeys.slice(1)}
              register={{
                ...register('tipo', {
                  required: 'Escolher tipo',
                }),
              }}
              error={errors.tipo && true}
              defaultValue={typeInput}
            />
            {errors.tipo && <FormErrorMessage errorMessage={errors.tipo.message} />}
          </div>

          <div className="relative flex w-full flex-col gap-0.5">
            <label htmlFor="raca">Raça:</label>
            <SelectInput
              id={'raca'}
              values={typeInput === 'Outro' ? ['Outro'] : petRaceFilterKeys.slice(1)}
              register={{
                ...register('raca', {
                  required: 'Escolher raça',
                }),
              }}
              error={errors.raca && true}
              defaultValue={raceInput}
            />
            {errors.raca && <FormErrorMessage errorMessage={errors.raca.message} />}
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="relative flex w-full flex-col gap-0.5">
            <label htmlFor="genero">Gênero:</label>
            <SelectInput
              id={'genero'}
              values={['Macho', 'Fêmea']}
              register={{
                ...register('genero', { required: 'Escolher gênero' }),
              }}
              error={errors.genero && true}
              defaultValue
            />
            {errors.genero && <FormErrorMessage errorMessage={errors.genero.message} />}
          </div>
          <div className="relative flex flex-col gap-0.5">
            <label htmlFor="peso" className="text-center">
              Peso:
            </label>
            <NumberInput
              max={50}
              min={0.1}
              step={0.1}
              id={'peso'}
              className={'w-32 text-center'}
              register={{
                ...register('peso', {
                  required: 'Escolher peso',
                  valueAsNumber: true,
                }),
              }}
              error={errors.peso && true}
            />
            {errors.peso && <FormErrorMessage errorMessage={errors.peso.message} />}
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="relative flex w-full flex-col gap-0.5">
            <label htmlFor="tamanho">Tamanho:</label>
            <SelectInput
              id={'tamanho'}
              values={['Micro', 'Pequeno', 'Médio', 'Grande', 'Gigante']}
              register={{
                ...register('tamanho', { required: 'Escolher tamanho' }),
              }}
              error={errors.tamanho && true}
              defaultValue
            />
            {errors.tamanho && <FormErrorMessage errorMessage={errors.tamanho.message} />}
          </div>
          <div className="relative flex flex-col gap-0.5">
            <label htmlFor="nascimento" className="text-center">
              Nascimento:
            </label>
            <input
              type="date"
              max={new Date().toISOString().slice(0, -8).split('T')[0]}
              name="nascimento"
              id="nascimento"
              className={`w-32 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 ${
                errors.nascimento &&
                'border border-red-400 focus:outline-none dark:border-red-500/50'
              }
              `}
              {...register('nascimento', { required: true, valueAsDate: true })}
            />
            {errors.nascimento && <FormErrorMessage errorMessage={'Escolher data'} />}
          </div>
        </div>
        <div className="flex w-full flex-col gap-0.5">
          <label htmlFor="observacoes"> Observações </label>
          <textarea
            name="observacoes"
            id="observacoes"
            rows="4"
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50"
            {...register('observacoes')}
          ></textarea>
          {/*  */}
        </div>

        <div className="mb-4 mt-auto flex h-full w-full justify-between gap-6">
          <Button type="submit" className={'w-full max-w-xs'} size={'md'}>
            Editar Informações
          </Button>
          <Button type="submit" className={'w-full max-w-xs'} size={'md'}>
            Editar Informações
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPetInfo;
