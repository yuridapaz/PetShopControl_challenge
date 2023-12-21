import React, { useEffect } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { GoAlert } from 'react-icons/go';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../components';
import ModalComponent from '../../components/Modal';
import { PetShopContext } from '../../context/PetShopContext';
import { DataContextType, DataType, ServiceDataType } from '../../context/type';
import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';
import SkeletonPetInfoPage from './Skeleton';
import { PetInfoParams } from './types';
import PetInfoErrorPage from '../ErrorPage/PetInfoErrorPage';

const PetInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<PetInfoParams>();
  const { getPet, deleteService, addService } = React.useContext(PetShopContext) as DataContextType;
  const [currentPet, setCurrentPet] = React.useState<DataType | undefined>();
  const [currentPetService, setCurrentPetService] = React.useState<ServiceDataType>();
  const [formModal, setFormModal] = React.useState<boolean>(false);
  const [alertModal, setAlertModal] = React.useState<boolean>(false);

  useEffect(() => {

    setTimeout(() => {
      const fetchPetData = async () => {
        try {
          // REVIEW:
          const petData: any = await getPet(id!);
          setCurrentPet(petData);
        } catch {
          navigate('/pets/petNotFound');
        }
      };
      fetchPetData();
    }, 500);

  }, []);

  // handle AddService (STATE)
  const appendService = (serviceData: ServiceDataType) => {
    currentPet?.services.push(serviceData);
  };
  // handle RemoveService (STATE)
  const removeService = (serviceId: string) => {
    let newServiceArray = currentPet?.services.filter((service: ServiceDataType) => service.serviceId != serviceId);

    //REVIEW:
    setCurrentPet((prev: any) => ({
      ...prev,
      services: newServiceArray,
    }));
  };

  // handle RemoveService (Firebase & currentState)
  const handleRemoveService = async (serviceData: ServiceDataType) => {
    try {
      await deleteService(serviceData, serviceData.petId); // firebase - contexto
      removeService(serviceData.serviceId); // local
    } catch (error) {
      alert(error);
    }
    setAlertModal(false);
    setCurrentPetService(undefined);
  };

  const displayAgeFunction = (petTimeStamp: string | number | Date) => {
    let years: number;
    let months: number;
    let days: number;

    let displayPhrase: string = '';
    const diffTime = new Date().valueOf() - new Date(petTimeStamp).valueOf();
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
      displayPhrase = years + (years > 1 ? ' anos ' : ' ano ') + months + ' m';
    }
    return displayPhrase;
  };

  return (
    <>
      <div className=" flex  flex-1 flex-col gap-4  p-2 md:gap-4 md:p-4  lg:gap-6 lg:p-6 ">
        <div className=" flex rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
          <Link onClick={() => navigate(-1)} to={''}>
            <button className="rounded-xl border-2 border-gray-300/50 bg-zinc-100 p-3 text-sm transition-all  ease-in hover:border-gray-500/50 dark:bg-gray-800">
              <AiOutlineLeft />
            </button>
          </Link>
          <p className="m-auto text-lg">Informações</p>
        </div>
        {/* {!currentPet && <SkeletonPetInfoPage />} */}
        {currentPet && (
          <>
            <div className="flex flex-col gap-4 rounded-xl bg-gray-100 p-2 pb-4  @container dark:bg-gray-800 ">
              <div className="relative flex w-full  gap-4">
                <div className="h-28 w-28 rounded-xl">
                  {currentPet?.imageURL ? (
                    <img src={currentPet?.imageURL} alt="" className="h-full w-full rounded-xl object-cover" />
                  ) : (
                    <img
                      src={`/src/assets/images/${currentPet?.type}Avatar.png`}
                      alt=""
                      className="h-full w-full rounded-xl object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h1 className="text-2xl"> {currentPet?.name} </h1>
                  <p className="text-sm text-gray-500"> {currentPet?.race} </p>
                </div>
              </div>
              {/* Informações card */}
              <div className="flex gap-4">
                <div className="w-full rounded-xl bg-green-300/50 px-3 py-2 text-lg leading-6 dark:bg-green-300/90 ">
                  <span className="text-xs text-green-800/60 dark:text-green-800/90">Gênero</span>
                  <p className="text-green-800"> {currentPet?.gender} </p>
                </div>
                <div className=" w-full  rounded-xl bg-orange-300/50 px-3 py-2 text-lg leading-6 dark:bg-orange-300/90">
                  <span className="text-xs text-orange-800/60 dark:text-orange-800/90">Idade</span>
                  <p className="whitespace-nowrap text-orange-800 dark:text-orange-900">
                    {displayAgeFunction(currentPet?.birthdate)}
                  </p>
                </div>
                <div className="w-full rounded-xl bg-cyan-300/50 px-3 py-2 text-lg  leading-6 dark:bg-cyan-300/90">
                  <span className="text-xs text-cyan-800/60 dark:text-cyan-800/90">Peso</span>
                  <p className="text-cyan-800 dark:text-cyan-900">{currentPet?.weight} kg</p>
                </div>
                <div className="hidden w-full rounded-xl bg-yellow-400/50 px-3 py-2 text-lg leading-6  @md:block dark:bg-yellow-300/80">
                  <span className="text-xs text-yellow-800/60 dark:text-yellow-800/90">Tamanho</span>
                  <p className="text-yellow-800 dark:text-yellow-900">{currentPet?.size}</p>
                </div>
              </div>
              {/* observações */}
              {!!currentPet?.notes?.length && (
                <div className=" max-h-32 overflow-auto border-t border-gray-300 p-2 dark:border-gray-300/20">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Observações importantes:</span>
                  {currentPet?.notes?.map((obs: string, i: number) => {
                    return (
                      <p className="pr-4 text-sm text-gray-700 dark:text-gray-200" key={i}>
                        {i + 1}. {obs}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            {/* Services List Card  */}
            {!!currentPet?.services?.length && (
              <div className="mb-6 flex flex-col rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
                <div>
                  <p className="p-2 pb-3"> Serviços prestados: </p>
                  <div className="flex max-h-[420px] flex-col gap-1 overflow-auto rounded-lg bg-slate-200 p-1 dark:bg-gray-700">
                    {currentPet?.services?.map((service: ServiceDataType, i: number) => {
                      return (
                        <ServiceCard
                          service={service}
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
            <div className="mb-2 mt-auto flex  w-full gap-4 px-0 md:mb-0">
              <Button size={'md'} className={'w-full'} onClick={() => setFormModal(true)}>
                Adicionar Serviço
              </Button>
              <Link to={`/pets/${id}/edit`} className="w-full">
                <Button size={'md'} className={'w-full'}>
                  Editar Informações
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Service Modal */}
      <ModalComponent displayModal={formModal} setModal={setFormModal} modalTitle={'Adicionar serviço'}>
        {currentPet && (
          <ServiceForm petId={id} setModal={setFormModal} appendService={appendService} addService={addService} />
        )}
      </ModalComponent>
      {/* Edit Information Modal */}
      <ModalComponent displayModal={alertModal} setModal={setAlertModal} modalTitle={'Remover Serviço'}>
        <div className="flex w-full flex-col items-center justify-center gap-3 p-4">
          <GoAlert className="text-7xl" fill="#F05252" />
          <h1 className="my-4 text-3xl">Tem certeza ?</h1>
          <p className="text-slate-700/70">Se eliminar não voltará e ver esse conteúdo !</p>
        </div>
        <div className="flex w-full justify-center p-4">
          <Button onClick={() => handleRemoveService(currentPetService!)} className={'w-2/6'} variant={'delete'}>
            Deletar
          </Button>
        </div>
      </ModalComponent>
    </>
  );
};

export default PetInfoPage;
