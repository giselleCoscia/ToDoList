const List = ({ tasks, deleteTask }) => {
  return tasks.map((task) => (
    <li key={task.id}>
      {task.name} <button onClick={() => deleteTask(task.id)}>eliminar {task.id}</button>{" "}
      <button>Completar</button>
    </li>
  ));
};

export default List;
