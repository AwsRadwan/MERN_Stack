import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button } from '@material-ui/core';

const DeleteButton = (props) => {

    const { task, onClickHandler } = props;

    const deleteProject = (e) => {
        axios.delete("http://localhost:8000/api/tasks/delete/" + task._id)
        .then(res => {
            console.log("-I- " + res)
            onClickHandler();
        })
        .catch(err => console.log("-E- " + err))
    }

    return (
        <div>
            <button type="button" class="btn btn-danger" onClick={deleteProject} >Remove Project</button>
        </div>
    )
}

export default DeleteButton
