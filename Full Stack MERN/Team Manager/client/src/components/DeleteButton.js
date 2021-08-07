import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';

const DeleteButton = (props) => {

    const { id, successCallback } = props;

    const deletePlayer = (e) => {
        axios.delete("http://localhost:8000/api/players/delete/" + id)
        .then(res => {
            console.log("-I- " + res)
            successCallback();
        })
        .catch(err => console.log("-E- " + err))
    }

    return (
        <Button variant="outlined" color="secondary" onClick={deletePlayer} >
            Delete
        </Button>
    )
}

export default DeleteButton
