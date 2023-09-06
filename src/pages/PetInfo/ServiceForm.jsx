import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Button, NumberInput, SelectInput } from '../../components';
import { PetShopContext } from '../../context/PetShopContext';

const ServiceForm = ({ petId, setModal, appendService }) => {
  const { addService } = useContext(PetShopContext);
  const { register, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = async (formData) => {
    const serviceData = {
      tipo: formData.tipo,
      valor: formData.valor,
      data: formData.data.toLocaleDateString('en-GB'),
      hora: formData.data.toLocaleTimeString('en-GB'),
      serviceId: formData.data.valueOf() + petId,
      petId: petId,
    };

    try {
      await addService(serviceData, petId);
      appendService(serviceData);
      setModal(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex h-full flex-1">
      <form
        className="container  flex flex-col gap-6  p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-1 ">
          <label htmlFor="">Serviço:</label>
          <SelectInput
            values={['Tosa', 'Vacina', 'Remédio']}
            register={{ ...register('tipo') }}
          />
        </div>

        <div className="flex w-full flex-col gap-1 ">
          <label htmlFor="">Valor:</label>
          <NumberInput
            step={0.01}
            register={{ ...register('valor', { valueAsNumber: true }) }}
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="data">Data:</label>
          <input
            type="datetime-local"
            id="data"
            name="data"
            max={new Date().toISOString().slice(0, -8)}
            className="rounded-md border border-gray-300 bg-gray-50 px-3  py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50"
            {...register('data', { required: true, valueAsDate: true })}
          />
        </div>
        <Button className={'mt-4'}>Enviar</Button>
      </form>
    </div>
  );
};

export default ServiceForm;
