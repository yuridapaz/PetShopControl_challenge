import { useContext, useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { GoAlert } from 'react-icons/go';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../components';
import ModalComponent from '../../components/Modal';
import { PetShopContext } from '../../context/PetShopContext';
import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';

const PetInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getPet, deleteService } = useContext(PetShopContext);
  const [currentPet, setCurrentPet] = useState(null);
  const [currentPetService, setCurrentPetService] = useState(null);
  const [formModal, setFormModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  useEffect(() => {
    const fetchPetData = async () => {
      const petData = await getPet(id);
      setCurrentPet(petData);
    };
    fetchPetData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle AddService (STATE)
  const appendService = (serviceData) => {
    currentPet.servicos.push(serviceData);
  };
  // handle RemoveService (STATE)
  const removeService = (serviceId) => {
    let newServiceArray = currentPet.servicos.filter(
      (servico) => servico.serviceId != serviceId
    );
    setCurrentPet((prev) => ({
      ...prev,
      servicos: newServiceArray,
    }));
  };

  // handle RemoveService (Firebase & currentState)
  const handleRemoveService = async (serviceData) => {
    try {
      await deleteService(serviceData, serviceData.petId);
      removeService(serviceData.serviceId);
    } catch (error) {
      alert(error);
    }

    setAlertModal(false);
    setCurrentPetService(null);
  };

  const displayAgeFunction = (petTimeStamp) => {
    let [years, months, days] = '';
    let displayPhrase = '';
    const diffTime = new Date() - new Date(petTimeStamp);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    years = Math.floor(totalDays / 365.25);
    months = Math.floor((totalDays % 365.25) / 30.4375);
    days = Math.floor((totalDays % 365.25) % 30.4375);

    if (isNaN(years) || isNaN(months)) {
      displayPhrase = '-';
    } else if (years === 0 && months === 0) {
      displayPhrase = days + ' dias.';
    } else if (years === 0) {
      displayPhrase = months + (months > 1 ? ' meses.' : ' mês.');
    } else if (years > 0 && months === 0) {
      displayPhrase = years + (years > 0 ? ' anos.' : ' ano.');
    } else {
      displayPhrase = years + (years > 1 ? ' anos e' : ' ano e ') + months + 'm';
    }
    return displayPhrase;
  };

  return (
    <>
      <div className="mt-2 flex flex-1 flex-col p-2 pb-6">
        {/* Top nav */}
        <div className="mb-3 flex rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
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
            <div className="mb-3 flex flex-col gap-4 rounded-xl bg-gray-100 p-2  pb-4 dark:bg-gray-800">
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
              <div className="flex gap-4">
                <div className="w-1/3 rounded-xl bg-green-300/50 px-3 py-2 text-lg leading-6 dark:bg-green-300/90 ">
                  <span className="text-xs text-green-800/60 dark:text-green-800/90">
                    Gênero
                  </span>
                  <p className="text-green-800"> {currentPet?.genero} </p>
                </div>
                <div className=" w-1/3  rounded-xl bg-orange-300/50 px-3 py-2 text-lg leading-6 dark:bg-orange-300/90">
                  <span className="text-xs text-orange-800/60 dark:text-orange-800/90">
                    Idade
                  </span>
                  <p className="whitespace-nowrap text-orange-800 dark:text-orange-900">
                    {displayAgeFunction(currentPet?.nascimento)}
                  </p>
                </div>
                <div className="w-1/3 rounded-xl bg-cyan-300/50 px-3 py-2 text-lg  leading-6 dark:bg-cyan-300/90">
                  <span className="text-xs text-cyan-800/60 dark:text-cyan-800/90">
                    Peso
                  </span>
                  <p className="text-cyan-800 dark:text-cyan-900">
                    {currentPet?.peso} kg
                  </p>
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
                        className="pr-4 text-sm leading-4 text-gray-700 dark:text-gray-200"
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
                    {/* Verificar depois !!! */}
                    {currentPet?.servicos?.toReversed()?.map((servico, i) => {
                      return (
                        <ServiceCard
                          servico={servico}
                          petId={id}
                          key={i}
                          setService={setCurrentPetService}
                          setModal={setAlertModal}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Buttons section */}
            <div className="mt-auto  flex w-full gap-4 px-0">
              <Button
                size={'md'}
                variant={''}
                className={'w-full'}
                onClick={() => setFormModal(true)}
              >
                Adicionar Serviço
              </Button>
              <Link to={`/pets/${id}/servico`} state={{ id }} className="w-full">
                <Button size={'md'} variant={'delete'} className={'w-full'}>
                  Editar Informações
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
      {/* Modal */}
      <ModalComponent
        displayModal={formModal}
        setModal={setFormModal}
        modalTitle={'Adicionar serviço'}
      >
        {currentPet && (
          <ServiceForm petId={id} setModal={setFormModal} appendService={appendService} />
        )}
      </ModalComponent>
      {/* Modal two */}
      <ModalComponent
        displayModal={alertModal}
        setModal={setAlertModal}
        modalTitle={'Remover Serviço'}
      >
        <div className="flex w-full flex-col items-center justify-center gap-3 p-4">
          <GoAlert className="text-7xl" fill="#F05252" />
          <h1 className="my-4 text-3xl">Tem certeza ?</h1>
          <p className="text-slate-700/70">
            Se eliminar não voltará e ver esse conteúdo !
          </p>
        </div>
        <div className="flex w-full justify-center p-4">
          <Button
            onClick={() => handleRemoveService(currentPetService)}
            className={'w-2/6'}
            variant={'delete'}
          >
            Deletar
          </Button>
        </div>
      </ModalComponent>
    </>
  );
};

export default PetInfoPage;
