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

  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0)
      console.log("Executado apenas quando anotherNumber for alterado");
  }, [anotherNumber]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("Hello world");
  //     //setAnotherNumber(anotherNumber + 1);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [anotherNumber]);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number : {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <h2>Another Number</h2>
      <p>AnotherNumber: {anotherNumber}</p>
      <button
        onClick={() => {
          setAnotherNumber(anotherNumber + 1);
        }}
      >
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  );
};
