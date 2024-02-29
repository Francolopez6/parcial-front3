import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div style={{ border: '30px', padding: '15px', marginTop: '50px' }}>
      <h2>Cumple funcion</h2>
      <p>Input 1: {input1}</p>
      <p>Input 2: {input2}</p>
    </div>
  );
};

export default Card;