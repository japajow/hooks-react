import { useEffect, useState } from "react";

export const HookUseEffect = () => {
  //useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo utilizado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number : {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <hr />
    </div>
  );
};
