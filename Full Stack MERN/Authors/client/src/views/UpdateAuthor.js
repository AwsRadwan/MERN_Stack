import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import axios from 'axios';


const UpdateAuthor = (props) => {
    const [author, setAuthor] = useState("");

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/authors" + props.id)
            .then(res => {
                setAuthor(res.data);
            })
        }, []
    );

    return (
        <div>
            <Header link="/" />
            <Form id={props.id} action="update" thisAuthor={author} />
        </div>
    )
}

export default UpdateAuthor
