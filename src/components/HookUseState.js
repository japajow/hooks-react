import React, { useState } from "react";

export const HookUseState = () => {
  //variavel
  let userName = "bruno";
  // useState
  const [name, setName] = useState("matheus");

  const changeName = () => {
    userName = "Bruno Hamawaki";

    setName("Matheus Battisti");
  };

  return (
    <div>
      <h2>useState</h2>

      <p>Variavel : {userName}</p>
      <p>useState : {name}</p>
      <button onClick={changeName}>Mudar de Nome</button>
      <hr />
    </div>
  );
};
