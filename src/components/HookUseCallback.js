import { useCallback, useState } from "react";
import { List } from "./List";
export const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  },[]);
  return (
    <div>
      <h1>UseCallback</h1>
      <List getItems={getItemFromDatabase} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <hr />
    </div>
  );
};
