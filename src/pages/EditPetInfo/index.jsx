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

  const petTypeList = getPetTypeList();
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

      petData.birthdate = new Date(petData.birthdate)
        .toISOString()
        .slice(0, -8)
        .split('T')[0];

      petData.race = '';
      setTypeInput(petData.type);

      return petData;
    },
  });

  const onSubmit = (formData) => {
    const data = {
      name: formData.name,
      type: formData.type,
      race: formData.race,
      gender: formData.gender,
      weight: formData.weight,
      size: formData.size,
      birthdate: formData.birthdate.getTime(),
      notes: formatNotes(formData.notes),
    };
    updatePetInfo(data, id);
    navigate(-1);
  };

  const formatNotes = (notes) => {
    if (notes.length == 0) return [];
    if (Array.isArray(notes) && notes.length > 0) return notes;

    return notes
      .split(/[\n,]/)
      .map((o) => o.trim())
      .filter(Boolean);
    // return arr;
  };

  const handleDeletePet = () => {
    deletePet(id);
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
              id={'name'}
              register={{
                ...register('name', {
                  required: 'Escolher name',
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

          <div className="flex w-full flex-col gap-5">
            <div className="relative flex w-full flex-col gap-0.5">
              <label htmlFor="type">Tipo:</label>
              <SelectInput
                id={'type'}
                values={[...petTypeList, 'Outro']}
                defaultValue={typeInput}
                onChange={(e) => {
                  setTypeInput(e.target.value);
                }}
                register={{
                  ...register('type', {
                    required: 'Escolher type',
                    validate: false,
                  }),
                }}
                error={errors.type && true}
              />
              {errors.type && <FormErrorMessage errorMessage={errors.type.message} />}
            </div>

            <div className="relative flex w-full flex-col gap-0.5">
              <label htmlFor="race">Raça:</label>
              <SelectInput
                id={'race'}
                values={typeInput === 'Outro' ? ['Outro'] : petRaceList}
                register={{
                  ...register('race', {
                    required: 'Escolher raça',
                  }),
                }}
                error={errors.race && true}
              />
              {errors.race && <FormErrorMessage errorMessage={errors.race.message} />}
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="relative flex w-full flex-col gap-0.5">
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
            <div className="relative flex flex-col gap-0.5">
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
                    required: 'Escolher weight',
                    valueAsNumber: true,
                  }),
                }}
                error={errors.weight && true}
              />
              {errors.weight && <FormErrorMessage errorMessage={errors.weight.message} />}
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="relative flex w-full flex-col gap-0.5">
              <label htmlFor="size">Tamanho:</label>
              <SelectInput
                id={'size'}
                values={['Micro', 'Pequeno', 'Médio', 'Grande', 'Gigante']}
                register={{
                  ...register('size', { required: 'Escolher size' }),
                }}
                error={errors.size && true}
                defaultValue
              />
              {errors.size && <FormErrorMessage errorMessage={errors.size.message} />}
            </div>
            <div className="relative flex flex-col gap-0.5">
              <label htmlFor="birthdate" className="text-center">
                Nascimento:
              </label>
              <input
                type="date"
                max={new Date().toISOString().slice(0, -8).split('T')[0]}
                name="birthdate"
                id="birthdate"
                className={`w-32 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50 ${
                  errors.birthdate &&
                  'border border-red-400 focus:outline-none dark:border-red-500/50'
                }
              `}
                {...register('birthdate', { required: true, valueAsDate: true })}
              />
              {errors.birthdate && <FormErrorMessage errorMessage={'Escolher data'} />}
            </div>
          </div>
          <div className="flex w-full flex-col gap-0.5">
            <label htmlFor="notes"> Observações </label>
            <textarea
              name="notes"
              id="notes"
              rows="4"
              className="rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50"
              {...register('notes')}
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
