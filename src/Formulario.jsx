import React, { useState } from 'react';
import Card from './Card';

const Formulario = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({ input1: '', input2: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleValidation = () => {
    const { input1, input2 } = formValues;

    if (input1.trim().length < 3 || input1.trim().startsWith(' ') || input2.length < 6) {
      setError('Por favor, chequea que la información sea correcta');
      return false;
    }

    setError('');
    return true;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (handleValidation()) {
          onSubmit(formValues);
        }
      }}
    >
      <div>
        <label>
          Input 1:
          <input type="text" name="input1" value={formValues.input1} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Input 2:
          <input type="text" name="input2" value={formValues.input2} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Enviar</button>

      {error && <p>{error}</p>}
    </form>
  );
};

export default Formulario;