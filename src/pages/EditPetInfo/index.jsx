import { DevTool } from '@hookform/devtools';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { GoAlert } from 'react-icons/go';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
  Button,
  FormErrorMessage,
  NumberInput,
  SelectInput,
  TextInput,
} from '../../components';
import ModalComponent from '../../components/Modal';
import { PetShopContext } from '../../context/PetShopContext';
import { getPetRaceList, getPetTypeList } from '../../utils/constants';

const EditPetInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getPet, updatePetInfo, deletePet } = useContext(PetShopContext);
  const [deleteModal, setDeleteModal] = useState(null);
  const [typeInput, setTypeInput] = useState('');

  const petTypeList = [...getPetTypeList(), 'Outro'];
  const petRaceList = getPetRaceList(typeInput);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'all',
    defaultValues: async () => {
      const petData = await getPet(id);

      petData.nascimento = new Date(petData.nascimento)
        .toISOString()
        .slice(0, -8)
        .split('T')[0];

      petData.raca = '';
      setTypeInput(petData.tipo);

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

    console.log(data);
    updatePetInfo(data, id);
    navigate(-1);
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

  const handleDeletePet = () => {
    // deletePet(id);
    navigate('/pets');
  };

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-2  md:gap-4 md:p-4 lg:gap-6 lg:p-6">
        <div className=" flex rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
          <Link onClick={() => navigate(-1)}>
            <button className="rounded-xl border-2 border-gray-300/50 bg-zinc-100 p-3 text-sm transition-all  ease-in hover:border-gray-500/50 dark:bg-gray-800">
              <AiOutlineLeft />
            </button>
          </Link>
          <p className="m-auto text-lg">Editar Informações</p>
        </div>

        {/* Control */}
        <DevTool control={control} />
        {/* Form */}
        <form
          className="relative flex h-full w-full max-w-4xl flex-1 flex-col gap-4 self-center pt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Button
            className={'absolute right-0 top-0 flex items-center gap-2'}
            variant={'delete'}
            onClick={(e) => {
              e.preventDefault();
              setDeleteModal(true);
            }}
          >
            <BsTrash /> Deletar
          </Button>
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
                values={petTypeList}
                defaultValue={typeInput}
                onChange={(e) => {
                  setTypeInput(e.target.value);
                }}
                register={{
                  ...register('tipo', {
                    required: 'Escolher tipo',
                    validate: false,
                  }),
                }}
                error={errors.tipo && true}
              />
              {errors.tipo && <FormErrorMessage errorMessage={errors.tipo.message} />}
            </div>

            <div className="relative flex w-full flex-col gap-0.5">
              <label htmlFor="raca">Raça:</label>
              <SelectInput
                id={'raca'}
                values={typeInput === 'Outro' ? ['Outro'] : petRaceList}
                register={{
                  ...register('raca', {
                    required: 'Escolher raça',
                  }),
                }}
                error={errors.raca && true}
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
              {errors.tamanho && (
                <FormErrorMessage errorMessage={errors.tamanho.message} />
              )}
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

          <div className="mb-2 mt-auto flex w-full gap-4 px-0 md:mb-0">
            <Button type="submit" className={'w-full'} size={'md'}>
              Editar Informações
            </Button>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              className={'w-full'}
              size={'md'}
              variant={'delete'}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
      <ModalComponent
        displayModal={deleteModal}
        setModal={setDeleteModal}
        modalTitle={'Deletar Pet'}
      >
        <div className="flex w-full flex-col items-center justify-center gap-3 p-4">
          <GoAlert className="text-7xl" fill="#F05252" />
          <h1 className="my-4 text-3xl">Tem certeza ?</h1>
          <p className="text-slate-700/70">
            Se eliminar não voltará e ver esse conteúdo !
          </p>
        </div>
        <div className="flex w-full justify-around p-4">
          <Button onClick={handleDeletePet} className={'w-2/6'} variant={'delete'}>
            Deletar
          </Button>
          <Button onClick={() => setDeleteModal(null)} className={'w-2/6'}>
            Cancelar
          </Button>
        </div>
      </ModalComponent>
    </>
  );
};

export default EditPetInfo;
//
