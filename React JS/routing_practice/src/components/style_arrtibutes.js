import React from 'react'

const Style = (props) => {
    return (
        <div>
            <h1 style={{ backgroundColor: props.bcolor, color:props.color, padding: 30 }}>The Word is: {props.word} </h1>
        </div>
    )
}

export default Style
