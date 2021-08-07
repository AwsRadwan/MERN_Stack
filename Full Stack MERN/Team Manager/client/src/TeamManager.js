import React, {useState, useEffect} from 'react'
import './App.css'
import { navigate, Router } from '@reach/router'
import axios from 'axios';
import PlayersList from './views/PlayersList';
import Games from './views/Games';
import GameForm from './views/GameForm';
import PlayerForm from './views/PlayerForm';

const TeamManager = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/players")
            .then(res => {
                setPlayers(res.data.Players);
                setLoaded(true);
            })
        }, []
    );

    const addPlayerSubmit = player => {
        axios.post('http://localhost:8000/api/players/new', player)
                .then(res=>{
                    console.log(res);
                    setPlayers([...players, res.data.Player])
                    navigate("/")
                })
                .catch( (err) => {
                    console.log(err.response);
                })
    }

    return (
        <div>
            <Router>
                {loaded && <PlayersList path="/" players={players} />}
                {loaded && <Games path="/games" players={players} />}
                <GameForm path="/games/new" />
                <PlayerForm path="players/new" onSubmitProp={addPlayerSubmit} />
            </Router>
        </div>
    )
}

export default TeamManager
