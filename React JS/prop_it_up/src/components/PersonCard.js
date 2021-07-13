import React, { Component } from 'react'

class PersonCard extends Component {
    render(){
        const {lname, fname, age, color} = this.props;
        return(
            <div>
                <h1>{fname}, {lname}</h1>
                <p>- Age: {age}</p>
                <p>- Hair Color: {color}</p>
            </div>
        );
    }
}

export default PersonCard;