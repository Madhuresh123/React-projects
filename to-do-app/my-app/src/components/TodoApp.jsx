import React, { useState } from 'react'
import TaskItem from './TaskItem';

function TodoApp() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const completedTasks = tasks.filter((item) => item.isChecked === true )

    const handleAddTask = () => {

        const data = {
            id: new Date().getTime().toString(),
            desc: task,
            isChecked: false,
        }
        setTasks([...tasks,data]);
        setTask("");
    }

  return (
    <div className='container'>

        <div className="todo-container-top">    
        <div className='count_container' style={{marginLeft: "1rem", backgroundColor: "orange" }}>Total tasks = {tasks.length}</div>
        <div className='count_container' style={{marginRight: "1rem", backgroundColor: "lightGreen" }}>Completed tasks = {completedTasks.length}</div>
        </div>


        <div className="todo-container">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAddTask}>Add Task</button>
     </div>
    <TaskItem tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default TodoApp