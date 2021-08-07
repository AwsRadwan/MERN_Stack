import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
}));

const PlayerForm = (props) => {

    const classes = useStyles();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
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

    const handlePosition = (value) => {
        setPosition(value);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(nameErr.length <= 1){
            props.onSubmitProp({name, position});
    }
}

    return (
        <div>
        <NavBar />
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
            <h2>Add Player: </h2>
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
                {/* <FormControl className={classes.formControl} error> */}
                    <InputLabel id="demo-simple-select-error-label">Position</InputLabel>
                    <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={position}
                    onChange={(e) => handlePosition(e.target.value)}
                    renderValue={(value) => `⚠️  - ${value}`}
                    >
                    <MenuItem value={null}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Forword">Forword</MenuItem>
                    <MenuItem value="Midfielder">Midfielder</MenuItem>
                    <MenuItem value="Goolkeeper">Goolkeeper</MenuItem>
                    <MenuItem value="Goolkeeper">Defense</MenuItem>
                    </Select>
                    <FormHelperText>Error</FormHelperText>
                {/* </FormControl> */}
                <br />
                <p id="err"> {nameErr} </p>
                <Button type="submit" variant="outlined" color="primary">
                Primary
                </Button>
            </form>
        </div>
    )
}

export default PlayerForm