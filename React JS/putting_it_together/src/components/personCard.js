import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/> */}

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
                <Button onClick={ this.addYear }>Add</Button>{' '}
            </div>
        );
    }
}

export default PersonCard;