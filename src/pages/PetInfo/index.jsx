import { useContext, useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Button, SelectInput } from "../../components";
import ModalComponent from "../../components/Modal";
import { PetShopContext } from "../../context/PetShopContext";
import ServiceCard from "./ServiceCard";

const PetInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getPet } = useContext(PetShopContext);
  const [currentPet, setCurrentPet] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPetData = async () => {
      const petData = await getPet(id);
      setCurrentPet(petData);
    };
    fetchPetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="mt-2 flex flex-1 flex-col p-2 pb-6">
        {/* Top nav */}
        <div className="mb-3 flex rounded-xl bg-gray-100 p-2   dark:bg-gray-800">
          <Link onClick={() => navigate(-1)}>
            <button className="rounded-xl border-2 border-gray-300/50 bg-zinc-100 p-3 text-sm transition-all  ease-in hover:border-gray-500/50 dark:bg-gray-800">
              <AiOutlineLeft />
            </button>
          </Link>
          <p className="m-auto text-lg">Informações</p>
        </div>
        {currentPet && (
          <>
            {/* Info Card  */}
            <div className="mb-3 flex flex-col gap-4 rounded-xl bg-gray-100 p-2 pb-4 dark:bg-gray-800">
              <div className="flex w-full gap-4 ">
                {/* Foto e Nome */}
                <div className="h-28 w-28">
                  <img
                    src="/src/assets/images/Todd.jpeg"
                    alt=""
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h1 className="text-2xl"> {currentPet?.nome} </h1>
                  <p className="text-sm text-gray-500"> {currentPet?.raca} </p>
                </div>
              </div>
              {/* Informações card */}
              <div className="flex gap-6">
                <div className="w-full rounded-xl bg-green-300/50 px-3 py-2 text-lg leading-6 dark:bg-green-300/90">
                  <span className="text-xs text-green-800/60 dark:text-green-800/90"> Gênero </span>
                  <p className="text-green-800"> {currentPet?.genero} </p>
                </div>
                <div className="w-full rounded-xl bg-orange-300/50 px-3 py-2 text-lg  leading-6 dark:bg-orange-300/90">
                  <span className="text-xs text-orange-800/60 dark:text-orange-800/90">
                    {" "}
                    Idade{" "}
                  </span>
                  <p className="text-orange-800 dark:text-orange-900">
                    {`${currentPet?.idade} ano${currentPet?.idade > 1 ? "s" : ""}`}
                  </p>
                </div>
                <div className="w-full rounded-xl bg-cyan-300/50 px-3 py-2 text-lg  leading-6 dark:bg-cyan-300/90">
                  <span className="text-xs text-cyan-800/60 dark:text-cyan-800/90"> Peso </span>
                  <p className="text-cyan-800 dark:text-cyan-900"> {currentPet?.peso} kg </p>
                </div>
              </div>
              {/* observações */}

              {!!currentPet?.observacoes?.length && (
                <div className=" max-h-32 overflow-auto border-t border-gray-300 p-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Observações importantes:
                  </span>
                  {currentPet?.observacoes?.map((obs, i) => {
                    return (
                      <p
                        className="text-gray-70 pr-4  text-sm leading-4 dark:text-gray-200"
                        key={i}
                      >
                        {i}. {obs}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            {/* Services List Card  */}
            {!!currentPet?.servicos?.length && (
              <div className="mb-6 flex flex-col rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
                <div>
                  <p className="pb-2"> Serviços prestados: </p>
                  <div className="flex max-h-[420px] flex-col gap-1 overflow-auto rounded-lg bg-slate-200 p-1 dark:bg-gray-700">
                    {/* Services container card */}
                    {currentPet?.servicos?.map((servico, i) => {
                      return <ServiceCard servico={servico} key={i} />;
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Buttons section */}
            <div className="mt-auto  flex w-full gap-4 px-0">
              {/* <Link to={`/pets/${id}/servico`} state={{ id }} className="w-full"> */}
              <Button size={"md"} variant={""} className={"w-full"} onClick={openModal}>
                Adicionar Serviço
              </Button>
              {/* </Link> */}
              <Link to={`/pets/${id}/servico`} state={{ id }} className="w-full">
                <Button size={"md"} variant={"delete"} className={"w-full"}>
                  Editar Informações
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
      {/* Modal */}
      <ModalComponent
        showModal={showModal}
        closeModal={closeModal}
        modalTitle={"Adicionar serviço"}
      >
        {/* <div className="flex flex-1 p-8 w-full flex-col gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="servico">Escolher serviço</label>
            <SelectInput values={["Banho", "Tosa", "Teste"]} id={"servico"} fullWidth />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="servico">Escolher serviço</label>
            <SelectInput values={["Banho", "Tosa", "Teste"]} id={"servico"} fullWidth />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="servico">Escolher serviço</label>
            <SelectInput values={["Banho", "Tosa", "Teste"]} id={"servico"} fullWidth />
          </div>
        </div> */}
      </ModalComponent>
    </>
  );
};

export default PetInfoPage;
