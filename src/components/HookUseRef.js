import { useEffect, useRef, useState } from "react";

export const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
   numberRef.current = numberRef.current +1
  });
  return (
    <div>
      <h2>useRef</h2>
      <p>o componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter 1 : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2 : {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
    </div>
  );
};
