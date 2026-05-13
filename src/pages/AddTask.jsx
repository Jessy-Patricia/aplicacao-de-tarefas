import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {

  const [task, setTask] = useState("");

  const { addTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(task.trim() === "") return;

    const newTask = {
  id: Date.now(),
  text: task,
  completed: false
};
    console.log(newTask);
    addTask(newTask);

    setTask("");
  };

  return (
    <div>
      <h1>Adicionar Tarefa</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button type="submit">
          Adicionar
        </button>

      </form>

      <Link to="/">
        Voltar para Home
        </Link>
    </div>
  );
};

export default AddTask;