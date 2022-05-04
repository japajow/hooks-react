import { useState, useEffect } from "react";

export const List = ({ getItems }) => {
  const [myItems, setMyItens] = useState([]);
  useEffect(() => {
    console.log("buscando itens do db...");
    setMyItens(getItems);
  }, [getItems]);
  return <>{myItems && myItems.map((item, i) => <li key={i}>{item}</li>)}</>;
};
