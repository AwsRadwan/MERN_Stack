import React from 'react'
import Form from '../components/Form';
import Header from '../components/Header';
import { Link } from '@reach/router';



const NewProject = (props) => {

    return (
        <div>
        <br />
            <Header />
            <br />
            <Link to="/" > Back To Dashboard </Link>
            <br /><br />
            <Form  />
            <br />
        </div>
    )
}

export default NewProject
