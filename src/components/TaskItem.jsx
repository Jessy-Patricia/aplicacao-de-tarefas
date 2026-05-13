const TaskItem = ({
  task,
  editingId,
  editedText,
  setEditedText,
  setEditingId,
  editTask,
  removeTask,
  toggleTask
}) => {

  return (

    <li className="task-item">

      {editingId === task.id ? (

        <>

          <input
            type="text"
            value={editedText}
            onChange={(event) =>
              setEditedText(event.target.value)
            }
          />

          <button
            onClick={() => {

              editTask(task.id, editedText);

              setEditingId(null);

              setEditedText("");

            }}
          >
            Salvar
          </button>

        </>

      ) : (

        <>

          <span
            style={{
              textDecoration:
                task.completed
                  ? "line-through"
                  : "none",
                opacity: task.completed ? 0.5 : 1,
                transition: "all 0.3s ease",
                display: "block"
            }}
          >
            {task.text}
          </span>

          <div className="task-buttons">

            <button
              onClick={() =>
                toggleTask(task.id)
              }
            >
              {task.completed
                ? "Desmarcar"
                : "Concluir"}
            </button>

            <button
              onClick={() => {

                setEditingId(task.id);

                setEditedText(task.text);

              }}
            >
              Editar
            </button>

            <button
              onClick={() =>
                removeTask(task.id)
              }
            >
              Excluir
            </button>

          </div>

        </>

      )}

    </li>
  );
};

export default TaskItem;