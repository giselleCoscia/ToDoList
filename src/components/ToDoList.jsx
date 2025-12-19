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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const editTask = (id, newTask) => {
    console.log({ id, newTask });

    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return { id, name: newTask };
        }
        return task;
      })
    );
  };
  console.log(tasks);

  return (
    <>
      <Form addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} editTask={editTask} addTask={addTask} />
    </>
  );
};

export default ToDoList;
