import React, { useReducer, useState } from "react";

export const HookUseReducer = () => {
  const funcReducer = (state, action) => {
    return Math.random(state);
  };

  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = { id: Math.random(), text: taskText };

        setTaskText("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD" });
  };

  const deleteTask = (id) =>{
      console.log(id)
      dispatchTasks({type: "DELETE",id})
  }

  const [number, dispatch] = useReducer(funcReducer);

  console.log(tasks);
  return (
    <div>
      <h2>useReducer</h2>
      <p>Numero : {number}</p>
      <button onClick={dispatch}>View Number</button>
      <h3>useReducer com Action</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
       
      {tasks.map((task) => (
        <li key={task.id}>{task.text}  <button onClick={()=>{deleteTask(task.id)}}>Deletar</button></li>
      ))}

      <hr />
    </div>
  );
};
