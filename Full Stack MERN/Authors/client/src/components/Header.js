import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from '@reach/router';


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

const Header = (props) => {

    const [text, setText] = useState("x");
    // const textValue = () => {
    //     if(props.link === "/"){
    //         setText("Add another Author >>>");
    //     }
    //     else {
    //         setText("Home");
    //     }
    //     return text;
    // };
    useEffect(
        () => {
            if(props.link === "/"){
                setText("Home");
            }
            else {
                setText("Add another Author >>>");
            }
        }, []
    )

    const classes = useStyles();
    return (
        <div className={classes.root} id="header">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Favorite Authors
                </Typography>
                <Link to={props.link}> {text} </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
