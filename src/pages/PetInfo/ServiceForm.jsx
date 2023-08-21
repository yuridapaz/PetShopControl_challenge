import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { Button, NumberInput, SelectInput } from "../../components";
import { PetShopContext } from "../../context/PetShopContext";

const ServiceFormPage = () => {
  const { state } = useLocation();
  const { addService } = useContext(PetShopContext);

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { error, touchedFields },
  } = useForm({ mode: "onChange" });

  const onSubmit = (formData) => {
    const serviceData = {
      tipo: formData.tipo,
      valor: formData.valor,
      dataCompleta: formData.data,
      data: formData.data.toLocaleDateString("en-GB"),
      hora: formData.data.toLocaleTimeString("en-GB"),
    };
    addService(serviceData, state.id);
  };

  return (
    <div className="flex h-full flex-1">
      <form className="container mt-10 flex flex-col p-4 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-2 p-2">
          <label htmlFor="">Serviço:</label>
          <SelectInput values={["Tosa", "Vacina", "Remédio"]} register={{ ...register("tipo") }} />
        </div>
        <div className="flex items-center">
          <div className="flex w-full flex-col gap-2 p-2">
            <label htmlFor="">Valor:</label>
            <NumberInput step={0.01} register={{ ...register("valor", { valueAsNumber: true }) }} />
          </div>
          <div className="flex w-full flex-col gap-2  p-2">
            <label htmlFor="">Data:</label>
            <input
              type="datetime-local"
              className="rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50"
              {...register("data", { valueAsDate: true })}
            />
          </div>
        </div>
        <Button className={"mt-auto"}>Enviar</Button>
      </form>
    </div>
  );
};

export default ServiceFormPage;
