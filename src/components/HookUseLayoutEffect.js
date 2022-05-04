import { useEffect, useLayoutEffect, useState } from "react";

export const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("mudou de nome");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("nome ainda nao mudou");
  }, []);

  console.log(name);
  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>{name}</p>
      <hr />
    </div>
  );
};
