import React from 'react'
import { navigate } from '@reach/router'
import { Button } from '@material-ui/core';


const UpdateButton = (props) => {

    const updateThis = (id) => {
        navigate("/update/"+id);
    }

    return (
        <Button variant="outlined" color="primary" onClick={e => {updateThis(props.id)}} >
        Edit
        </Button>
    )
}

export default UpdateButton
