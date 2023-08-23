import { useContext, useState } from "react";

import { Button } from "../../components";
import { PetShopContext } from "../../context/PetShopContext";

const ServiceCard = ({ servico, removeService }) => {
  const { deleteService } = useContext(PetShopContext);
  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const deleteHandler = async () => {
    try {
      await deleteService(servico, servico.petId);
      removeService(servico.serviceId);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className={`w-full rounded-lg bg-slate-100  hover:outline hover:outline-offset-0 hover:outline-slate-400 dark:bg-gray-800 transition-all  group ${
        active ? "is-active" : ""
      } `}
    >
      <div className="flex items-center py-2 px-3 hover:cursor-pointer" onClick={toggleAccordion}>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300"> {servico.data} </p>
        <p className="ml-4 text-sm group-[.is-active]:font-bold"> {active ? "" : servico.tipo} </p>
        <p className="ml-auto group-[.is-active]:rotate-180 transition-all">
          {active ? "--" : "+"}
        </p>
      </div>
      <div className="overflow-hidden flex justify-between h-0 group-[.is-active]:h-full bg-slate-300  py-0 px-7 rounded-b-lg">
        <div>
          <div className="flex flex-col my-2">
            <span className="text-xs font-bold"> Serviço: </span>
            <p className=""> {servico.tipo} </p>
          </div>
          <div className="flex flex-col my-2">
            <span className="text-xs font-bold"> Valor: </span>
            <p className=""> R$ {servico.valor.toFixed(2)} </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col my-2">
            <span className="text-xs font-bold text-end"> Data: </span>
            <p className="text-end"> {servico.data} </p>
          </div>
          <div className="flex flex-col my-2 mt-3 ">
            <Button variant={"delete"} className={"mt-auto w-28"} onClick={deleteHandler}>
              Deletar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
