import { useState } from "react";

import { Button } from "../../components";

const ServiceCard = ({ servico }) => {
  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div
      className={`w-full rounded-lg bg-slate-100 hover:cursor-pointer hover:outline hover:outline-offset-0 hover:outline-slate-400 dark:bg-gray-800 transition-all  group ${
        active ? "is-active" : ""
      } `}
    >
      <div className="flex items-center py-2 px-3" onClick={toggleAccordion}>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300"> 14/04/1991 </p>
        <p className="ml-4 text-sm group-[.is-active]:font-bold"> {active ? "" : "servico"} </p>
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
            <Button variant={"delete"} className={"mt-auto w-28"}>
              Deletar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

// <div
//   key={i}
//   className="flex w-full rounded-lg bg-slate-100 px-3 py-1 hover:cursor-pointer hover:outline hover:outline-offset-0 hover:outline-slate-400 dark:bg-gray-800"
// >
//   <div className="">
//     <span className="text-xs font-semibold text-gray-500 dark:text-gray-300">
//       {servico.data}
//     </span>
//     <p className=""> {servico.tipo} </p>
//   </div>
//   <div className="ml-auto self-center ">
//     <p className="font-semibold text-green-700/80 dark:text-green-400/90">
//       <span className="mr-1 text-sm ">R$:</span>
//       {servico.valor.toFixed(2)}
//     </p>
//   </div>
//   <div className="ml-4 self-center">
//     <Button variant={"delete"} onClick={() => alert()}>
//       <RiDeleteBin6Line />
//     </Button>
//   </div>
// </div>
