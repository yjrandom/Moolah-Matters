import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import WalletImg from '../../assets/images/wallet.png'
import RegisterPage from "./RegisterPage";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100vh - 64px)',
    },
    left: {
        boxSizing: 'border-box',
        backgroundColor: '#06D6A0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5%'
    },
    image: {
        width: '65%',
    },
    titleText: {
        textAlign: 'center',
        color: 'white',
    },
}));

export default function SignInSide({setAuth}) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item md={7} className={classes.left} container justifyContent='center'>
                <h1 className={classes.titleText}>Don't spend money you haven't earn.</h1>
                <img className={classes.image} src={WalletImg} alt="Logo"/>
            </Grid>
            <RegisterPage setAuth={setAuth}/>
        </Grid>
    );
}
