import React from 'react'

const PersonCard = props => {
    return(
        <div>
            <h1>{props.fname}, {props.lname}</h1>
            <p>- Age: {props.age}</p>
            <p>- Hair Color: {props.color}</p>
        </div>
    );
}

// class PersonCard extends Component {
//     render(){
//         const {lname, fname, age, color} = this.props;
//         return(
//             <div>
//                 <h1>{fname}, {lname}</h1>
//                 <p>- Age: {age}</p>
//                 <p>- Hair Color: {color}</p>
//             </div>
//         );
//     }
// }

export default PersonCard;