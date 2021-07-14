import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    addYear = () => {
        this.setState({ age: this.state.age +1 });
    }

    render(){
        const {lname, fname, color} = this.props;
        return(
            <div>
                <h1>{fname}, {lname}</h1>
                <p>- Age: {this.state.age}</p>
                <p>- Hair Color: {color}</p>
                <fieldset>
                    <button onClick={ this.addYear }>Add</button>
                </fieldset>
            </div>
        );
    }
}

export default PersonCard;