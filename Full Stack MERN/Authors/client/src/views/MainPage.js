import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import List from '../components/List'

const MainPage = (props) => {
    return (
        <div>
            <Header link="/new" />
            <List />
        </div>
    )
}

export default MainPage
