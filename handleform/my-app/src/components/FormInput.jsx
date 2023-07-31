import React, { useState } from 'react'
import FormView from './FormView';

export default function FormInput() {

    const [formData, setFormData] = useState([]);
    const [formName, setFormName] = useState("");
    const [formNumber, setFormNumber] = useState("");


    //inserting into data array
    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            id: new Date().getTime().toString(),
            name: formName,
            number:formNumber,
        }

        setFormData([...formData,data]);
        setFormName(" ");
        setFormNumber(" ");
    }

  return (
    <>
    <div className='formContainer'>
        <form>
  <div className="mb-3">
    <label for="formName" className="form-label">Name</label>
    <input type="text" className="form-control" id="formName" aria-describedby="emailHelp" value={formName} onChange={(e)=>setFormName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="formNumber" className="form-label">Number</label>
    <input type="text" className="form-control" id="formNumber" value={formNumber} onChange={(e)=>setFormNumber(e.target.value)}/>
  </div>
 
  <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>
    </div>

    <FormView formData={formData} setFormData={setFormData} />
    </>
  )
}
