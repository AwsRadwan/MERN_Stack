import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router'


const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
}));

const Form = (props) => {

    const classes = useStyles();
    const [name, setName] = useState(props.action === "create" ? "" : props.thisAuthor.name);
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
            if(props.action === "create"){
                axios.post('http://localhost:8000/api/authors/new', {
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
                // nameErr.length > 1 ? <p></p> : navigate("/");
            }
            else if(props.action === "update"){
                axios.put('http://localhost:8000/api/authors/update/' + props.id, {
                    name
                })
                .then(res=>{
                    console.log(res);
                    setName("");
                    navigate("/");
                })
                .catch(err=>{
                    console.log(err);
                    setNameErr(err.response.data.errors.name.message);
                })
                // nameErr.length > 1 ? <p></p> : navigate("/");
            }
        }
        else {
            console.log("!!!")
        }
    }
    const header = () => {
        if(props.action === "create"){
            return <h3>Add New Author</h3>
        }
        else {
            return <h3>Edit Author's Name</h3>
        }
    }
    

    return (
        <div id="formm">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
            {header()}
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

export default Form
