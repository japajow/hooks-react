## Hooks do React

> useState

- O useState e um dos procipais hooks do React
- O principal proposito e gerenciar valores
- Podemos consultar um valor e alterar
- Isso nos permite re-renderizar um componente, o que nao acontece com a manipulacao de variaveis

instalando o npm i react-router-dom

importamos o BrowserRouter,Roues,Route

```tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

Criamos 2 paginas
pages/Home.js pages/About.js

Configuramos as rotas no App.js

```tsx
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <h1>React Hooks</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

Criamos o navbar e estilizamos

apos ter feito o navbar vamos criar uma pasta chamada components e colocar os nossos Hooks dentro dele

components/HookUseState.js

```tsx
//criando as variaveis e o estado
let variableName = "bruno";
const [name, setName] = useState("Pedro");

//criamos a funcao que ira mudar o nome
const handleChangeName = () => {
  variableName = "bruno hamawaki";
  setName("Pedro Kiyomi");
};

// setamos no HTML as variaveis
{
  variableName;
}
{
  name;
}

//criamos o botao que ira receber a funcao click para modificar o nome
<button onClick={handleChangeName}>Click</button>;
```

## useState e inputs

- Alterando o useState a um iput podemos fazer algumas acoes
- Alteracao de um state por evento de onChange
- Limpeza de inputs Controlled input
- Apos preenchimento total do form unir os states e fazer um envio dos dados para o backend

Criamos a variavel estado
Criamos a funcao handleSubimit
Criamos um formulario que recebar os valores com input e mostre

```tsx
 //   usestate com input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    };

     /* useState com Inputs */
      <h2>useState com Inputs</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
      <p>Voce tem {age} anos!</p>
      <hr />

```

## useReducer

- O useReducer tem a mesma funcao que o useState, ele gerencia valores
- Porem temos a possibilidade de executar uma funcao na hora da alteracao do valor
- Entao temos que o useReducer recebe um valor para gerenciar e uma funcao para alterar este valor

Criamos o hook novo HookUseReducer.js

Criar a variavel atribuida com valores no useReducer

```tsx

 const [number, dispacth] = useReducer((state,action) => {
     return Math.random(state)
 })

// Criamos um boato que ira receber a funcao dispatch  e ao clicar muda o number
<button onClick={dispatch}>Clique aqui</button>


//Finalizando assim

import React, { useReducer } from "react";

export const HookUseReducer = () => {
  const funcReducer = (state, action) => {
    return Math.random(state);
  };

  const [number, dispatch] = useReducer(funcReducer);
  return (
    <div>
      <h2>useReducer</h2>
      <p>Numero : {number}</p>
      <button onClick={dispatch}>View Number</button>
      <hr />
    </div>
  );
};
```

## Usando o useReducer utilizando a actions

- Se o useReducer fosse utilizado como no exemplo passado, nao teria tanta diferenca do useState
- Por isso o reducer geralmente contem operacoes mais complexas ,utilizando a estrutura switch com actions
- Esta situacao foi apresentada na secao de Context API

Continuando no HookUseReducer.js

```tsx
//criamos um dado inicial

const initialTasks = [
  { id: 1, text: "Fazer  alguma coisa" },
  { id: 2, text: "Fazer outra coisa" },
];

// criamos uma funcao que recebe o state e action como parametro
const taskReducer = (state,action) => {

}
// criamos o estado do task
const [taskText, setTaskText] = useState('')
// E fazemos a declaracao do reducer
const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

//no HTML comlocamos uma separacao
<h3>Tarefas:</h3>
{tasks.map(task=>{
   return <li key={task.id}>{task.text}</li>
})}

// Vamos usar o useState que vai representar o estado de cada tarefa
import {useState} from 'react'



// criamos o formulario
<form onSubmit={handleSubmit}>
    <input type="text" onChange={(e)=> setTaskText(e.target.value)} value={taskText}/>
    <input type="submit" value="Enviar" />
</form>

//criamos a funcao handleSubmit

const handleSubmit = (e)=>{
    e.preventDefault()

    //Vamos utilizar a funcao dispatchTask() e criar as acoes primeiro nela , para conseguir dispachar um determinado valor por ela
    dispatchTask()
}

// vamos preencher as acoes

const taskReducer = (state,action) => {

    switch(action.type){
        case "ADD":
           //vai gerar im novo id
           const newTask = {
               id: Math.ramdom(),
               text: taskText
           }
           // Com a id gerada , zeramos a taskText, para que o input fique em branco para adicionar uma proxima tarefa
           setTaskText("")
            //passamos o estado antigo junto com estado novo
           return [...state, newTask]
cd
            //normalmente temo mais cases
            case "DELETE":
                return state.filter((tesk) => tesk.id !== action.id)
                default:
                    return state;
    }
}

// agora invocamos no dispatchTask o tipo
dispatchTask( {type:"ADD"})

//Agora criamos um button em cada li passando o id
  <li key={task.id}>{task.text}  <button onClick={()=>{deleteTask(task.id)}}>Deletar</button></li>

// criamos a funcao de deletar deleteTask com parametro que recebe o id
const deleteTask = (id) =>{
    //passamos o type DELETE e o id para useReducer pegar  o action
      dispatchTasks({type: "DELETE",id})
  }
```

## UseEffect qual seu uso e como usar

- O useEffect e utilizado para varias acoes no nosso App, junto com useState e um dos hooks mais utilizados
- Podemos realizar desde alterações na DOM a requisições HTTP
- E o grande motivo é conseguimos controlar quantas vezes algo acontece
- A sintaxe é formada por uma função a ser executada e um array de dependências

Criamos o arquivo componentes/HookUseEffect.js
Chamamos ele no nosso Home.js

```tsx
//criamos o componente e chamamos o useEffect importando ele
useEffect(() => {
  console.log("sendo executado");
});
```

Importamos o useState()

```tsx
const [number, setNumber] = useState(1);

//Criamos uma funcao para setar o number
const changeSomething = () => {
  setNumber(number + 1);
};

// criamos um p e um button
<div>
  <h2>UseEffect</h2>
  <p>Number : {number}</p>
  <button onClick={changeSomething}>Executar</button>
  <hr />
</div>;
```

**Sempre o componente renderizar o useEffect e disparado**

## useEffect com array vazio

- Uma estratégia interessante para algumas situações é utilizar o useEffect apenas uma vez
- Para isso apenas precisamos deixar o array de dependências vazio
- Ap renderizar o componente a lógica será executada

Criamos um useEffect novo

```tsx
useEffect(() => {
  console.log("Serei executado apenas uma vez");
}, []);
```

## Agora utilizando array dependências do useEffect

' Outra maneira de controlar quando o useEffect será executado é colocando algum item no array de dependências
' Assim sempre que o item for alterado, teremos o useEffect sendo executado novamente
' Nos fornecendo um maior controle de quando a função deve ser ou não ser executada

Criamos um novo useState

```tsx
const [anotherNumber, setAnotherNumber] = useState(0);
//criamos um novo useEffect com array dependências
useEffect(() => {
  console.log("executado apenas quando o anotherNumber for alterado ")
}, [anotherNumber]);

//criamos o button e o paragrafo que mostra o anotherNumber
<p>AnotherNumber: {anotherNumber}</p>
<button
  onClick={() => {
    setAnotherNumber(anotherNumber + 1);
  }}
>
  Mudar anotherNumber
</button>
```

## Limpeza do useEffect

- Alguns efeitos precisam ter uma técnica de cleanup para garantir o seu funcionamento
- Não fazer isso pode gerar erros ou comportamentos indesejados.
- exemplo: um timeout que ao mudar de página pode continuar a ser executado, pela falta desta limpeza

Criando um novo useEffect

```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Hello world");
  }, 2000);
}, [anotherNumber]);

//assim ele vai ficar chamando sempre que mudarmos de pagina
//para isso nao acontecer criamos o cleanup
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Hello world");
    setAnotherNumber(anotherNumber + 1);
  }, 2000);

  return () => clearTimeout(timer);
}, [anotherNumber]);
```

## useContext

- O useContext é o hook utilizado para consumir um contexto, da Context API
- Vamos precisar criar o contexto e também o Provider
- Envolvendo os componentes que receberão os valores compartilhados
- E então fazer o uso do hook onde quiser e for necessário

Criando um novo components/HookUseContext.js

```tsx
import { createContext } from "react";

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = "texting context";
  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};
```

Agora vamos no nosso App.js envolvemos ele em todo nosso projeto para ser utilizado

```tsx

  <div className="App">
    <HookUseContext>
      <h1>React Hooks</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </HookUseContext>

```

Vamos no Home.js e usar o contexto

```tsx
//chamamos o nosso useContext passando o SomeContext
const { contextValue } = useContext(SomeContext);
//utilizamos no corpo do Home.js o contexto
 <h2>UseContext</h2>
 <p>{contextValue}</p>
```

Vamos usar também no About.js

```tsx
export const About = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>About</h1>
      <h2>UseContext</h2>
      <p>{contextValue}</p>
    </div>
  );
};
```

## UseRef

- O useRef pode ser utilizado como useState para gerenciar valores
- A diferença é que ele é um objeto,seu valor está ma propriedade current
- Outra particularidade do useRef é que ele não re-renderiza o componente ao ser alterado, sendo interessante em alguns casos.

Criamos im novo componente hook
components;/HookUseRef.js
chamamos ele na Home.js

```tsx
<HookUseRef />
```

Voltamos no nosso HookUseRef.js

```tsx
//criamos uma referencia de valor
const numberRef = useRef(0);

//criando um counter state
const [counter, setCounter] = useState(0);

//criamos um outro counter B state
const [counterB, setCounterB] = useState(0);

//Agora vamos exibir os counters
<div>
  <h2>useRef</h2>
  <p>o componente renderizou: {numberRef.current}</p>
  <p>Counter 1 : {counter}</p>
  <button onClick={() => setCounter(counter + 1)}>Contador A</button>
  <p>Counter 2 : {counterB}</p>
  <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
</div>;

//criamos um useEffect() para alterar o valor do numberRef
useEffect(() => {
  numberRef.current = numberRef.current + 1;
});
```

## useRef e o DOM

- O useRef pode ser utilizado para selecionar elementos do JSX
- Com isso podemos fazer manipulação de DOM ou aplicar funções como a focus, que foca no input
- Este é um outro uso muito interessante para este hook

```tsx
//  Criamos uma variavel com o useRef
const inputRef = useRef();
// criamos um estado para linkar com input
const [text, setText] = useState("");
// Criamos uma funcao submit que ira receber o submit
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputRef);
  setText("");
  inputRef.current.focus();
};

// Criamos o formulario e os imputs para usar o estado e useRef
{
  /* 2 useRef e DOM */
}
<form onSubmit={handleSubmit}>
  <input
    type="text"
    ref={inputRef}
    value={text}
    onChange={(e) => {
      setText(e.target.value);
    }}
  />
  <input type="submit" value={"Enviar"} />
</form>;
```

## useCallback

- O hook de useCallback pode ser utilizado para dias situações
  = Ele basicamente memoriza uma funcao, fazendo ela nao ser reconstruída a cada renderização de um componente
- O primeiro caso e quando estamos prezando pela performance, então queremos que uma funcao muito complexa nao seja reconstruída toda vez
- Ja o segundo e quando o próprio React nos indica que uma funcao deveria estar contida em um useCallback, para evitar problemas de performance

Criando componentes/HookUseCallback.js

```tsx
import { useCallback, useState } from "react";
import { List } from "./List";
export const HookUseCallback = () => {
  return (
    <div>
      <h1>UseCallback</h1>

      <hr />
    </div>
  );
};
```

Criamos um components/List.js

```tsx
import React from "react";

export const List = () => {
  return <div>List</div>;
};
```

No HookUseCallback.js

```tsx
//criamos estado counter

const [counter, setCounter] = useState(0);
//criamos uma funcao que tem os dados
const getItemFromDatabase = () => {
  return ["a", "b", "c"];
};

//chamamos o Lis passando uma propriedade getItems
<List getItems={getItemFromDatabase} />;

//criamos um button
  <p>{counter}</p>
  <button onClick={() => setCounter(counter + 1)}>Alterar</button>
```

No List.js

```tsx
//usamos um estado e o useEffect para quando o getItems mudar ele recupera esse valor e atualiza
import { useState, useEffect } from "react";

export const List = ({ getItems }) => {
  const [myItems, setMyItens] = useState([]);
  useEffect(() => {
    setMyItens(getItems);
  }, [getItems]);
  return <>{myItems && myItems.map((item, i) => <li key={i}>{item}</li>)}</>;
};
```

Sem o uso do callback a cada clique que damos o componente vai ser renderizado novamente

para isso nao acontecer usamos o useCallback na funcao de dados

```tsx
const getItemFromDatabase = useCallback(() => {
  return ["a", "b", "c"];
}, []);
```

## useMemo

- O useMemo pode ser utilizado para garantir a referencia de um objeto
- Fazendo com que algo possa ser alterado a uma referencia e nao a um valor
- Com isso conseguimos condicionar useEffects a uma variável de maneira mais inteligente

Criamos o components/HookUseMemo

```tsx
export const HookUseMemo = () => {
  return <div>HookUseMemo</div>;
};
```

Adicionamos o Hook na Home.js

No HookUseMemo

```tsx
//criamos um estado de números
const [number, setNumber] = useState(0);

//criamos uma variável de array
const premiumNumbers = ["0", "100", "200"];

//criamos um useEffect que mude a cada alteração do premiumNumbers
useEffect(() => {
  console.log("foi alterado o premium Number");
}, [premiumNumbers]);

//agora criamos JSX
return (
  <div>
    <h2>UseMemo</h2>
    <input type="text" onChange={(e) => setNumber(e.target.value)} />
    {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : ""}
    <hr />
  </div>
);
```

Da forma acima a cada alteração pode acontecer de chegar um momento que a memoria vai ficar carregado
para isso nao acontecer usamos o useMemo

```tsx
const premiumNumbers = useMemo(() => {
  return ["0", "100", "200"];
}, []);
```

assim ele nao fica mais re-renderizando novamente a toda vez que usa o input

## useLayoutEffect

- Muito parecido com o useEffect
- A grande diferença e que este hook roda antes de renderizar o componente
- Ou seja, o hook e síncrono, bloqueando o carregamento da pagina para o sucesso da sua funcionalidade
- A ideia e executar algo antes que o usuário veja a pagina

Criando o components/HookUseLayoutEffect.js

```tsx
// criamos o estado nome
const [name, setName] = useState("Algum nome");

//criamos um useEffect

useEffect(() => {
  console.log("2");
  setName("mudou de nome");
}, []);

//criamos o useLayoutEffect

useLayoutEffect(() => {
  console.log("1");
  setName("nome ainda nao mudou");
}, []);

//Criamos o JSX

return (
  <div>
    <h2>UseLayoutEffect</h2>
    <p>{name}</p>
    <hr />
  </div>
);
```

fazendo o console.log() nao importa que o useLayoutEffect esteja em ultimo
ele sempre vai executar primeiro que o useEffect

## useImperativeHandle

- Com o hook useImperativeHandle temos como acionar acoes em um outro componente de forma imperativa
- Como nao podemos passar refs como props, precisamos usar uma funcao fowardRef
- Isso nos permite passar as referencias, e torna o nosso exemplo viável

Criando o components/HookUseImperativeHandle.js
Criamos um components/SomeComponents.js

HookUseImperativeHandle

```tsx
import { SomeComponents } from "./SomeComponents";

//passamos a referencia como propriedade
export const HookUseImperativeHandle = () => {
  const inputRef = useRef();
  return (
    <div>
      <h1>useImperativeHandle</h1>
      <SomeComponents ref={inputRef} />
      <hr />
    </div>
  );
};
```

no SomeComponents.js

```tsx
//recuperamos o ref passado pela propriedade

import { forwardRef } from "react";

export const SomeComponents = forwardRef((props, ref) => {
  const localInputRef = useRef();

  //porem precisamo criar uma funcao para recuperar essa referencia  aqui usamos o useImperativeHandle

  return <div>SomeComponents</div>;
});

//criamos o input

<div>
  <p>Insira no máximo 3 caracteres</p>
  <input type="text" ref={localInputRef} />
</div>;

// agora criamos um botão  componente pai que vai validar o input filho
<button onClick={() => inputRef.current.validate()}>Validate</button>;

// no componente SomeComponent  validamos da forma abaixo
useImperativeHandle(ref, () => {
  return {
    validate: () => {
      if (localInputRef.current.value.length > 3) {
        localInputRef.current.value = "";
      }
    },
  };
});
```

## Custom Hook

- Os custom hooks sao os hooks que nos criamos
- Muitas vezes para abstrair funções complexas do componente ou simplesmente reaproveitar código
- Esta técnica e muito utilizada em projetos profissionais

Criamos uma pasta hooks/usePrevious.js

```tsx
import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
```

Criamos components/HookCustom.js

```tsx
import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export const HookCustom = () => {
  //Criamos um estado
  const [number, setNumber] = useState();

  //Chamamos nosso hook criado
  const previousValue = usePrevious(number);

  return (
    <div>
      <h1>Hook Custom </h1>
      <p>Atual : {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
      <hr />
    </div>
  );
};
```

## useDebugValue

- E um hook que e utilizado para debugar
  = Aconselhado para ser utilizado em custom hooks
- Adiciona uma area no React devtools ela estará no componente em que o hook e utilizado

Vamos no nosso custom hook

usePrevious.js

```tsx
useDebugValue("---- CUstom hook e useDebugValue ");
useDebugValue("---- o numero onterior e " + value);
```

ficando assim completo

```tsx
import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("---- CUstom hook e useDebugValue ");
  useDebugValue("---- o numero onterior e " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
```
