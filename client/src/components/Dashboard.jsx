import React from 'react'
import {Grid, Paper, Typography} from "@material-ui/core";
import AccountCards from "./lib/AccountCards";


export default function Dashboard() {

    return (
        <>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={6}>
                    {/*<Paper>*/}
                    <Typography align='center' component='h3' variant='h3'>Accounts</Typography>
                        <AccountCards />
                    {/*</Paper>*/}
                </Grid>
                <Grid item xs={12} md={6}>
                        <Paper>Budget</Paper>
                </Grid>
            </Grid>
        </>
    )
}
