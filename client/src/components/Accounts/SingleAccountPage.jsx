import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Axios from "../../util/Axios";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function SingleAccountPage({transactions, setTransactions}) {
    // Table Styles
    const useStyles = makeStyles({
        table: {
            minWidth: 350,
        },
    });
    const classes = useStyles();
    const {id} = useParams()

    useEffect(() => {
        async function getTransactions() {
            try {
                let {data} = await Axios.post('/api/transactions/', {id})
                console.log(data)
                setTransactions(data)
            } catch (e) {
                console.log(e)
            }
        }
        getTransactions()
    },[])

    // console.log(transactions)
    return (
        <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions && transactions.map(transaction => (
                                <TableRow key={transaction.id}>
                                    <TableCell component="th" scope="row" sortDirection='desc'>
                                        {new Date(transaction['date_time']).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell align="left">{transaction.name}</TableCell>
                                    <TableCell align="right">{transaction.transaction_type.name}</TableCell>
                                    <TableCell align="right">${transaction.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    );
}

export default SingleAccountPage;
