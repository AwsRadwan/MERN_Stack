import React from 'react'
import AllPlayers from '../components/AllPlayers'
import NavBar from '../components/NavBar'

const PlayersList = (props) => {
    return (
        <div>
            <NavBar />
            <AllPlayers list={props.players} type="all" />
        </div>
    )
}

export default PlayersList