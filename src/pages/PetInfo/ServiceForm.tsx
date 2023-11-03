import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { Button, FormErrorMessage, NumberInput, SelectInput } from '../../components';
import { PetShopContext } from '../../context/PetShopContext';
import { DataContextType } from '../../context/type';
import { ServiceFormInputs, ServiceFormProps } from './types';

const ServiceForm = ({ petId, setModal, appendService }: ServiceFormProps) => {
  const { addService } = React.useContext(PetShopContext) as DataContextType;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ServiceFormInputs>({ mode: 'all' });

  const onSubmit = async (formData: ServiceFormInputs) => {
    const serviceData = {
      type: formData.type,
      cost: formData.cost,
      date: formData.date.toLocaleDateString('en-GB'),
      hour: formData.date.toLocaleTimeString('en-GB'),
      serviceId: formData.date.valueOf() + petId!,
      petId: petId!,
    };

    try {
      addService(serviceData, petId!);
      appendService(serviceData);
      setModal(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex h-full flex-1">
      <form className="container  flex flex-col gap-6  p-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex w-full flex-col gap-1 md:gap-2">
          <label htmlFor="">Serviço:</label>
          <SelectInput
            values={['Tosa', 'Vacina', 'Remédio']}
            register={{
              ...register('type', {
                required: 'Escolher tipo',
              }),
            }}
            error={errors.type && true}
          />
          {errors.type && <FormErrorMessage errorMessage={errors.type.message} className={'-bottom-6'} />}
        </div>

        <div className="relative flex w-full flex-col gap-1 md:gap-2">
          <label htmlFor="">Valor:</label>
          <NumberInput
            step={0.01}
            register={{ ...register('cost', { required: 'Escolher valor', valueAsNumber: true }) }}
            error={errors.cost && true}
          />
          {errors.cost && <FormErrorMessage errorMessage={errors.cost.message} className={'-bottom-6'} />}
        </div>

        <div className="relative flex w-full flex-col gap-1 md:gap-2">
          <label htmlFor="date">Data:</label>
          <input
            type="datetime-local"
            id="date"
            max={new Date().toISOString().slice(0, -8)}
            className={`rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50  ${
              errors.date && 'border border-red-400 focus:outline-none dark:border-red-500/50'
            }`}
            {...register('date', { required: 'Escolher data', valueAsDate: true })}
          />
          {errors.date && <FormErrorMessage errorMessage={errors.date.message} className={'-bottom-6'} />}
        </div>
        <Button className={'mt-4'} type="submit">
          Enviar
        </Button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ServiceForm;
