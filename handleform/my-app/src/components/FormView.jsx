import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function FormView({formData, setFormData}) {


    // deleting data into array
    const handleDelete = (id) => {
        const deleteData = formData.filter((element) => element.id !== id )
        setFormData(deleteData);
    }


  return (
    <>
    <h2>Form Data</h2>
    {formData.map((element) => {
        return (
            <div className='formViewContainer' key={element.id}>
            <div className='formViewContainer_left'>
            <p>{element.name}</p>
            <p>{element.number}</p>
            </div>

            <div className='formViewContainer_right'>
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(element.id)}/>
            </div>

        </div>
        )

    })}
   
    </>
  )
}

export default FormView