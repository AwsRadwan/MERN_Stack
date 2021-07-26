import { red } from '@material-ui/core/colors'
import React from 'react'

const Word = (props) => {
    const check = () => {
        if(isNaN(props.x) === true){
            return (<h1 style={{ color: red, }} >The Word is: {props.x} </h1>);
        }
        else {
            return (<h1 style={{ color: red, }} >The Number is: {props.x} </h1>);
        }
    }

    return (
        <div>
            { check() } 
        </div>
    )
}

export default Word
