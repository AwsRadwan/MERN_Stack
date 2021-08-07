import React from 'react'
import AllPlayers from '../components/AllPlayers'
import NavBar from '../components/NavBar'

const Games = (props) => {
    return (
        <div>
            <NavBar />
            <AllPlayers list={props.players} type="" />
        </div>
    )
}

export default Games