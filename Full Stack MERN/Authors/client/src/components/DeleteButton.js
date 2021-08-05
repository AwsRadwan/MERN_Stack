import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';

const DeleteButton = (props) => {

    const deleteAuthor = (x) => {
        axios.delete("http://localhost:8000/api/authors/delete/" + x)
        .then(res => console.log("-I- " + res))
        .catch(err => console.log("-E- " + err))
    }

    return (
        <Button variant="outlined" color="secondary" onClick={e => {deleteAuthor(props.id)}} >
            Delete
        </Button>
    )
}

export default DeleteButton
