import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { navigate } from '@reach/router'
import axios from 'axios';




const Form = (props) => {

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [date, setDate] = useState("");
    const [dateErr, setDateErr] = useState("");
    const [errors, setErrors] = useState([]); 
    let newDate = new Date()
    let dateNow = newDate.getDate();


    const nameHandler = (value) => {
        setName(value);
        if(value.length < 1){
            setNameErr("This field can't be empty !!");
        }
        else if(!isNaN(value)){
            setNameErr("this field can't contain a numbers !!");
        }
        else if(value.length < 3){
            setNameErr("Name shold not be less than 3 characters");
        }
        else {
            setNameErr("");
        }
    }

    const dateHandler = (value) => {
        setDate(value);
        if(value < dateNow){
            setDateErr("Date Can't Be in Past !!");
        }
        else {
            setDateErr("");
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(nameErr.length <=1 && dateErr.length <= 1){
            axios.post('http://localhost:8000/api/tasks/new', {
            name, date
            })
            .then(res=>{
                console.log(res);
                setName("");
                setDate("")
                navigate("/");
            })
            .catch( (err) => {
                // setNameErr("Name Must Be Unique !!");
                // setDateErr(err.response.data.error.errors.date.message);
                console.log(err.response);
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
        }
    }

    return (
        <div id="formm">
            <form onSubmit={onSubmitHandler} >
                <div class="form-group">
                    <label className="lab" for="formGroupExampleInput">Project Name:</label>
                    <input type="text" onChange={(e)=>nameHandler(e.target.value)} class="form-control" id="formGroupExampleInput" placeholder="Task || Project" />
                    {
                    nameErr && 
                        <p style={{color: 'red'}}>{nameErr}</p>
                    }
                </div><br />
                <div class="form-group">
                    <label className="lab" for="formGroupExampleInput2">Due Date:</label>
                    <input type="date" onChange={(e)=>dateHandler(e.target.value)} class="form-control" id="formGroupExampleInput2" placeholder="Due Date" />
                    {
                    dateErr && 
                        <p style={{color: 'red'}}>{dateErr}</p>
                    }
                </div>
                <br />
                {
                    errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)
                }
                <br />
                <button type="submit" class="btn btn-primary">Add Project</button>
            </form>
        </div>
    )
}

export default Form
