import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import { navigate } from '@reach/router';

const StatusButton = (props) => {

    const [status, setStatus] = useState(props.v);
    const [color, setColor] = useState("primary");
    const [view, setView] = useState("outlined");
    const [loaded, setLoaded] = useState(false);

    const handleSubmit = () => {
        axios.put("http://localhost:8000/api/player/status/" + props.id, {
            status
        })
        .then(res => {
            console.log("-I- " + res);
            setView("contained");
            // props.updatePlayers(res.data.Player);
            navigate("/games")
        })
        .catch(err => console.log("-E- " + err))
    }
    useEffect(() => {
        if(status === "Playing"){
            setColor("primary");
        }
        else if(status === "Not Playing"){
            setColor("secondary");
        }
        else if(status === "Undecided"){
            setColor("inherit");
        }
        if(props.pStatus === status){
            setView("contained");
        }
        setLoaded(true);
    }, [])

    return ( 
        <Button variant={view} color={color} onClick={handleSubmit} > {status} </Button>
    )
}

export default StatusButton