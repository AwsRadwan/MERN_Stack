import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button } from '@material-ui/core';

const StartButton = (props) => {
    const [status, setStatus] = useState("In Progress");
    const { task, onClickHandler } = props;

    const onClickHandle = (e) => {
        axios.put("http://localhost:8000/api/tasks/updateStatus/" + task._id, {
            status
        })
        .then(res => {
            console.log("-I- " + res)
            onClickHandler();
            console.log(res.data);
        })
        .catch(err => console.log("-E- " + err))
    }

    return (
        <div>
            <button type="button" class="btn btn-warning" onClick={onClickHandle} >Start Project</button>
        </div>
    )
}

export default StartButton
