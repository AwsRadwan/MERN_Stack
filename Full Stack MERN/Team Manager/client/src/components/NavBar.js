import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from '@reach/router';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = (props) => {

    // const [games, setGames] = useState([]);
    // const [status1, setStatus1] = useState(false);
    const classes = useStyles();

    // useEffect(
    //     () => {
    //         axios.get("http://localhost:8000/api/games")
    //         .then(res => {
    //             setGames(res.data.Games);
    //             setStatus1(true);
    //         })
    //     }, []
    // );

    return (
        <div className={classes.root} id="NavBar">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/"> Manage Players |</Link><Link to="/games"> Manage Player Status</Link>
                </Typography>
                {/* {
                    status1 && games.map(
                        (x) => (
                            <Link to={"/games/"+x._id}> {x.name} </Link>
                        )
                    )
                } */}
                <Link to="/players/new" > Add New Player |</Link>
                <Link to="/games/new" > Add New Game </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
