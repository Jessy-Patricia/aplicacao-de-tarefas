import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import TaskItem from "../components/TaskItem";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import "./Home.css";

const Home = () => {
  const { 
    tasks, 
    removeTask, 
    editTask, 
    toggleTask 
  } = useContext(TaskContext);

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [filter, setFilter] = useState("all");

 
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }
    if (filter === "pending") {
      return !task.completed;
    }
    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="container">
        <ThemeToggle />

      <h1>Lista de Tarefas</h1>

      <div className="task-stats">
        <span>Total: <strong>{totalTasks}</strong></span>
        <span>Concluídas: <strong>{completedTasks}</strong></span>
        <span>Pendentes: <strong>{pendingTasks}</strong></span>
      </div>

      <Link to="/add-task" className="add-link">
        Adicionar nova tarefa
      </Link>

      {tasks.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Nenhuma tarefa adicionada.</p>
      ) : (
        <>
        <div className="filters">
        <button 
    className={filter === "all" ? "active" : ""} 
    onClick={() => setFilter("all")}
  >
        Todas
        </button>
        <button 
    className={filter === "pending" ? "active" : ""} 
    onClick={() => setFilter("pending")}
  >
        Pendentes
        </button>
        <button 
    className={filter === "completed" ? "active" : ""} 
    onClick={() => setFilter("completed")}
  >
        Concluídas
        </button>
    </div>

          <ul>
            <AnimatePresence>
            {filteredTasks.map((task) => (
                <motion.div
              
                key={task.id}
                initial={{ opacity: 0, x: -20 }}  
        animate={{ opacity: 1, x: 0 }}    
        exit={{ opacity: 0, x: 20 }}      
        transition={{ duration: 0.3 }}   
      >
        <TaskItem
                task={task}
                editingId={editingId}
                editedText={editedText}
                setEditedText={setEditedText}
                setEditingId={setEditingId}
                editTask={editTask}
                removeTask={removeTask}
                toggleTask={toggleTask}
              />
            </motion.div>
    ))}
            </AnimatePresence>
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;