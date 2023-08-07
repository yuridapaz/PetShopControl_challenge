import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterConfirmationPage = () => {
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/pets');
    }, 3000);

    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [countdown, navigate]);

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4 p-6'>
      <h1 className='text-center text-4xl'>Cadastro concluído com sucesso!</h1>
      <h3>Redirecionando {countdown} </h3>
    </div>
  );
};

export default RegisterConfirmationPage;
