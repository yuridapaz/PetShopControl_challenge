import SelectInput from '../components/SelectInput';

const DisplayPage = () => {
  return (
    <div className='pt-4'>
      {/* Input's  */}
      <div>
        {/* Text Input + Order Filter */}
        <div>
          <div>
            <input type='text' />
          </div>
          <SelectInput
            defaultValue={'ordenar'}
            labelName={'Ordenar'}
            values={['A-Z', 'Z-A', 'Pequeno-Grande', 'Grande-Pequeno']}
          />
          {/* <div>
            <label htmlFor='ordenar'></label>
            <select name='ordenar'>
              <option value='a-z'>A-Z</option>
              <option value='z-a'>Z-A</option>
              <option value='size-up'>Micro-Grande</option>
              <option value='size-down'>Grande-Micro</option>
            </select>
          </div> */}
        </div>
      </div>
      {/* Select's  */}
      <div>
        <SelectInput
          defaultValue={'tipo'}
          labelName={'Tipo'}
          values={['Cachorro', 'Gato', 'Pássaro']}
        />
        <SelectInput
          defaultValue={'raça'}
          labelName={'Raça'}
          values={['Schnauzer', 'SRD', 'Outro']}
        />
        <SelectInput
          defaultValue={'porte'}
          labelName={'Porte'}
          values={['Micro', 'Pequeno', 'Médio', 'Grande']}
        />
      </div>
      {/* Display Cards Grid */}
      <div></div>
    </div>
  );
};

export default DisplayPage;
