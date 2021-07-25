import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = (props) => {
    // // useEffect(() =>{
    //     butdisplay();
    // },  [])

    const [pokemon,setPokemon]=useState([]);
    const  butdisplay=() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{setPokemon(response.data.results)})

};
    return (
        <div>
            <button  onClick={butdisplay}> Fetech Pokemon</button>
            <ul>
            {pokemon.length > 0 && pokemon.map(
                (pokemon,index)=>{
                    return (<li key={index}>{pokemon.name}</li>)
                }
            )}
            </ul>
        </div>
    )
}
export default MyComponent