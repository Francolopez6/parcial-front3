import React, { useState } from 'react';
import Formulario from './Formulario';
import Card from './Card';

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div>
      <Formulario onSubmit={handleSubmit} />
      {submittedData && <Card {...submittedData} />}
    </div>
  );
};

export default App;
