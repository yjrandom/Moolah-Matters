import React, {useEffect, useState} from 'react'
import {Container, Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import AccountCards from "./AccountCards";
import Budget from "./Budget";
import Transactions from "./Transactions";

import Axios from "../../util/Axios";

export default function Dashboard({accounts}) {
    const [user, setUser] = useState({})
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    //
    // async function getAccounts(){
    //     try{
    //         let {data} = await Axios.post(`/api/accounts/`, {user})
    //         console.log(data)
    //     }catch (e) {
    //         console.log(e.response)
    //     }
    // }

    return (
        <Container style={{paddingTop: "2%"}}>
            <Grid container
                  spacing={matches ? 5 : 2}
            >
                <Grid item xs={12} lg={6}>
                    <Typography align='center' component='h3' variant='h3'>Accounts</Typography>
                    {accounts && accounts.map(account => (
                            <AccountCards account={account} key={account.name}/>
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
        </Container>
    )
}
