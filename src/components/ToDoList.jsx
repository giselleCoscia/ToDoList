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
        isCompleted: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const editTask = (id, taskNew) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return { id, name: taskNew, isCompleted };
        }
        return task;
      })
    );
  };

  const chageStatusTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return {
          ...task,
          isCompleted: task.id == id ? !task.isCompleted : task.isCompleted,
        };
      })
    );
  };

  return (
    <>
      <Form addTask={addTask} />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        chageStatusTask={chageStatusTask}
      />
    </>
  );
};

export default ToDoList;
