import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router'
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
}));

const GameForm = (props) => {

    const classes = useStyles();
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");



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

    const onSubmitHandler = e => {
        e.preventDefault();
        if(nameErr.length <= 1){
                axios.post('http://localhost:8000/api/games/new', {
                name
                })
                .then(res=>{
                    console.log(res);
                    setName("");
                    navigate("/");
                })
                .catch( (err) => {
                    setNameErr(err.response.data.errors.name.message);
                    console.log(err.response);
                    
                })
    }
}

    return (
        <div>
        <NavBar />
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
            <h2>Add Game: </h2>
                <TextField
                    required
                    id="outlined-required"
                    label={name}
                    defaultValue={name}
                    variant="outlined"
                    onChange={(e)=>nameHandler(e.target.value)}
                    type="text"
                    value={name}
                    placeholder={name}
                />
                <br />
                <p id="err"> {nameErr} </p>
                <Button type="submit" variant="outlined" color="primary">
                Primary
                </Button>
            </form>
        </div>
    )
}

export default GameForm