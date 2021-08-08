import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button } from '@material-ui/core';

const CompleteButton = (props) => {

    const [status, setStatus] = useState("Completed");
    const { task, onClickHandler } = props;

    const onClickHandle = (e) => {
        axios.put("http://localhost:8000/api/tasks/updateStatus/" + task._id, {
            status
        })
        .then(res => {
            console.log("-I- " + res)
            onClickHandler();
        })
        .catch(err => console.log("-E- " + err))
    }

    return (
        <div>
            <button type="button" class="btn btn-success" onClick={onClickHandle} >Move To Completed</button>
        </div>
    )
}

export default CompleteButton
