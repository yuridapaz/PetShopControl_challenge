const Display = ({ children }) => {
  return (
    <div className='flex w-full flex-col bg-slate-200'>
      <div className='flex items-center border-b  border-b-slate-400 p-6'>
        <input type='text' placeholder='Pesquisar' />
        <select name='tipo' id='tipo'>
          <option value='selecionar' disabled>
            Tipo
          </option>
          <option value='cachorro'>Cachorro</option>
          <option value='gato'>Gato</option>
          <option value='passaro'>Pássaro</option>
          <option value='outro'>Outro</option>
        </select>
        <select name='tamanho' id='tamanho'>
          <option value='selecionar' disabled>
            Tamanho
          </option>
          <option value='pequeno'>Pequeno</option>
          <option value='medio'>Médio</option>
          <option value='grande'>Grande</option>
        </select>
      </div>
      <div className='flex w-full p-8'>{children}</div>
    </div>
  );
};

export default Display;
