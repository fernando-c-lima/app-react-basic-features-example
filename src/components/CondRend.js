import { useState } from "react";

const CondRend = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Pedro");

  return (
    <div>
      <h1>Isso será exibido??</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora o x é falso!</p>}

      <h1>IF Ternário </h1>
      {name === "João" ? (
        <div>
          <p>O nome é João!</p>
        </div>
      ) : (
        <div>
          <p>O nome não é encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clica aqui</button>
    </div>
  );
};

export default CondRend;
