import React from "react";
import { useState } from "react";

const ManageData = () => {
  let num = 10;

  console.log(num);

  const [number, setNumber] = useState(15);

  return (
    <>
      <div>
        <p>Valor: {num}</p>
        <button onClick={() => (num = 15)}>Aumentar</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button
          onClick={() => {
            setNumber(35);
          }}
        >
          Mudar o State
        </button>
      </div>
    </>
  );
};

export default ManageData;
