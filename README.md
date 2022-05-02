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
