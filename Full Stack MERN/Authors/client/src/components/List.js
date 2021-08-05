import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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


const List = () => {

    const classes = useStyles();

    const [authors, setAuthors] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
                // setStatus(true);
            })
        }, [authors]
    );


    return (
        <div id="table">
            <TableContainer component={Paper}>
            
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <h4 id="ttt">We Have Qoutes By: </h4>
                <TableRow>
                    <StyledTableCell>Author Name</StyledTableCell>
                    <StyledTableCell align="right">Actions Available</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {authors ? authors.map((x) => (
                    <StyledTableRow key={x._id}>
                    <StyledTableCell component="th" scope="row"> {x.name} </StyledTableCell>
                    <StyledTableCell align="right"> <DeleteButton id={x._id} /> ~ <UpdateButton id={x._id} /> </StyledTableCell>
                    </StyledTableRow>
                ))
                : <h4>Loading ... </h4>
                }
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default List
