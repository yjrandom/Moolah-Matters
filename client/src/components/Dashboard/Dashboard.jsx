import React from 'react'
import {Grid, Paper, Typography} from "@material-ui/core";
import AccountCards from "./AccountCards";
import Budget from "./Budget";
import Transactions from "./Transactions";
import PigImg from '../../assets/images/piggy-bank.png'
import BankImg from '../../assets/images/bank.png'

export default function Dashboard() {
    // Mock Data
    let accountNames = [
        {
            name: "Total",
            color: '#06D6A0',
            icon: PigImg
        },
        {
            name: "UOB Debit",
            color: '#6199F5',
            icon: BankImg
        }

    ]

    return (
        <>
            <Grid container spacing={5}>

                <Grid item xs={12} lg={6}>
                    <Typography align='center' component='h3' variant='h3'>Accounts</Typography>
                    {accountNames.map(account => (
                            <AccountCards account={account}/>
                        ))}
                </Grid>

                <Grid item container xs={12} lg={6}>
                    <Grid item xs={12} style={{marginBottom:"5%"}}>
                        <Typography align='center' component='h3' variant='h3'>Budget</Typography>
                        <Budget/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align='center' component='h3' variant='h3'>Transactions</Typography>
                        <Transactions/>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}
