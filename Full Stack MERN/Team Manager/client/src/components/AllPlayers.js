import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Link } from '@reach/router';

import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StatusButton from './StatusButton';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const AllPlayers = (props) => {

    const classes = useStyles();
    const [players, setPlayers] = useState(props.list);
    const [playersInGame, setPlayersInGame] = useState(props.list);
    const [games, setGames] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/games")
            .then(res => {
                setGames(res.data.Games);
                // setStatus(true);
            })
        }, []
    );

    const removeFromDom = x => {
        setPlayers(players.filter(player => player._id != x))
    }

    const thisGame = (id) => {
        setPlayersInGame(players.filter(p => p.games.includes(id)));
    }

    // const buttonClick = pp => {
    //     var newList = players.filter(i => i._id != pp._id);
    //     setPlayers([...newList, pp]);
    // }

    return (
        <div>
            {
                props.type === "all" ? 
                <TableContainer component={Paper}>
            <Link to="/" > List |</Link><Link to="/players/new" > Add Player </Link>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <h4 id="ttt"> All Players </h4>
                <TableRow>
                    <StyledTableCell>Author Name</StyledTableCell>
                    <StyledTableCell>Preferred Position</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {players ? players.map((x, index) => (
                    <StyledTableRow key={index}>
                    <StyledTableCell key={index} component="th" scope="row"> {x.name} </StyledTableCell>
                    <StyledTableCell key={index} component="th" scope="row"> {x.position} </StyledTableCell>
                    <StyledTableCell key={index} align="right"> <DeleteButton id={x._id} successCallback={()=>removeFromDom(x._id)} /> </StyledTableCell>
                    </StyledTableRow>
                ))
                : <h4>Loading ... </h4>
                }
                </TableBody>
            </Table>
            </TableContainer>
            :
            <TableContainer component={Paper}>
            <h1>  </h1>
            <Button variant="outlined" color="primary" onClick={(e) => setPlayersInGame(players)} > All Players </Button>
            {
                games ? games.map(
                    (x) => (
                        <Button variant="outlined" color="primary" onClick={(e) => thisGame(x._id)} > {x.name} </Button>
                    )
                )
                :
                <p>There is No Games</p>
            }
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Player Name</StyledTableCell>
                    <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {playersInGame ? playersInGame.map((x, index) => (
                    <StyledTableRow key={index}>
                    <StyledTableCell key={index} component="th" scope="row"> {x.name} </StyledTableCell>
                    <StyledTableCell key={index} align="right" id="asd" > <StatusButton id={x._id} v="Playing" pStatus={x.status} /> <StatusButton id={x._id} v="Not Playing" pStatus={x.status} /> <StatusButton id={x._id} v="Undecided" pStatus={x.status} /> </StyledTableCell>
                    </StyledTableRow>
                ))
                : <h4>Loading ... </h4>
                }
                </TableBody>
            </Table>
            </TableContainer>
            }
        </div>
    )
}

export default AllPlayers