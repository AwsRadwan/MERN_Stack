import React from 'react';
import {useState, useEffect} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Planets = (props) => {
    
    const [l, setL] = useState("");

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response=>{setL(response.data)})
    }, [props.id]);


    return (
        <div>
            <article>
                <h3> {l.name} </h3>
                <ul>
                    <li> {l.climate} </li>
                    <li> {l.terrain} </li>
                    <li> {l.surface_water} </li>
                    <li> {l.population} </li>
                </ul>
            </article>
        </div>
    )

}

export default Planets
