import React from 'react'

function TaskItem({tasks, setTasks}) {


    const handleDelete = (id) => {

        const deletedData = tasks.filter((element) => element.id !== id);
        setTasks(deletedData);

    }

    const handleCheckbox = (id) => {
        
        setTasks((element) => 
        element.map((item) => item.id === id ? {...item, isChecked: !item.isChecked } : item
        ))
   
    }

  return (
    <>
    {tasks.map((element) => {
        return (
        <div className='taskItem' key={element.id}>
        <div>
        <input type='checkbox' onChange={() => handleCheckbox(element.id)} />
        <span className='desc' style={element.isChecked ? { textDecoration: "line-through" } : {}} > {element.desc}</span>
        </div>
        <div>
        <button className='taskItem_button' onClick={()=>handleDelete(element.id)}>Delete</button>
        </div>
    </div>
        )
    })}
        </>
  )
}

export default TaskItem

