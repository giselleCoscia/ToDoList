import { useState } from "react";


  const Form =({addTask})=> {
 
  const [task, setTask] = useState ('')

  return (
    <>
      <input type="text" onChange={(e)=>setTask(e.target.value)} value={task}  />
      <button onClick={()=>(addTask(task))}>Agregar</button>
      
    </>
  );
}

export default Form;
