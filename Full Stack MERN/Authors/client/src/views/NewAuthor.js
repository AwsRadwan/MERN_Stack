import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

const NewAuthor = (props) => {
    return (
        <div>
            <Header link="/" />
            <Form action="create" />
        </div>
    )
}

export default NewAuthor
