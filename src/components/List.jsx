import { useState } from "react";

const List = ({ tasks, deleteTask,editTask ,chageStatusTask}) => {
  const [taskId, setTaskId] = useState();
  const [taskNew,setTaskNew]=useState();
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div>
            {taskId == task.id ? (
              <input type="text" onChange={(e)=>setTaskNew(e.target.value) } defaultValue={task.name}></input>
            ) : (
              <span style={{textDecoration: task.isCompleted?"line-through":"none"}}>{task.name}</span>
            )}
            <button onClick={() => deleteTask(task.id)}> Delete</button>
            {taskId == task.id ? (
              <button onClick={() =>{ editTask(taskId, taskNew)
                setTaskId(null)}}> Save</button>
            ) : (
              <button onClick={() => setTaskId(task.id)}> Edit</button>
            )}
            <input type="checkbox" onClick={()=>chageStatusTask(task.id)} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
