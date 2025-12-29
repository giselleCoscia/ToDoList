import { useState } from "react";

const List = ({ tasks, deleteTask,editTask}) => {
  const [taskId, setTaskId] = useState();
  const [taskNew,setTaskNew]=useState();
  // guardar el nuevo valor de update -> usar updateTask
  // -> useState para eso
  // -> onClick que guarde
  // -> borrar id para que se valla el input

  return (
    <>
      {tasks.map((task) => {
        return (
          <div>
            {" "}
            {taskId == task.id ? (
              <input type="text" onChange={(e)=>setTaskNew(e.target.value) } defaultValue={task.name}></input>
            ) : (
              task.name
            )}{" "}
            <button onClick={() => deleteTask(task.id)}> Delete</button>
            {taskId == task.id ? (
              <button onClick={() =>{ editTask(taskId, taskNew)
                setTaskId(null)}}> Save</button>
            ) : (
              <button onClick={() => setTaskId(task.id)}> Edit</button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default List;
