import Form from "./Form";
import List from "./List";
import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: task,
      },
    ]);
  };

  const deleteTask = (asedwrqweeda) => {
    setTasks(tasks.filter((task) => task.id !== asedwrqweeda));
  };
  return (
    <>
      <Form addTask={addTask} />
      <List tasks={tasks}  deleteTask={deleteTask}/>
    </>
  );
};

export default ToDoList;
